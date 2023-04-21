<script setup>
import { ref } from 'vue'

defineProps({
  tipoModal: String,
  ganador: String,
});

const emit = defineEmits(['cerrar', 'aceptar']);

const cerrar = () => {
  emit('cerrar');
}

const aceptar = () => {
  emit('aceptar');
}

</script>


<template>
  <Teleport to="body">
    <div id="modal-container">
      <div class="bg-dark_blue-100" id="modal">

        <div v-if="tipoModal !== 'tie' && ganador !== ''">
          <p class="font-bold">You Won!</p>
        </div>

        <div v-if="ganador">
          <div v-if="ganador === 'x'" class="">
            <img src="/src/assets/images/icon-x.svg" alt="">
          </div>
          <div v-else-if="ganador === 'o'" class="">
            <img src="/src/assets/images/icon-o.svg" alt="">
          </div>

          <div :class="ganador === 'x' ? 'text-blue-100' : 'text-yellow-100'" class="winner">
            <h1>Takes the round</h1>
          </div>
        </div>
        <div v-else>
            <h1>Restart game?</h1>
        </div>

        <div class="modal-buttons">
          <button @click="cerrar"
            class="boton bg-gray-100 text-dark_blue-100">

            <span>Quit</span>
          </button>
          <button @click="aceptar"
            class="boton bg-yellow-100 text-dark_blue-100">

            <span>Next round</span>
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>


<style scoped>
#modal-container {
  background-color: #00000080;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
}

#modal {
  margin: auto;
  width: 100%;
  padding: 1rem;
  opacity: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#modal div {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.modal-buttons button {
  width: fit-content;
}
</style>
