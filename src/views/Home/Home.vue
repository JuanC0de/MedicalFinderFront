<template>
  <Navbar />
  <div class="container justify-center">

    <!-- <v-card class="transparent" height="500" >
    </v-card> -->

    <!-- Buscador -->
    <v-card height="500px">
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
                      <v-select class="ma-1" label="Select"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
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
      <v-container class="mb-8">
        <v-row class="mb-8">
          <v-col cols="12 justify-end align-center">
            <div class="text-h4 text-MediumCyan" justify="center" align="center">
              Consejos para ingresar
            </div>
          </v-col>
        </v-row>
        <v-row>
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
      <v-card class="" height="500px">
        <v-carousel>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-card>
      <div class="bg-PrincipalCyan" height="800px">
        <v-container class="mb-8">
          <v-row class="mb-8">
            <v-col cols="12 justify-end align-center">
              <div class="text-h4 text-MediumCyan" justify="center" align="center">
                Consejos para ingresar
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-card width="400" title="This is a title" subtitle="This is a subtitle" text="This is content"></v-card>
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
      </div>

      
    </v-card>
    <FooterComponent/>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    FooterComponent
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

@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}
</style>




