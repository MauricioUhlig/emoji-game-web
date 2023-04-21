<template>
  <div>
    <Botao
      nome="Criar nova sala"
      :bgColor="bgColor"
      :txColor="txColor"
      @aoClicar="novaSala"
    ></Botao>
    <Botao
      nome="Entrar com código"
      :bgColor="bgColor"
      :txColor="txColor"
    ></Botao>
    <Botao nome="Sala aleatória" :bgColor="bgColor" :txColor="txColor"></Botao>

    <ModalForm :ativo="true" titulo="Criar nova sala" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
import ModalForm from "./ModalForm.vue";
export default defineComponent({
  name: "MenuInicial",
  components: {
    Botao,
    ModalForm,
  },
  data() {
    return {
      bgColor: "rgba(59, 157, 239, 1)",
      txColor: "",
    };
  },
  methods: {
    novaSala(botao: String) {
      console.log("Clicou no botão ", botao);
      this.$router.push("/room");
    },
  },
});
</script>
