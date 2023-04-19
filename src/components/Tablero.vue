<script setup>

import Celda from './Celda.vue'
import { ref, reactive } from 'vue'

const turno = ref('x');

const tablero = reactive([]);

for (let i = 0; i < 3; i++) {
  tablero.push(Array(3).fill(''));
}

console.log('asdf');

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
  <h2 v-else>Es turno de las O</h2>

  <div id="info-top" class="tablero-info">
    <div></div>
    <div id="turno">asdf</div>
    <div></div>
  </div>

  <div class="grid-container">

    <template v-for="(_, i) in tablero">

      <div v-for="(_, j) in tablero[i]" class="cell-container">

        <Celda
          @click="llenarCelda(i, j)"
          :i="i"
          :j="j"
          :estado="tablero[i][j]"
          :turno="turno"/>
      </div>

    </template>

  </div>

  <div id="info-bottom" class="tablero-info">
    <div class="boton azul"></div>
    <div class="boton gris"></div>
    <div class="boton amarillo"></div>
  </div>

</template>

<style scoped>


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 1rem;
}

.cell-container {
  /*width: 5em;
  height: 5em;*/
}

.tablero-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tablero-info div {
  width: 100%;
}

#info-top {
  height: 3rem;
}

#info-top {
  height: 4rem;
}

#turno {
  background: #1F3641;
  box-shadow: inset 0px -4px 0px #10212A;
  border-radius: 15px;
}

</style>
