 <script setup>
 import {FormKit} from '@formkit/vue'
 import {useRouter} from 'vue-router'
 import ClienteService from '@/services/ClienteService';
 import RouterLink from '@/components/UI/RouterLink.vue';
 import heading from '@/components/UI/heading.vue';

 const router = useRouter()

 const validacion=(data)=>{
     data.estado=1;
    ClienteService.agregarcliente(data)
    // .then((response) => {
    //     console.log(response);
    //     router.push({name:'inicio'})
 
    // }).catch((e)=>{
    //     console.log(e)
    // })
    router.push({name:'inicio'})
 }
</script>
<template>
    <div class="flex justify-end">
    <RouterLink too="inicio">Home</RouterLink>
</div>
<heading>Agregar Cliente</heading>

<div class="mt-5 mx-auto bg-slate-100 shadow">
    <div class="mx-auto md:w-2/3 py-4">

    
    <FormKit 
    type="form"
    submit-label="Agregar Cliente"
    incomplete-message="Revisa las Advertencias"
    @submit="validacion"
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

<style scoped>
.formkit-input {
    background-color: black
}
</style>


