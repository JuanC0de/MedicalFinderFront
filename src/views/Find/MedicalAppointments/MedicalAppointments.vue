<script setup>
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FormMedicalAppointments from '@/layouts/FormMedicalAppointments/FormMedicalAppointments.vue';
import ProfileMedicalAppointments from '@/layouts/ProfileMedicalAppointments/ProfileMedicalAppointments.vue';
</script>

<template>
    <Navbar/>
    <v-container>
        <v-row align="center">
            <v-col cols="12" md="6">
                <FormMedicalAppointments />
            </v-col>
            <v-col cols="12" md="6">
                <ProfileMedicalAppointments />
            </v-col>
        </v-row>
    </v-container>
    <FooterComponent/>
</template>
