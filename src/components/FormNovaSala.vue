<template>
  <div class="form">
    <form>
      <div class="input-box">
        <p>Insira um nome:</p>
        <input type="text" />
      </div>
      <Botao nome="Enviar" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
export default defineComponent({
  name: "FormNovaSala",
  props: {
    titulo: {
      type: String,
      required: false,
    },
  },
  components: {
    Botao,
  },
  emits: ["salvar"],
  data() {
    return {
      showModal: this.ativo,
    };
  },
  methods: {
    closeModal() {
      this.$emit("salvar");
    },
  },
});
</script>

<style>
.form {
  margin-top: 15px;
}
.input-box {
  display: flex;
  margin: 5px 7px;
}
.input-box input {
  margin-left: 10px;
  width: auto;
}
</style>
