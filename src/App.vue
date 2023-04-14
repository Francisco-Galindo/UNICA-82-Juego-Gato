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
<!--Parte del menú-->

<template>

  <div class="iconos">

  <svg width="72" height="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z" fill="#31C3BD"/><path d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z" fill="#F2B137" fill-rule="nonzero"/></g></svg>
  
</div><br>

  <div class="pick-player">
  <h2>PICK PLAYER 1´S MARK</h2>
  <div class="barra"></div>
  <p>REMEMBER...</p>

  </div><br>  
  <button class="boton-amarillo"> NEW GAME (VS CPU)</button><br><br>
  <button class="boton-azul"> NEW GAME (VS PLAYER)</button>

  



<template>


  <h2 v-if="turno === 'x'">Es turno de las X</h2>
  <h2 v-else>Es turno de las O</h2>
 
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

</template>



<style scoped>

body{
  background-color: black;
}
.boton-azul{
 text-align: center;
  height: 4rem;
  width: 26rem;
  background-color: #65E9E4;
}

.boton-amarillo{
 text-align: center;
  height: 4rem;
  width: 26rem;
  background-color: #F2B137;
 
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
  width: 24rem;

  

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
