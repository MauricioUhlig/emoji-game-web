<template>
  <div :style="cssProps">
    <p>{{ timer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TimePartEnum } from "../Util/TimePartEnum.ts";
export default defineComponent({
  name: "TimerRegressivo",
  props: {
    segundos: {
      type: Number,
      required: true,
    },
    txColor: {
      type: String,
      required: false,
    },
  },
  emits: ["fimDeTempo"],
  data() {
    return {
      segundos_timer: this.segundos,
    };
  },
  created() {
    this.regressao();
  },
  methods: {
    TimePart(seconds: Number, part: TimePartEnum): String {
      let division: number;
      switch (part) {
        case TimePartEnum.hour:
          division = 3600;
          break;
        case TimePartEnum.minute:
          division = 60;
          seconds = seconds % 3600;
          break;
        default:
          division = 1;
          seconds = seconds % 60;
          break;
      }
      let timePart = "0" + Math.floor(seconds / division);
      return timePart.substring(timePart.length - 2);
    },
    regressao() {
      let intervalId = setInterval(() => {
        this.segundos_timer = this.segundos_timer - 1;
        if (this.segundos_timer === 0) {
          clearInterval(intervalId);
          this.$emit("fimDeTempo");
        }
      }, 1000);
    },
  },
  computed: {
    timer(): String {
      return (
        this.TimePart(this.segundos_timer, TimePartEnum.hour) +
        ":" +
        this.TimePart(this.segundos_timer, TimePartEnum.minute) +
        ":" +
        this.TimePart(this.segundos_timer, TimePartEnum.seconds)
      );
    },
    cssProps() {
      return {
        "--timer":
          this.segundos_timer > 10 ? "var(--color-text)" : "var(--timer-red)",
      };
    },
  },
});
</script>
<style>
p {
  text-align: center;
  color: var(--timer);
}
</style>
