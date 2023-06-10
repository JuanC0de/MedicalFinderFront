<script setup>
import MedicalSearchCard from '@/layouts/MedicalSearchCard/MedicalSearchCard.vue'

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
                    <v-autocomplete v-model="city" :items="this.ciudades" label="Ciudades" persistent-hint>
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
                    <v-autocomplete v-model="especialidad" :items="this.especialidades" label="Especialidades"
                      persistent-hint>
                      <template v-slot:append-outer>
                        <v-slide-x-reverse-transition mode="out-in">
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

    <!-- Crear un for para generar las cartas de acuerdo a la api -->
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <MedicalSearchCard />
        </v-col>
        <v-col cols="12" md="6">
          <MedicalSearchCard />
        </v-col>
      </v-row>
    </v-container>
    <!-- Finalizacion de las cartas de los medicos -->
  </div>
</template>

<style>
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
</style>
