<template>
  <div class="barra-codigo-sala">
    <h1 class="green">Código da sala: {{ codigo }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CodigoSala",
  props: {
    codigo: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.barra-codigo-sala {
  width: 100%;
  display: flex;
  align-content: center;
}
</style>
