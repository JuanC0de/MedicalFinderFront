<script setup>
import FormRegisterDoctor from '@/layouts/Doctor/FormRegisterDoctor/FormRegisterDoctor.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redireccionarInicio() {
  router.push('/');
}
</script>

<template>
    <div class="my-view">
        <v-btn fab dark class="box ml-3" style="height: 8vh" @click="redireccionarInicio()">
            <div class="arrow right"></div>
            <div class="text">Regresar al inicio</div>
        </v-btn>
        <v-container class="d-flex align-center" style="height: 100vh">
            <v-sheet elevation="22" max-width="800" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                <FormRegisterDoctor />
            </v-sheet>
        </v-container>
    </div>
</template>
<style>
.my-view {
    background-image: url('@/assets/images/websiteBackground/fondo_registroMedico.png');
    background-size: cover;
}

.box {
    width: 55px;
    height: 55px;
    background: #0fa9c4;
    border-radius: 25px;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
    position: relative;
}

.arrow {
    border: solid black;
    border-width: 3px 0 0 3px;
    display: inline-block;
    padding: 3px;
}

.right {
    transform: rotate(-45deg);
}

.box:hover {
    width: 160px;
    background: linear-gradient(to right, rgba(42, 180, 223, 0.8), rgba(40, 99, 228, 0.8));
}

.box:hover .arrow {
    display: none;
}

.box .text {
    display: none;
}

.box:hover .text {
    display: flex;
    font-size: 16px;
    font-weight: 550;
    color: black;
    letter-spacing: 0.6px;
    animation: anima 0.6s ease;
}

@keyframes anima {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.box:active {
    background: linear-gradient(to right, rgba(42, 180, 223, 0.8), rgba(40, 99, 228, 0.8));
}
</style>