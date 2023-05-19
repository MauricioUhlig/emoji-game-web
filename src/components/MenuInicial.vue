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

    <ModalForm
      v-if="modalNovaSala"
      :titulo="modalTitulo"
      @clickFechar="fecharModal"
      >
      <FormNovaSala />
      </ModalForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
import ModalForm from "./ModalForm.vue";
import FormNovaSala from "./FormNovaSala.vue";
export default defineComponent({
  name: "MenuInicial",
  components: {
    Botao,
    ModalForm,
    FormNovaSala
  },
  data() {
    return {
      bgColor: "rgba(59, 157, 239, 1)",
      txColor: "",
      modalNovaSala: false,
      modalTitulo: "",
    };
  },
  methods: {
    novaSala(botao: String) {
      this.modalNovaSala = true;
      this.modalTitulo = botao.toString();
      //this.$router.push("/room");
    },
    fecharModal() {
      this.modalNovaSala = false;
      this.modalTitulo = "";
    },
  },
});
</script>
