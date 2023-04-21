<template>
  <div>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <p>{{ titulo }}</p>
        <Botao nome="teste" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
export default defineComponent({
  name: "ModalForm",
  props: {
    ativo: {
      type: Boolean,
      required: true,
    },
    titulo: {
        type: String,
        required: false,
    }
  },
  components: {
    Botao,
  },
  data() {
    return {
      showModal: this.ativo,
    };
  },
  methods: {},
});
</script>

<style>
.modal {
  display: block;
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
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
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
</style>
