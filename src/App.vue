<script setup>

import Tablero from './components/Tablero.vue'
import { ref, reactive } from 'vue'

</script>
<!--Parte del menú-->

<template>

  <div class="iconos">

    <img src="/src/assets/images/logo.svg" alt="Logo Gato">

  </div><br>

  <div class="pick-player">
    <h2>PICK PLAYER 1´S MARK</h2>
    <div class="barra"></div>
    <p>REMEMBER...</p>

  </div>
  <div class="boton-menu-container">
    <button class="boton amarillo"> NEW GAME (VS CPU)</button>
  </div>
  <div class="boton-menu-container">
    <button class="boton azul"> NEW GAME (VS PLAYER)</button>
  </div>
  <Tablero/>

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
  -webkit-box-shadow: 0px 9px 5px -4px rgba(0,54,65,1);
  -moz-box-shadow: 0px 9px 5px -4px rgba(0,54,65,1);
  box-shadow: 0px 9px 5px -4px rgba(0,54,65,1);
  padding: 10px 20px 40px;
  background-color: #1F3641;
  border-radius: 10px;
  height: 120px;
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
  align-items: center;
  height: 50px;
}

.menu{
  background-color: #1F3641;
}

</style>
