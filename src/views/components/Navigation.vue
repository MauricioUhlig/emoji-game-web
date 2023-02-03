<template>
  <section class="">
    <div class="container">
      <!-- Navigation -->
      <h2 class="mb-5">
        <span>Navbars</span>
      </h2>
    </div>
    <!-- Navbar default -->
    <base-nav
      v-for="menu in menus"
      :key="menu.type"
      :type="menu.type"
      effect="dark"
      expand
      title="Default Color"
      class="mt-4"
      :content-id="`navbar-${menu.type}`"
    >
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="./index.html">
            <img src="@public/img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu" :target="`navbar-${menu.type}`">
          </close-button>
        </div>
      </div>
      <component :is="menu.menuComponent"></component>
    </base-nav>
  </section>
</template>
<script lang="ts">
import BaseNav from "@/components/BaseNav.vue";
import CloseButton from "@/components/CloseButton.vue";
import Menu1 from "./Navigation/Menu1.vue";
import Menu2 from "./Navigation/Menu2.vue";
import Menu3 from "./Navigation/Menu3.vue";
import Menu4 from "./Navigation/Menu4.vue";
import Menu5 from "./Navigation/Menu5.vue";
import Menu6 from "./Navigation/Menu6.vue";

export default {
  components: {
    BaseNav,
    CloseButton,
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
  },
  data() {
    return {
      menus: [
        { type: "default", menuComponent: Menu1 },
        { type: "primary", menuComponent: Menu2 },
        { type: "success", menuComponent: Menu3 },
        { type: "danger", menuComponent: Menu4 },
        { type: "warning", menuComponent: Menu5 },
        { type: "info", menuComponent: Menu6 },
      ],
    };
  },
};
</script>
<style></style>
