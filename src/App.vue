<script setup>

import Tablero from './components/Tablero.vue'
import { ref, reactive } from 'vue'

const inMenu = ref(true);
const cpu = ref(true);

function jugarJugador() {
  inMenu.value = false;
  cpu.value = false;
}

function jugarCpu() {
  inMenu.value = false;
  cpu.value = true;
}

</script>
<!--Parte del menú-->

<template>

  <div v-if="inMenu">
    <div class="iconos">

      <img src="/src/assets/images/logo.svg" alt="Logo Gato">

    </div>

    <div class="pick-player">
      <p>PICK PLAYER 1´S MARK</p>
      <div class="barra"></div>
      <p class="">REMEMBER...</p>
    </div>

    <div class="boton-menu-container">
      <button @click="jugarCpu()" class="boton amarillo"> NEW GAME (VS CPU)</button>
    </div>
    <div class="boton-menu-container">
      <button @click="jugarJugador()" class="boton azul"> NEW GAME (VS PLAYER)</button>
    </div>
  </div>

  <Tablero v-if="!inMenu" :p1-mark="'x'" :cpu="cpu"/>

</template>



<style>

.boton-menu-container {
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
}

.boton {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

button:hover {
  box-shadow: 4px 7px 20px 1px rgba(0, 0, 0, 0.75) !important;
}

.azul{
  background-color: #65E9E4;
  color: #1A2A33;
}

.amarillo{
  background-color: #F2B137;
  color: #1A2A33;
}

.gris {
  background-color: #A8BFC9;
  color: #1A2A33;
}

.barra{
  background-color: #1A2A33;
  height: 5rem;
}

.pick-player{
  background: #1F3641;
  box-shadow: inset 0px -8px 0px #10212A;
  border-radius: 15px;
  padding: 10px 20px 40px;
  background-color: #1F3641;
  border-radius: 10px;
  height: 10rem;
  margin-bottom: 2rem;
}

.pick-player h2{
  color: #A8BFC9;
  font-size: 15px;

  margin-top: 0px;
}

.pick-player p{
  color: #A8BFC9;
}

.iconos{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 2rem;
}

.menu{
  background-color: #1F3641;
}

</style>
