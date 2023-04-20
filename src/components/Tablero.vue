<script setup>

import Celda from './Celda.vue'
import { ref, reactive } from 'vue'

const turno = ref('x');

const tablero = reactive([]);

for (let i = 0; i < 3; i++) {
  tablero.push(Array(3).fill(''));
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


  <div id="info-top" class="tablero-info">
    <div class="logo-tablero-container">
      <img src="/src/assets/images/logo.svg" alt="Logo Gato">
    </div>
    <div id="turno">

      <div id="logo-turno">
        <img v-if="turno === 'x'" src="/src/assets/images/icon-x.svg" alt="X">
        <img v-else src="/src/assets/images/icon-o.svg" alt="O">
      </div>

      <div>
        <div>Turno</div>
      </div>
    </div>
    <div class="boton-reiniciar-container">
      <button id="boton-reiniciar-tablero">
        <img src="/src/assets/images/icon-restart.svg" alt="Logo Gato">
      </button>
    </div>
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
    <div class="boton azul">
      <div>
        <div>X (YOU)</div>
        <div><b>0</b></div>
      </div>
    </div>

    <div class="boton gris">
      <div>
        <div>Ties</div>
        <div><b>0</b></div>
      </div>
    </div>

    <div class="boton amarillo">
      <div>
        <div>O (CPU)</div>
        <div><b>0</b></div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.logo-tablero-container {
  text-align: left;
  display: flex;
  align-items: center;
}

.boton-reiniciar-container {
  display: flex;
  align-items: center;
}

#boton-reiniciar-tablero {
  height: 100%;
  aspect-ratio: 1 / 1;
  margin-left: auto;
  background-color: #A8BFC9;
  border: 0px;

  box-shadow: inset 0px -4px 0px #6B8997;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 1rem;
}

.cell-container {
  /*
  width: 5em;
  height: 5em;
   */
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
  height: 4rem;
}

#info-bottom {
  height: 5rem;
}

#turno {
  display: flex;
  background: #1F3641;
  box-shadow: inset 0px -4px 0px #10212A;
  border-radius: 15px;
}

#logo-turno {
  display: flex;
  align-items: center;
}

#turno div {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

#logo-turno img{
  height: 60%;
  margin: auto;
}

</style>
