<template>
  <Navbar />
  <div class="justify-center">

    <!-- Buscador -->
    <div height="300px">
      <v-container class=" w-100" width="100%" >
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
    <v-card>
      <v-container >
        <v-row>
          <v-col cols="6" align="center" justify="center">
        <v-card class="formContainer pa-4 elevation-20">

            <div class="card elevation-20">
    <img src="ruta_de_la_imagen_del_medico.jpg" alt="Foto del médico">
    <div class="card-content">
      <div class="card-title">Médico</div>
      <div class="card-info">
        <p>Nombre: Dr. Juan Pérez</p>
        <p>Edad: 35 años</p>
        <p>Especialidad: Pediatría</p>
        <p>Ciudad: Ciudad de México</p>
        </div>
        <button class="card-button">Agendar</button>
      </div>
    </div>


    <div class="card elevation-20">
    <img src="ruta_de_la_imagen_del_medico.jpg" alt="Foto del médico">
    <div class="card-content">
      <div class="card-title">Médico</div>
      <div class="card-info">
        <p>Nombre: Dr. Juan Pérez</p>
        <p>Edad: 35 años</p>
        <p>Especialidad: Pediatría</p>
        <p>Ciudad: Ciudad de México</p>
        </div>
        <button class="card-button">Agendar</button>
      </div>
    </div>

  </v-card>
  <v-col cols="6">
    <div class="card elevation-20">
    <img src="ruta_de_la_imagen_del_medico.jpg" alt="Foto del médico">
    <div class="card-content">
      <div class="card-title">Médico</div>
      <div class="card-info">
        <p>Nombre: Dr. Juan Pérez</p>
        <p>Edad: 35 años</p>
        <p>Especialidad: Pediatría</p>
        <p>Ciudad: Ciudad de México</p>
        </div>
        <button class="card-button">Agendar</button>
      </div>
    </div>


  </v-col>
  </v-col>

  </v-row>
  </v-container>
  </v-card>



  </div>
</template>
<script>
</script>

<style>
.card {
      width: 400px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      display: flex;
      align-items: flex-start;
    }
    .card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .card-content {
      flex-grow: 1;
    }
    .card-title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .card-info {
      margin-bottom: 10px;
    }
    .card-button {
      padding: 8px 16px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
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
