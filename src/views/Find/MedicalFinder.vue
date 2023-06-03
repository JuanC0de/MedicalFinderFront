<template>
  <Navbar />
  <div class="justify-center">

    <!-- Buscador -->
    <div height="300px">
      <v-container class=" w-100" width="100%">
        <v-row justify="center">
          <v-col cols="12">
            <v-row>
              <v-col cols="12" align="center">
              <p class="buscadorTittle text-PrincipalCyan mt-3 mb-3">Buscador de especialistas</p> 
              </v-col>
            </v-row>
            <v-row>
                <template v-slot:title>
                  Selecciona la ciudad y la especialidad
                </template>
                <v-row justify="center" align="center">
                    <v-col cols="5">
                      <!-- <AccordionCities class="ma-1" /> -->
                      <v-col>
                        <v-autocomplete
                          v-model="city"
                          :items="this.ciudades"
                          label="Ciudades"
                          persistent-hint
                        >
                          <template v-slot:append-outer>
                            <v-slide-x-reverse-transition
                              mode="out-in"
                            >
                            </v-slide-x-reverse-transition>
                          </template>
                        </v-autocomplete>
                      </v-col>                      
                    </v-col>
                    <v-col cols="5">
                      <!-- <SelectSpecialists class="ma-1"/> -->
                      <v-col>
                        <v-autocomplete
                          v-model="especialidad"
                          :items="this.especialidades"
                          label="Especialidades"
                          persistent-hint
                        >
                          <template v-slot:append-outer>
                            <v-slide-x-reverse-transition
                              mode="out-in"
                            >
                            </v-slide-x-reverse-transition>
                          </template>
                        </v-autocomplete>
                      </v-col>
                    </v-col>
                    <v-col cols="2">
                      <v-btn class="text-White ma-1 w-100 bg-PrincipalCyan" variant="text">
                        Buscar
                      </v-btn>
                    </v-col>
                </v-row>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Fin de Buscador  -->

    <v-card class="bg-white elevation-10">
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
                  <v-img :src="item.img" height="225px" cover>
                    <v-card-title class="text-h6 text-white d-flex flex-column">
                      <p class="mt-4">
                        {{ item.title }}
                      </p>

                      <div>
                        <p class="ma-0 text-body-1 font-weight-bold">
                          {{ item.text }}
                        </p>
                        <p class="text-caption font-weight-medium">
                          {{ item.subtext }}
                        </p>
                      </div>
                    </v-card-title>
                    <div class="align-self-center">
                      <v-btn v-for="(icon, index) in icons" :key="index" variant="text"
                        :class="{ 'show-btns': isHovering }" :color="transparent" :icon="icon"></v-btn>
                    </div>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-card>
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ServiceMedicalFinder from '@/views/Find/ServiceMedicalFinder.js'

export default {
  name: "MedicalFinder",
  components: {
    Navbar,
    FooterComponent
  },
  props: {
    msg: String,
  },
  data: () => ({
    tags: [
      'Salud',
      'Red de médicos',
      'Bienestar',
      'Terapia',
      'Alimentación balanceada',
      'Salud mental',
      'Diagnóstico',
      'Prevención de enfermedades',
      'Cuidado personal',
    ],
    icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    items: [
        {
          title: 'ENCUENTRA TU MÉDICO',
          text: `Búscalo filtrando por ciudad y especialidad`,
          subtext: 'Navega entre diferentes perfiles de profesionales en la salud hasta encontrar el ideal para ti',
          img: 'https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'AGENDA TU CITA',
          text: 'No pierdas tiempo en llamadas o en transporte, ¡Hazlo online!',
          subtext: 'Elige la hora y fecha y agéndate',
          img: 'https://images.pexels.com/photos/5340274/pexels-photo-5340274.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'CUIDA TU SALUD',
          text: 'Sigue una dieta saludable',
          subtext: 'No te descuides y asiste a controles regulares',
          img: 'https://images.pexels.com/photos/3845998/pexels-photo-3845998.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
      ],
    transparent: 'rgba(255, 255, 255, 0)',
    ciudades:[],
    especialidades:[]
  }
  ),
  /********* Ciclo de vida *********/
  async created() {
    await this.cargarEspecialidades();
    await this.cargarCiudades();
  },
  methods:{
    async cargarEspecialidades() {

      let response = await ServiceMedicalFinder.consultarListaEspecialidades();
      console.log("Esta es la respuesta deploy:",response);
      if (response.length > 0) {
        this.especialidades = response.map(objeto => objeto.especialidad)
        console.log("Estas son las especialidades",this.especialidades);
      }
      else{
        console.log("Ocurrió un error",response)
      }
    },
    async cargarCiudades() {

      let response = await ServiceMedicalFinder.consultarListaCiudades();
      console.log("Esta es la respuesta deploy - ciudad:",response);
      if (response.length > 0) {
        this.ciudades = response.map(objeto => objeto.city)
        console.log("Estas son las ciudades",this.ciudades);
      }
      else{
        console.log("Ocurrió un error",response)
      }
    },    
  }
}
</script>

<style>
.container {
  /* background: url('../../assets/images/Cyanwallpaper.jpg') no-repeat  center;*/
  background-image: linear-gradient(to right top, #1c565c, #26747d, #31949f, #3bb6c3, #46d8e8);
  height: 1000px;
  margin: 0;
}

.transparent {
  opacity: 0;
}

.backTransparent {
  background-color: transparent;
}
.buscadorTittle{
  text-transform: uppercase;
  font-size:2rem;
  font-weight: bold;
}

@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}
</style>