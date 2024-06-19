<script setup>
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
        const props=defineProps({
            cliente:{
                type:Object
            }
        })
        const nombreApellido=computed(()=>{
            return `${props.cliente.apellido} ${props.cliente.nombre}`
        })
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreApellido }} </p>
            <p class="text-gray-500">{{ props.cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ props.cliente.empresa }}</p>
            <p class="text-gray-600">{{ props.cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         <RouterLink to="/" class="text-indigo-500 hover:text-indigo-900 mr-5 bg-neutral-200 p-1 rounded-md">
            Editar
        </RouterLink>
        <button class="text-red-500 hover:text-red-700 bg-neutral-200 p-1 rounded-md">Eliminar</button>
        </td>
    </tr>
</template>


