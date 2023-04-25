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

function cerrarTablero() {
  inMenu.value = true;
}

</script>
<!--Parte del menú-->

<template>

  <div v-if="inMenu">
    <div class="iconos">

      <img src="/src/assets/images/logo.svg" alt="Logo Gato">

    </div>

    <div class="pick-player">
      <h2>PICK PLAYER 1´S MARK</h2>
      <div class="pick-side">
        <div class="bar">
            <div>
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#DBE8ED" fill-rule="evenodd"/></svg>
            </div>
            <div>
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#DBE8ED"/></svg>
            </div>
           </div>
      </div>
      <p>REMEMBER...</p>
    </div><br>
    <div class="boton-menu-container">
      <button @click="jugarCpu()" class="boton amarillo"> NEW GAME (VS CPU)</button>
    </div><br>
    <div class="boton-menu-container">
      <button @click="jugarJugador()" class="boton azul"> NEW GAME (VS PLAYER)</button>
    </div>

  </div>

  


  <Tablero v-if="!inMenu" @irMenu="() => cerrarTablero()" :p1-mark="'x'" :cpu="cpu"/>

</template>



<style>

.boton {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  border: none;
  border-radius: 15px;
  width: 545px;

 
}

.boton:active {
 
  transform: translateY(4px);
  box-shadow: 0 5px rgb(73, 72, 72);
}


.azul{

  background-color: #65E9E4;
  box-shadow: 0 8px #23b9b4;
}

.amarillo{
  background-color: #F2B137;
  box-shadow: 0 8px #d4992c;

}

.gris {
  background-color: #A8BFC9;
  box-shadow: 0 8px #63747c
}

.pick-side{
  background-color: #1A2A33;
  height: 6rem;
  align-items: center;
}

.bar{
 
  display: flex;
  
}

.pick-player{
  -webkit-box-shadow: 0px 9px 5px -4px rgba(0,54,65,1);
  -moz-box-shadow: 0px 9px 5px -4px rgba(0,54,65,1);
  box-shadow: 0px 9px 5px -4px rgba(0,54,65,1);
  padding: 10px 20px 60px;
  background-color: #1F3641;
  border-radius: 10px;
  height: 120px;
  width: 505px;
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




</style>
