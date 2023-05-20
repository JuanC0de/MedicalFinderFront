<script setup>
import FormRegisterPatient from "@/layouts/Patient/FormRegisterPatient/FormRegisterPatient.vue";
import CheckBoxPolitica from '@/components/CheckBoxPolitica.vue';
// import Navbar from '@/components/Navbar.vue';
// import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
        <div class="my-view"> 
            <v-container class="d-flex align-center" style="height: 100vh">
                <v-sheet
                elevation="22"
                max-width="800"
                rounded="lg"
                width="100%"
                class="pa-4 text-center mx-auto"
                >
                <FormRegisterPatient/>
                <CheckBoxPolitica/>  
                </v-sheet>
            </v-container>
        </div>
</template>

<style>
    .my-view {
        background-image: url('@/assets/images/FondPaciente.png');
        background-size: cover;
    }
</style>