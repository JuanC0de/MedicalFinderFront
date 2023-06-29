<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FormMedicalAppointments from '@/layouts/FormMedicalAppointments/FormMedicalAppointments.vue';
// import ProfileMedicalAppointments from '@/layouts/ProfileMedicalAppointments/ProfileMedicalAppointments.vue';
import ServiceMedicalFinder from '../ServiceMedicalFinder';

export default defineComponent({
  name: 'MedicalAppointments',
  props: {
  idEspecialista: {
    type: Number,
    required: true
  }
},
  async created() {
    await this.consultarEspecialista();
    this.guidEspecialista = this.$route.query.guidEspecialista || '';
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navbar,
    FooterComponent,
    FormMedicalAppointments
  },
  data() {
    return {
      slides: [
        'https://img.freepik.com/foto-gratis/centro-recuperacion-covid-doctora-sosteniendo-manos-paciente-mayor_23-2148847832.jpg?w=440&t=st=1686238010~exp=1686238610~hmac=49c7afe5fb521b85c4d7f2e667ab445507c5aadba7326918da3fa07c584e6f7c',
        'https://img.freepik.com/foto-gratis/joven-doctora-usando-estetoscopio-escuchar-latidos-corazon-paciente-toma-doctora-dandole-chequeo-paciente-varon_657921-875.jpg?w=440&t=st=1686238594~exp=1686239194~hmac=d34aeebbfcc285b7aefe0e5be586eae0fbe215505519e4178a7023adecd31231',
        'https://img.freepik.com/foto-gratis/examen-medico_1098-16897.jpg?w=440&t=st=1686238767~exp=1686239367~hmac=8d550a58e786fbde9ce7924588372d3c5d301066db6a4e5088d9238eee7afc0d',
      ],
      especialistaId: this.idEspecialista,
      especialista:{},
      guidEspecialista:''
    }
  },
  methods:{
    async consultarEspecialista() {
      let response = await ServiceMedicalFinder.consultarEspecialistas();
      this.guidEspecialista = this.$route.query.guidEspecialista || '';
      // console.log('Guid',this.$route.query.guidEspecialista);
      console.log('Guid variable',this.guidEspecialista);
      console.log("Esta es la respuesta especialistas:", response);
      if (response.length > 0) {
        this.especialista = response.filter((e)=> {
          return e.guidEspecialista==this.guidEspecialista
        })
        console.log("Estes es el especialista", this.especialista);
      } else {
        console.log("Ocurrió un error buscando al especialista", response);
      }
    },
  }
})
</script>

<template>
    <Navbar/>
        <Carousel :autoplay="2000" :wrap-around="true" class="mt-3 carouselBackground">
            <Slide v-for="(slide, index) in slides" :key="index">
                <img :src="slide" alt="Imagen" class="carousel__item imgCa" />
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
                  <v-sheet class="pa-2 ma-2 text-center">
                    <v-card>
                        <v-avatar size=150 class="mt-6">
                        <img
                            class="imgIconoCard"
                            src=""
                            alt="icono-grupo"
                        />
                        </v-avatar>
                        <v-container>
                            <h2>{{this.especialista.NombreCompletoMed}}</h2>
                            <v-card-text>
                            <h3>{{this.especialista.Especialidad}}</h3>
                            <p class="mt-6">{{this.especialista.PerfilProfesional}}</p>
                            </v-card-text>
                        </v-container>
                    </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    <FooterComponent/>
</template>

<style>
  .imgCa {
    border-radius: 2%;
    width: 650px;
    height: 250px;
  }
  .carouselBackground{
    background-image: url('@/assets/images/imgCarousel/manchas.png');
  }
  .imgIconoCard{
    background-size: cover;
    background-position: relative;
    width: 150px;
  }
</style>
