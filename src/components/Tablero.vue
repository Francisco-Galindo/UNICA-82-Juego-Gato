<script setup>

import Celda from './Celda.vue'
import Modal from './Modal.vue'
import { ref, reactive, toRefs } from 'vue'

const props = defineProps({
  p1Mark: String,
  cpu: Boolean,
});

const { p1Mark, cpu } = toRefs(props);

console.log(cpu.value);


const turno = ref('x');
const tipoModal = ref('');
const jugando = ref(true);
const ganador = ref('');
const numX = ref(0);
const numO = ref(0);
const numTies = ref(0);

let numMovimientos = 0;
let cooldown = false;

const tablero = [];

iniciarJuego();

function iniciarJuego() {
  while (tablero.length > 0) {
    tablero.pop();
  }

  for (let i = 0; i < 3; i++) {
    tablero.push(Array(3).fill(''));
  }

  tipoModal.value = '';
  turno.value = 'x';
  ganador.value = '';
  jugando.value = true;
  numMovimientos = 0;
}

function llenarCelda(a, b, player = '') {
  if (!jugando || tablero[a][b] !== '') {
    return;
  }

  if (cooldown && player !== 'cpu') {
    return;
  }

  tablero[a][b] = turno.value;

  ganador.value = checarVictoria();

  if (ganador.value) {
    jugando.value = false;
    turno.value = '';
    tipoModal.value = ganador.value;

    if (ganador.value === 'x') {
      numX.value++;
    } else {
      numO.value++;
    }
    return;
  }

  if (turno.value === 'x') {
    turno.value = 'o';
  } else {
    turno.value = 'x';
  }

  numMovimientos++;
  if (numMovimientos >= 9) {
    jugando.value = false;
    tipoModal.value = 'tie';
    numTies.value++;
    return;
  }


  if (cpu.value && turno.value !== p1Mark.value) {
    cooldown = true;
    setTimeout(() => {
      cpuLlenar();
      cooldown = false;
    }, 1000)
  }

}

function checarVictoria() {
  const valoresX = [];
  const valoresO = [];

  for (let i = 0; i < 3; i++) {
    valoresX.push(filtrar(tablero[i], 'x'));
    valoresO.push(filtrar(tablero[i], 'o'));
  }

  for (let i = 0; i < 3; i++) {
    const col = tablero.map((x) => { return x[i]});
    valoresX.push(filtrar(col, 'x'));
    valoresO.push(filtrar(col, 'o'));
  }

  const diagPrin = tablero.map((e, i) => e[i]);
  valoresX.push(filtrar(diagPrin, 'x'));
  valoresO.push(filtrar(diagPrin, 'o'));
  const diagSec = tablero.map((e, i) => e[2 - i]);
  valoresX.push(filtrar(diagSec, 'x'));
  valoresO.push(filtrar(diagSec, 'o'));

  if (valoresX.indexOf(3) !== -1) {
    return 'x';
  } else if (valoresO.indexOf(3) !== -1) {
    return 'o';
  }

  return null;
}

function filtrar(arr, mark) {
  return arr.filter((x) => x === mark).length;
}

const aceptarModal = () => {
  if (tipoModal.value === 'restart') {

  }

  iniciarJuego();
}

const cerrarModal = () => {
  tipoModal.value = '';
}

function cpuLlenar() {
  if (!cpu.value) {
    return;
  }

  let a, b;
  do {
    a = getRandomInt(0, 3);
    b = getRandomInt(0, 3);
  } while (tablero[a][b] !== '');

  llenarCelda(a, b, 'cpu');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


</script>

<template>


  <div id="info-top" class="tablero-info">
    <div class="logo-tablero-container">
      <img src="/src/assets/images/logo.svg" alt="Logo Gato">
    </div>
    <div id="turno">

      <div id="logo-turno">
        <img v-show="turno === 'x' || ganador === 'x'" src="/src/assets/images/icon-x.svg" alt="X">
        <img v-show="turno === 'o' || ganador === 'o'" src="/src/assets/images/icon-o.svg" alt="O">
      </div>

      <div>
        <div>Turn</div>
      </div>
    </div>
    <div class="boton-reiniciar-container">
      <button id="boton-reiniciar-tablero" @click="tipoModal = 'restart'">
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
        <div v-if="cpu && p1Mark === 'x'">X (YOU)</div>
        <div v-else-if="cpu">X (CPU)</div>
        <div v-else-if="p1Mark === 'x'">X (P1)</div>
        <div v-else>X (P2)</div>

        <div><b>{{ numX }}</b></div>
      </div>
    </div>

    <div class="boton gris">
      <div>
        <div>Ties</div>
        <div><b>{{ numTies }}</b></div>
      </div>
    </div>

    <div class="boton amarillo">
      <div>
        <div v-if="cpu && p1Mark === 'o'">O (YOU)</div>
        <div v-else-if="cpu">O (CPU)</div>
        <div v-else-if="p1Mark === 'o'">O (P1)</div>
        <div v-else>O (P2)</div>

        <div><b>{{ numO }}</b></div>
      </div>
    </div>
  </div>

  <Modal v-if="tipoModal != ''"
    @cerrar="() => cerrarModal()"
    @aceptar="() => aceptarModal()"
    :tipo-modal="tipoModal"
    :ganador="ganador"/>


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
  height: 40%;
}


</style>
