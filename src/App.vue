<script setup>
  import {RouterView} from 'vue-router'
</script>

<template >
    <header class="bg-gradient-to-r from-purple-700 to-blue-500">
        <div class="mx-auto max-w-5xl py-10">
            <h1 class=" text-white text-4xl">Administrador de clientes</h1>
        </div>
    </header>
  <main class="mx-auto max-w-5xl mt-5 p-2">
    <RouterView/>
  </main> 
</template>
