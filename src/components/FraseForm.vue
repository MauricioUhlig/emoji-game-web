<template>
  <div>
    <textarea
      :name="nome"
      v-model="frase"
      v-on:keydown.ctrl.enter="emiteFrase"
      v-on:keydown.shift.enter="emiteFrase"
    ></textarea>
    <Botao nome="Enviar" bg-color="black" @ao-clicar="emiteFrase"></Botao>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
export default defineComponent({
  name: "FraseForm",
  props: {
    nome: {
      type: String,
      required: true,
    },
    largura: {
      type: Number,
      required: false,
    },
    altura: {
      type: Number,
      required: false,
    },
  },
  components: {
    Botao,
  },
  emits: ["fraseDigitada"],
  data() {
    return {
      frase: "",
    };
  },
  methods: {
    emiteFrase() {
      if (this.frase.trim() !== "") this.$emit("fraseDigitada", this.frase);
    },
  },
});
</script>

<style scoped>
textarea {
  display: flex;
  align-items: center;
  background-color: var(--vt-c-indigo);
  border-radius: 13px;
  color: white;
  width: 100%;
  margin: 0px 7px;
  padding: 7px 5px 5px 7px;
  min-height: 5rem;
}
</style>
