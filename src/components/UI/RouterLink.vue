<script setup>
    import { RouterLink } from 'vue-router';
    defineProps({
        too: {
            type: String,
            required: true
        }
    })

</script>
<template>
    <RouterLink
        :to="{name:too}"
    class="bg-sky-500 block md:inline-block p-2 text-center px-10  py-1 text-white rounded-2xl left-0 shadow-slate-800
    hover:bg-sky-700 uppercase ">
        <slot></slot>
    </RouterLink>
</template>

