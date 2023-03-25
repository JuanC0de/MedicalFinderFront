<script setup>
import FormLogin from '../../layouts/FormLogin/FormLogin.vue'
</script>

<template>
    <div class="my-view">
        <FormLogin class="formContainer"/>
    </div>   
</template>

<style>
    .my-view {
        background-image: url('@/assets/images/pacienteMedico.png');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        margin: 1px;
    }
    /* .formContainer{
        margin: 5cm 8cm 2cm 4cm;
    } */
</style>