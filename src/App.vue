<!-- <template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script> -->

<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
<script lang="ts">
import { FadeTransition } from "vue2-transitions";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    FadeTransition,
  },
});
</script>
