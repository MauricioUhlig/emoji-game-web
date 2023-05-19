<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal()">&times;</span>
        <p>{{ titulo }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModalForm",
  props: {
    titulo: {
      type: String,
      required: false,
    },
  },
  components: {},
  emits: ["clickFechar"],
  data() {
    return {
      showModal: this.ativo,
    };
  },
  methods: {
    closeModal() {
      this.$emit("clickFechar");
    },
  },
});
</script>

<style>
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: var(--color-background-soft);
  margin: auto;
  padding: 20px;
  border: 1px solid var(--color-border);
  /*min-width: 50rem;
  min-height: 30rem;*/
  border-radius: 15px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
p {
  font-size: 20px;
  color: var(--color-heading);
}
</style>
