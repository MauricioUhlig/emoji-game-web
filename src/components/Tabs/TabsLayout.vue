<template>
  <div>
    <div class="nav-tabs-navigation">
      <div class="nav-tabs-wrapper">
        <slot name="nav"></slot>
      </div>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "tabs-layout",
};
</script>
