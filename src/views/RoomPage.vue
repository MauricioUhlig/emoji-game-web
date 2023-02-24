<template>
  <div>
    <div class="codigo-sala">
      <CodigoSala style="codigo-sala" :codigo="codigo" />
    </div>
    <div class="emoji-list">
      <div>
        <p class="emojis">⚽😥👀🚀</p>
        <TimerRegressivo :segundos="30" @fim-de-tempo="fimDeTempo" />
      </div>
    </div>
  </div>
  <div class="form">
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Enviar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodigoSala from "../components/CodigoSala.vue";
import TimerRegressivo from "../components/TimerRegressivo.vue";
export default defineComponent({
  name: "RoomPage",
  components: {
    CodigoSala,
    TimerRegressivo,
  },
  data() {
    return {
      codigo: "sj49",
    };
  },
  methods: {
    fimDeTempo(){
      alert("acabou o tempo");
    }
  }
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
}
.form textarea {
  background-color: var(--vt-c-indigo);
  border-radius: 13px;
  color: white;
}
</style>
