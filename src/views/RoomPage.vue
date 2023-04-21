<template>
  <div>
    <div class="codigo-sala">
      <CodigoSala style="codigo-sala" :codigo="codigo" />
    </div>
    <div class="emoji-list">
      <div>
        <p class="emojis">⚽😥👀🚀</p>
        <TimerRegressivo :segundos="300" @fim-de-tempo="fimDeTempo" />
      </div>
    </div>
  </div>
  <div class="form">
    <FraseForm nome="input" @frase-digitada="enviaFrase" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodigoSala from "../components/CodigoSala.vue";
import TimerRegressivo from "../components/TimerRegressivo.vue";
import FraseForm from "@/components/FraseForm.vue";
export default defineComponent({
  name: "RoomPage",
  components: {
    CodigoSala,
    TimerRegressivo,
    FraseForm,
  },
  data() {
    return {
      codigo: "sj49",
    };
  },
  methods: {
    fimDeTempo() {
      alert("acabou o tempo");
    },
    enviaFrase(frase: string) {
      alert(frase);
    },
  },
});
</script>

<style scoped>
.codigo-sala {
  display: block;
  place-content: top;
  margin-top: 10%;
}

.emojis {
  font-size: 2rem;
}
.emoji-list {
  margin-top: 50px;
  justify-content: center;
  display: flex;
}
@media (min-width: 1024px) {
  .emoji-list {
    height: 100%;
    margin-top: -80px;
    place-items: center;
  }
}

.form {
  display: flex;
  align-items: center;
}
</style>
