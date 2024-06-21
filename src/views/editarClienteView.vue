<script setup>
import { onMounted ,reactive} from 'vue';
import {FormKit} from '@formkit/vue'
import {useRouter,useRoute} from 'vue-router'
import ClienteService from '@/services/ClienteService';
import RouterLink from '@/components/UI/RouterLink.vue';
import heading from '@/components/UI/heading.vue';

const router = useRouter()
const route = useRoute()
const formData=reactive({})


onMounted(()=>{

ClienteService.obtieneCliente(id)
.then(({data})=>{
    Object.assign(formData, data)
    //si en lugar de reactive ocupas ref
    //formData.value=data

})
.catch((e)=>{console.log(e)})
})
const {id} = route.params

const validacion=(data)=>{
    ClienteService.actualizarCliente(id,data)
    .then(()=>{
         router.push({name:'inicio'})
     })
}


</script>
<template>
   <div class="flex justify-end">
   <RouterLink too="inicio">Clientes</RouterLink>
</div>
<heading>Agregar Cliente</heading>

<div class="mt-5 mx-auto bg-slate-100 shadow">
   <div class="mx-auto md:w-2/3 py-4">

   
   <FormKit 
   type="form"
   submit-label="Actualizar Cliente"
   incomplete-message="Revisa las Advertencias"
   @submit="validacion"
   v-model="formData"
   >
       <FormKit
       class="max-w-full"
       
           type="text"
           label="Nombre"
           name="nombre"
           placeholder="Ingresa el nombre del cliente"
           validation="required"
           :validation-messages="{required:'El nombre del cliente es obligatorio'}"
           validation-visibility="blur"
           v-model="formData.nombre"
       />
       <FormKit
       class="max-w-full"
       
           type="text"
           label="Apellido"
           name="apellido"
           placeholder="Ingresa el apellido del cliente"
           validation="required"
           :validation-messages="{required:'El Apellido es obligatorio'}"
           validation-visibility="blur" 
           
       />
       <FormKit
       class="max-w-full"
       
           type="text"
           label="Email"
           placeholder="nombre@dominio.com"
           name="email"
           validation="required|email"
           :validation-messages="{required:'El Email es obligatorio'}"
           validation-visibility="blur" 
           
       />
   <FormKit
       class="max-w-full"
       
           type="text"
           label="Telefono"
           name="telefono"
           placeholder="Telefono XXX-XXX-XXXX"
           
           
            
           
       />
       <FormKit
       class="max-w-full"
       
           type="text"
           label="Empresa"
           name="empresa"
           placeholder="Nombre de la empresa"
       />
       <FormKit
       class="max-w-full"
           type="text"
           label="Puesto"
           name="puesto"
           placeholder="Ingresa el puesto"    
       />

   </FormKit>
</div>
</div>


</template>