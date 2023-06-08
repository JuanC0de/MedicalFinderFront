<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FormMedicalAppointments from '@/layouts/FormMedicalAppointments/FormMedicalAppointments.vue';
import ProfileMedicalAppointments from '@/layouts/ProfileMedicalAppointments/ProfileMedicalAppointments.vue';

export default defineComponent({
  name: 'MedicalAppointments',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navbar,
    FooterComponent,
    FormMedicalAppointments,
    ProfileMedicalAppointments
  },
  data() {
    return {
      slides: [
        'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=350&h=1750&dpr=1',
        'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=350&h=1750&dpr=1',
        'https://images.pexels.com/photos/8413346/pexels-photo-8413346.jpeg?auto=compress&cs=tinysrgb&w=350&h=1750&dpr=1',
      ],
    }
  },  
})
</script>

<template>
    <Navbar/>
        <Carousel :autoplay="2000" :wrap-around="true" class="mt-3">
            <Slide v-for="(slide, index) in slides" :key="index">
                <img :src="slide" alt="Imagen" class="carousel__item" />
            </Slide>

            <template #addons>
            <Pagination />
            </template>
        </Carousel>    
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
