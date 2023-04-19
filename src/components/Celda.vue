<script setup>
import { ref } from 'vue'

defineProps({
  estado: String,
  turno: String,
  i: Number,
  j: Number,
})

</script>

<template>

  <div class="filled-cell x-filled" v-if="estado === 'x'">
  </div>
  <div class="filled-cell o-filled" v-else-if="estado === 'o'">
  </div>
  <div class="empty-cell x-outline" v-else-if="turno === 'x'">
  </div>
  <div class="empty-cell o-outline" v-else-if="turno === 'o'">
  </div>

</template>

<style scoped>

.empty-cell, .filled-cell {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat !important;
  background-position: center !important;

  background: #1F3641;
  box-shadow: inset 0px -4px 0px #10212A;
  border-radius: 15px;

}

.empty-cell:hover {
  box-shadow: 4px 7px 20px 1px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}

.x-outline:hover {
  background-image: url('/src/assets/images/icon-x-outline.svg');
}

.o-outline:hover {
  background-image: url('/src/assets/images/icon-o-outline.svg');
}

.x-filled {
  background-image: url('/src/assets/images/icon-x.svg');
}

.o-filled {
  background-image: url('/src/assets/images/icon-o.svg');
}

</style>
