<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <h2>🚀👀😅⚽</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TituloInicial",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--vt-c-white);
}

.greetings h1,
.greetings h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h2 {
    text-align: left;
  }
}
</style>
