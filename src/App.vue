<script setup>
import Celda from './components/Celda.vue'
import { ref, reactive } from 'vue'

const turno = ref('x');

const tablero = reactive([]);
const gridTemplateCols = ref('');

const tam = 3;
for (let i = 0; i < tam; i++) {
  tablero.push(Array(tam).fill(''));
}

for (let i = 0; i < tam; i++) {
  gridTemplateCols.value += 'auto ';
}

function llenarCelda(i, j) {
  if (tablero[i][j] !== '') {
    return;
  }

  tablero[i][j] = turno.value;
  if (turno.value === 'x') {
    turno.value = 'o';
  } else {
    turno.value = 'x';
  }

}
</script>

<template>

  <h2 v-if="turno === 'x'">Es turno de las X</h2>
  <h2 v-else>Es turno de las Y</h2>

  <div class="grid-container">

    <template v-for="(row, i) in tablero">

      <div v-for="(cell, j) in tablero[i]" class="cell-container">

        <Celda
          @click="llenarCelda(i, j)"
          :i="i"
          :j="j"
          :estado="tablero[i][j]"
          :turno="turno"/>
      </div>

    </template>
  </div>

</template>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: v-bind(gridTemplateCols);
  border: 1px solid;
}

.cell-container {
  width: 5em;
  height: 5em;
}

</style>
