<template>
  <CodigoSala :codigo="codigo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodigoSala from "../components/CodigoSala.vue";
export default defineComponent({
  name: "RoomPage",
  components: {
    CodigoSala,
  },
  data() {
    return {
      codigo: "sj49",
    };
  },
});
</script>
