<script>
// import MedicalSearchCard from '@/layouts/MedicalSearchCard/MedicalSearchCard.vue'
import ServiceMedicalFinder from "./ServiceMedicalFinder";
import router from "@/router/index";
import Navbar from '@/components/Navbar.vue';

export default {
  name: "MedicalFinder",
  components: {
    Navbar
  },
  props: {
    msg: String,
  },
  data: () => ({
    IdEspecialista: "",
    ciudades: [],
    especialidades: [],
    especialistas: [],
    totalEspecialistas:[],
    CiudadSeleccionada: "",
    EspecialidadSeleccionada: ""
  }),
  /********* Ciclo de vida *********/
  async created() {
    await this.cargarEspecialidades();
    await this.cargarCiudades();
    await this.listarEspecialistas();
    this.CiudadSeleccionada = this.$route.query.IdCiudad || '';
    this.EspecialidadSeleccionada = this.$route.query.IdEspecialidad || '';
  },
  methods: {
    async cargarEspecialidades() {
      let response = await ServiceMedicalFinder.consultarListaEspecialidades();
      console.log("Esta es la respuesta deploy:", response);
      if (response.length > 0) {
        this.especialidades = response.map((objeto) => objeto.especialidad);
        console.log("Estas son las especialidades", this.especialidades);
      } else {
        console.log("Ocurrió un error", response);
      }
    },
    async cargarCiudades() {
      let response = await ServiceMedicalFinder.consultarListaCiudades();
      console.log("Esta es la respuesta deploy - ciudad:", response);
      if (response.length > 0) {
        this.ciudades = response.map((objeto) => objeto.city);
        console.log("Estas son las ciudades", this.ciudades);
      } else {
        console.log("Ocurrió un error", response);
      }
    },
    async listarEspecialistas() {
      let response = await ServiceMedicalFinder.consultarEspecialistas();
      console.log("Esta es la respuesta deploy - especialistas:", response);
      if (response.length > 0) {
        this.especialistas = response;
        this.totalEspecialistas = response;
        console.log("Estas son los especialistas", this.especialistas);
        this.Especialistas()
      } else {
        console.log("Ocurrió un error", response);
      }
      console.log('valores de url', this.CiudadSeleccionada, '-', this.EspecialidadSeleccionada)
    },
    filtrarEspecialistas() {
      this.especialistas = this.especialistas.filter();
    },
    Especialistas() {
        console.log("Ya entre a la función porque no estan vacíos los campos.");
        let total=this.totalEspecialistas
        if(this.CiudadSeleccionada == null && this.EspecialidadSeleccionada == null){
          console.log('Estoy entrando a busqueda');
          this.especialistas = this.totalEspecialistas;
        }
        else{
          if(this.CiudadSeleccionada.length > 0 ){
          this.especialistas = total.filter(especialista => {
          return especialista.CiudadMed == this.CiudadSeleccionada
        });
        }
        if(this.EspecialidadSeleccionada.length > 0){
          this.especialistas = total.filter(especialista => {
          return especialista.Especialidad == this.EspecialidadSeleccionada
          });
        }
        }
    },
    agendar(guidMedico) {
      console.log('Entre a la funcion',guidMedico)
      router.push({
          path: '/buscar/agendarCita',
          query: {
            guidEspecialista: guidMedico
          }
        });
    },
  },
};
</script>

<template>
  <Navbar />
  <div class="justify-center">
    <!-- Buscador -->
    <div height="300px">
      <v-container class="w-100" width="100%">
        <v-row justify="center">
          <v-col cols="12">
            <v-row>
              <v-col cols="12" align="center">
                <p class="buscadorTittle text-PrincipalCyan mt-3 mb-3">
                  Buscador de especialistas
                </p>
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
                    <v-autocomplete v-model="CiudadSeleccionada" :items="this.ciudades" label="Ciudades" persistent-hint>
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
                    <v-autocomplete v-model="EspecialidadSeleccionada" :items="this.especialidades" label="Especialidades"
                      persistent-hint>
                      <template v-slot:append-outer>
                        <v-slide-x-reverse-transition mode="out-in">
                        </v-slide-x-reverse-transition>
                      </template>
                    </v-autocomplete>
                  </v-col>
                </v-col>
                <v-col cols="2">
                  <v-btn class="text-White ma-1 w-100 bg-PrincipalCyan" variant="text" @click="Especialistas()">
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

    <!-- Crear un for para generar las cartas de acuerdo a la api -->
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" v-for="medico in this.especialistas" :key="medico.idMedico">
          <v-sheet class="pa-2 ma-2 text-center cardStyles">
            <v-card class="elevation-10">
              <v-avatar size="150" class="mt-6">
                <img
                  class="imgIconoCard"
                  :src="medico.fotoPerfil"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                <h2 class="text-color-h2">{{ medico.NombreCompletoMed }}</h2>
                <p>Direcciòn: {{ medico.DireccionConsultorio }}</p>
                <p>Ciudad: {{ medico.CiudadMed }}</p>
                <p>Especialidad: {{ medico.Especialidad }}</p>
              </v-container>
              <v-btn
                class="me-4 mt-3 mb-5 sizebtn"
                @click="agendar(medico.guidEspecialista)"
                color="MediumCyan"
                type="submit">
                Agendar
              </v-btn>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <!-- Finalizacion de las cartas de los medicos -->
  </div>
</template>

<style>
/* .container {
   background: url('../../assets/images/Cyanwallpaper.jpg') no-repeat  center;
  background-image: linear-gradient(to right top,
      #1c565c,
      #26747d,
      #31949f,
      #3bb6c3,
      #46d8e8);
  height: 1000px;
  margin: 0;
}
 */
.transparent {
  opacity: 0;
}

.backTransparent {
  background-color: transparent;
}

.buscadorTittle {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
}

@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}

.sizebtn {
  width: 200px;
}

.imgIconoCard {
  background-size: cover;
  background-position: relative;
  width: 150px;
}

.cardStyles:hover {
  background-color: #46d8e8;
}

.cardStyles {
  transition: background-color 0.5s;
}

.text-color-h2 {
  color: #2f919c;
}

.text-color-h4 {
  color: #3ab4c2;
}
</style>
