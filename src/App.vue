<template>
  <HomePage />
</template>

<script lang="ts">
import HomePage from "./views/HomePage.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
});
</script>
