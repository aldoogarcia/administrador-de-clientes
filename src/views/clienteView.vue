<script setup>
    import { onMounted,ref,computed } from 'vue';
    import axios from 'axios';
    import RouterLink from '@/components/UI/RouterLink.vue';
    import heading from '@/components/UI/heading.vue';
    import ClienteItem from '@/components/UI/Cliente.vue'


    const clientes=ref([])
    const muestraCliente=computed(()=>{
        return clientes.value.length > 0
    })

     onMounted(() => {
        axios.get("http://localhost:4000/clientes")
        .then(({data})=>{
            clientes.value=data;
        })
        .catch(err=>{console.log(err)})
    });
</script>
<template>
    <div class="flex justify-end">
    <RouterLink too="agregar-cliente">Agregar cliente</RouterLink>
</div>
<heading>Lista de Clientes</heading>

<div v-if="muestraCliente" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                        <ClienteItem
                            v-for="cliente in clientes"
                            :key="cliente.id"
                            :cliente="cliente"
                        />
                  </tbody>
              </table>
          </div>
      </div>
  </div>

</template>


<style scoped>

</style>