<script setup>
import FormRegisterDoctor from '@/layouts/Doctor/FormRegisterDoctor/FormRegisterDoctor.vue';
import CheckBoxPolitica from '@/components/CheckBoxPolitica.vue';
</script>

<template>
  <div class="my-view"> 
    <div class="card">    
        <slot>
            <FormRegisterDoctor/>
            <CheckBoxPolitica/>
        </slot>
    </div>        
  </div>     
</template>

<style>
    .my-view {
        background-image: url('@/assets/images/websiteBackground/fondo_registroMedico.jpg');
        background-size: cover;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
    }    
</style>