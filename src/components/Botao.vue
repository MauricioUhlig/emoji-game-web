<template>
  <button :style="cssProps" @click="clique"><i></i>{{ nome }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Botao",
  props: {
    nome: {
      type: String,
      required: true,
    },
    icone: {
      type: String,
      required: false,
    },
    bgColor: {
      type: String,
      required: false,
      default: "#222222",
    },
    txColor: {
      type: String,
      required: false,
    },
  },
  emits: ["aoClicar"],
  computed: {
    cssProps() {
      return {
        "--bg-color": this.bgColor,
        "--bg-hover-color": "rgba(59, 157, 239, 0.8)",
        "--tx-color": this.txColor,
      };
    },
  },
  methods: {
    clique() {
      this.$emit("aoClicar", this.nome);
    },
  },
});
</script>

<style scoped>
button {
  background-color: var(--bg-color);
  color: var(--tx-color, var(--vt-c-white));
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  margin: 5px 7px 5px 7px;
}
button:hover {
  background-color: var(--bg-hover-color);
}
</style>
