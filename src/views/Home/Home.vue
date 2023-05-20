<template>
  <Navbar />
  <div class="container justify-center">

    <!-- <v-card class="transparent" height="500" >
    </v-card> -->

    <!-- Buscador -->
    <v-card height="400px" >
      <v-container class="mb-8 w-100" width="100%">
        <v-row>
          <v-col cols="6">
            <div class="text-h4 text-white mb-10">¡Encuentra el especialista que necesitas!</div>

            <v-row>
              <v-card class="w-100 elevation-10">
                <template v-slot:title>
                  Selecciona la ciudad y la especialidad
                </template>

                <v-card-text>
                  <v-row justify="center" align="center">
                    <v-col cols="5">
                      <AccordionCities class="ma-1"/>
                    </v-col>
                    <v-col cols="5">
                      <!-- <SelectSpecialists class="ma-1"/> -->
                      <v-col>
                        <v-autocomplete
                          v-model="this.especialidades.especialidad"
                          :items="this.especialidades.especialidad"
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
                      <v-btn class="ma-1 w-100" variant="outlined">
                        Buscar
                      </v-btn>
                    </v-col>
                  </v-row>
                  <!-- <v-row  justify="end">
                  <v-col  cols="2">
                    <v-btn class="ma-2 w-100" variant="outlined">
                        Buscar
                    </v-btn>
                  </v-col>
                </v-row> -->
                </v-card-text>
              </v-card>
            </v-row>

          </v-col>

          <v-col>

          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
      <div class="mt-4" height="800px">
        <v-container class="mb-8">
          <v-row class="mb-8">
            <v-col cols="12 justify-end align-center">
              <div class="text-h4 text-MediumCyan" justify="center" align="center">
                ¡La Mejor Plataforma de Medicina Particular en Línea!
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia cupiditate hic! Recusandae rem,
              veritatis sequi perspiciatis omnis mollitia repellendus aliquid quos consectetur optio quasi explicabo
              numquam dolores eos quaerat! <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptates dolorem voluptate enim quisquam.
              Libero, veniam. Optio quae, esse tempore magni quis non omnis necessitatibus dolore cum deleniti debitis
              eligendi!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cum, praesentium accusamus nostrum nam, in
              hic temporibus repudiandae, commodi ratione fugiat est deleniti esse veniam provident ipsam nisi assumenda.
              Recusandae. <br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis culpa aliquid sit consectetur. Voluptatum
              fugiat, laboriosam vero odio, ea ipsa nam hic pariatur vel sapiente ab cupiditate voluptates magni
              suscipit.<br><br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum saepe et unde consequuntur laboriosam.
              Voluptatem nihil quia laboriosam consectetur deleniti nam a exercitationem porro natus! Totam nisi dolore
              adipisci voluptatem!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rem quod hic necessitatibus earum debitis ut
              omnis dolorem, qui libero numquam, ipsam maxime a deserunt id expedita alias ad! Architecto.
            </v-col>
            <v-col cols="4">
              <v-row justify="center">
                <v-col cols="12" sm="7" md="6" lg="5">
                  <v-sheet elevation="10" rounded="xl">
                    <v-sheet class="pa-3 bg-primary text-right" rounded="t-xl">
                      <v-btn icon>
                        <v-icon>mdi-content-save-cog-outline</v-icon>
                      </v-btn>

                      <v-btn class="ms-2" icon>
                        <v-icon>mdi-check-bold</v-icon>
                      </v-btn>
                    </v-sheet>

                    <div class="pa-4">
                      <v-chip-group selected-class="text-primary" column>
                        <v-chip v-for="tag in tags" :key="tag">
                          {{ tag }}
                        </v-chip>
                      </v-chip-group>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-card class="" height="500px">
        <v-carousel>
          <v-carousel-item src="https://images.pexels.com/photos/7653310/pexels-photo-7653310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" cover></v-carousel-item>

          <v-carousel-item src="https://images.pexels.com/photos/4492050/pexels-photo-4492050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" cover></v-carousel-item>

          <v-carousel-item src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" cover></v-carousel-item>

          <v-carousel-item src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" cover></v-carousel-item>
        </v-carousel>
      </v-card>

    </v-card>
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AccordionCities from '@/components/AccordionCities/AccordionCities.vue';
// import SelectSpecialists from '@/components/SelectSpecialists/SelectSpecialists.vue';
import ServiceHome from '@/views/Home/ServiceHome';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    FooterComponent,
    AccordionCities,
    // SelectSpecialists
  },
  props: {
    msg: String
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
    especialidades:[]
  }
  ),
  /********* Ciclo de vida *********/
  async created() {
    await this.cargarEspecialidades();
  },
  methods:{
    async cargarEspecialidades() {

      let response = await ServiceHome.consultarListaEspecialidades();
      console.log("Esta es la respuesta",response);
      if (response.length > 0) {
        this.especialidades = response;
        console.log("Estas son las especialidades",this.especialidades);
      }
      else{
        console.log("Ocurrió un error",response)
      }
    },
  }
}
</script>

<style>
.ddd{
  width: 150px;
}
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

@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}
</style>




