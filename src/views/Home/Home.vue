<template>
  <Navbar/>
  <div class="container justify-center">
    <div class="h-auto d-flex justify-center text-white backTransparent">
      <v-toolbar class="d-flex flex-row-reverse mb-6 bg-surface-variant w-75 rounded-b-lg elevation-20">
        <v-toolbar-title class="text-grey">
          Medical Finder
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn>
          Button
        </v-btn>
        <v-btn>
          {{boton1}}
        </v-btn>
        <v-btn>
          Button
        </v-btn>
        
      </v-toolbar>
    </div>
    <!--  -->
    <v-container class="mb-8" >
      <v-row >
      <v-col cols="6">
        <div class="text-h4 text-white mb-10">¡Encuentra el especialista que necesitas!</div>

        <v-row >
            <v-card
              class="w-100 elevation-10">
          <v-row no-gutters>
            <v-card class="w-100 elevation-10">
              <template v-slot:title>
                Selecciona la ciudad y la especialidad
              </template>

              <v-card-text>
                <v-row justify="center" align="center">
                  <v-col  cols="5">
                    <v-select class="ma-1" label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                    </v-select>
                  </v-col>
                  <v-col cols="5">
                    <v-select class="ma-1" label="Select"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-btn class="ma-1 w-100" variant="outlined">
                      Buscar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-row>

        </v-col>

        <v-col>

        </v-col>
      </v-row>
    </v-container>
    <!-- Fin de Buscador  -->

    <v-card class="bg-white elevation-10">
      <v-container class="mb-8">
        <v-row no-gutters class="mb-8">
          <v-col cols="12 justify-end align-center">
            <div class="text-h4 text-MediumCyan" justify="center" align="center">
              Consejos para ingresar
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="450">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange">
                  Share
                </v-btn>

                <v-btn color="orange">
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="450">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange">
                  Share
                </v-btn>

                <v-btn color="orange">
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="450">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange">
                  Share
                </v-btn>

                <v-btn color="orange">
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    <div class="transparent" height="800px">
      <h1>------</h1>
    </div>
     
 <!-- Footer -->
    <div class="" height="800px">
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Medical Finder</strong> 
      </v-col>
      <v-col class="text-center mt-4" cols="12">
        <a href="#">Privacy Policy</a>
        <span class="mx-2">•</span>
        <a href="#">Terms of Service</a>
      </v-col>
      <v-col class="text-center mt-4" cols="12">
        <span>&copy; {{ new Date().getFullYear() }} Medical Finder</span>
      </v-col>
    </v-row>
  </v-footer>
</div>
<!-- Footer fin -->
  </v-card>
  </div>

  
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'HomeView',
  components:{
    Navbar
  },
  props: {
    msg: String
  },
  data: () => ({
    boton1: "Aguapanelea"
  }
  ),
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

</style>




