<template>
  <Navbar />
  <div class="container justify-center">
    <!-- <v-card class="transparent" height="500" >
    </v-card> -->

    <!-- Buscador -->
    <v-card height="400px">
      <v-container class=" ml-8 w-100" width="100%">
        <v-row justify="center">
          <v-col cols="7" lg="6" md="5" sm="12">
            <div class="text-h4 text-PrincipalCyan mb-10">¡Encuentra el especialista que necesitas!</div>

            <v-row>
              <v-card class="w-100 elevation-10">
                <template v-slot:title>
                  Selecciona la ciudad y la especialidad
                </template>

                <v-card-text>
                  <v-row justify="center" align="center">
                    <v-col cols="5">
                      <!-- <AccordionCities class="ma-1" /> -->
                      <v-col>
                        <v-autocomplete v-model="this.IdCiudad" :items="this.ciudades" label="Ciudades" persistent-hint>
                          <template v-slot:append-outer>
                            <v-slide-x-reverse-transition mode="out-in">
                            </v-slide-x-reverse-transition>
                          </template>
                        </v-autocomplete>
                      </v-col>
                    </v-col>
                    <v-col cols="5">
                      <!-- <SelectSpecialists class="ma-1"/> -->
                      <v-col>
                        <v-autocomplete v-model="IdEspecialidad" :items="this.especialidades" item-text="text"
                          item-value="value" label="Especialidades" persistent-hint>
                          <template v-slot:append-outer>
                            <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
                          </template>
                        </v-autocomplete>
                      </v-col>
                    </v-col>
                    <v-col cols="2">
                      <v-btn class="ma-1 w-100" variant="outlined" @click="Especialistas()">
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

          <v-col cols="5" lg="6" md="5" sm="12">
            <v-img src="@/assets/images/imgHome/imgMain/médico.png" alt="Médico" class="imgHome" />
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
                ¡Tu fuente confiable para encontrar profesionales de la salud
                cerca de ti!
              </div>
            </v-col>
          </v-row>
          <v-container>
            <v-row align="center ml-3">
              <v-col cols="12" md="6" class="HomeParagraph">
                Nuestro objetivo es brindarte una experiencia sin complicaciones
                al buscar atención médica. Simplemente selecciona tu ciudad y
                elige la especialidad que necesitas y nuestra amplia base de datos
                de profesionales de la salud te mostrará una lista completa de
                opciones, incluyendo perfiles detallados y horarios de
                atención.<br /><br />
                En Medical Finder, nos preocupamos por tu bienestar y queremos que
                encuentres el cuidado médico adecuado para ti. Nuestro equipo se
                esfuerza constantemente para asegurarse de que la información que
                encuentres aquí sea precisa y actualizada.<br /><br />
                No pierdas más tiempo buscando en directorios interminables o
                preguntando a tus amigos y familiares. Confía en Medical Finder
                para encontrar a los mejores profesionales de la salud cerca de
                ti.<br><br> Tu salud es importante para nosotros. Descubre la comodidad de
                encontrar atención médica de calidad con Medical Finder.
              </v-col>
              <v-col cols="12" md="6">
                <img class="imgDoc" src="@/assets/images/imgHome/home/dibujoDoct.png"/>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
      <v-card class="" height="500px">
        <v-carousel>
          <v-carousel-item
            src="https://images.pexels.com/photos/7653310/pexels-photo-7653310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://images.pexels.com/photos/4492050/pexels-photo-4492050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cover></v-carousel-item>
        </v-carousel>
      </v-card>
      <v-container>
        <div class="textHome mt-4 mb-2 ml-4">Recomendaciones para tu salud</div>
        <v-row align="center">
          <v-col cols="12" md="6">
            <img class="imgDoc1" src="@/assets/images/imgHome/home/dibijoAzul.png"/>
          </v-col>
          <v-col cols="12" md="6" class="HomeParagraph">
            <v-expansion-panels variant="recomendaciones" class="my-4 HomeParagraph">
              <v-expansion-panel
                title="Mantén una alimentación balanceada"
                text="Consumir una dieta equilibrada que incluya una variedad de frutas, verduras, granos enteros, proteínas magras y grasas saludables es esencial para proporcionar los nutrientes necesarios para el funcionamiento óptimo del cuerpo."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Realiza ejercicio regularmente"
                text="La actividad física regular tiene numerosos beneficios para la salud, como fortalecer el sistema cardiovascular, mejorar la fuerza y flexibilidad muscular, así como contribuir a mantener un peso saludable."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Duerme lo suficiente"
                text="Un sueño adecuado es crucial para la salud general. Dormir entre 7 y 9 horas cada noche promueve la función cerebral, fortalece el sistema inmunológico y ayuda a mantener un equilibrio emocional adecuado."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Mantén una buena hidratación"
                text="Beber suficiente agua es esencial para mantener el cuerpo hidratado y asegurar el funcionamiento óptimo de los órganos. Se recomienda consumir alrededor de 2 litros de agua al día, aunque las necesidades pueden variar según la actividad y el clima."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Evita el consumo de tabaco y alcohol"
                text="El tabaco y el consumo excesivo de alcohol están asociados con una amplia gama de problemas de salud, como enfermedades cardiovasculares, cáncer y daño hepático. Evitar o reducir su consumo es una decisión importante para mantener una vida saludable."
              ></v-expansion-panel>
              <v-expansion-panel
                title="Mantén una buena higiene personal"
                text="Lavarse las manos regularmente, especialmente antes de comer o después de ir al baño, ayuda a prevenir la propagación de enfermedades. Además, mantener una buena higiene dental, como cepillarse los dientes dos veces al día y usar hilo dental, contribuye a una buena salud bucal."
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ServiceHome from '@/views/Home/ServiceHome';
import router from '@/router/index';
export default {
  name: "HomeView",
  components: {
    Navbar,
    FooterComponent,
  },
  props: {
    msg: String,
  },
  data: () => ({
    IdCiudad: "",
    IdEspecialidad: "",
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
    ciudades: [],
    especialidades: []
  }
  ),
  /********* Ciclo de vida *********/
  async created() {
    await this.cargarEspecialidades();
    await this.cargarCiudades();
  },
  methods: {
    async cargarEspecialidades() {
      let response = await ServiceHome.consultarListaEspecialidades();
      console.log("Esta es la respuesta deploy:", response);
      if (response.length > 0) {
        this.especialidades = response.map(objeto => objeto.especialidad);
        console.log("Estas son las especialidades", this.especialidades);
      } else {
        console.log("Ocurrió un error", response);
      }
    },
    async cargarCiudades() {

      let response = await ServiceHome.consultarListaCiudades();
      console.log("Esta es la respuesta deploy - ciudad:", response);
      if (response.length > 0) {
        this.ciudades = response.map(objeto => objeto.city)
          .filter((ciudad, index, array) => {
            return array.indexOf(ciudad) === index;
          });

        console.log("Estas son las ciudades", this.ciudades);
      } else {
        console.log("Ocurrió un error", response);
      }
    },
    Especialistas() {
      if (this.IdCiudad && this.IdEspecialidad) {
        router.push({
          path: '/buscar',
          query: {
            IdCiudad: this.IdCiudad,
            IdEspecialidad: this.IdEspecialidad
          }
        });
      } else {
        console.log('Hay algún campo vacío u ocurrió un error.');
      }
    }
  }
}
</script>

<style>
.ddd {
  width: 150px;
}

.container {
  /* background: url('../../assets/images/Cyanwallpaper.jpg') no-repeat  center;*/
  background-image: linear-gradient(to right top,
      #1c565c,
      #26747d,
      #31949f,
      #3bb6c3,
      #46d8e8);
  height: 1000px;
  margin: 0;
}

.transparent {
  opacity: 0;
}

.backTransparent {
  background-color: transparent;
}

.imgHome {
  height: 60%;
}


@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}

.HomeParagraph {
  font-size: 19px;
}

.imgDoc{
  width: 600px;
  height: 500px;
}
.imgDoc1{
  width: 500px;
  height: 400px;
}
.textHome{
  font-size: 35px;
  color: #31949f;
}
</style>




