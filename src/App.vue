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
import TituloInicial from './components/TituloInicial.vue';
import MenuInicial from './components/MenuInicial.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "App",
  components: {
    TituloInicial, 
    MenuInicial
  }
})

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
