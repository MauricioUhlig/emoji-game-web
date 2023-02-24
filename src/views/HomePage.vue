<template>
  <header>
    <div class="wrapper">
      <TituloInicial title="Qual a sua Versão?" />
    </div>
  </header>

  <main>
    <MenuInicial />
  </main>
</template>

<script lang="ts">
import TituloInicial from "../components/TituloInicial.vue";
import MenuInicial from "../components/MenuInicial.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: {
    TituloInicial,
    MenuInicial,
  },
  created() {
    document.title = "Home";
  },
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header,
  main {
    display: flex;
    place-items: center;
  }
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
