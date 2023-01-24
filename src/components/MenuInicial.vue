<template>
  <Botao
    nome="Criar nova sala"
    :bgColor="bgColor"
    :txColor="txColor"
    @aoClicar="novaSala"
  ></Botao>
  <Botao nome="Entrar com código" :bgColor="bgColor" :txColor="txColor"></Botao>
  <Botao nome="Sala aleatória" :bgColor="bgColor" :txColor="txColor"></Botao>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
export default defineComponent({
  name: "MenuInicial",
  components: {
    Botao,
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
    },
  },
});
</script>
