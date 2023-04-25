<template>
  <div class="container justify-center">
    <div class="h-auto d-flex justify-center text-white backTransparent">
      <v-toolbar class="d-flex flex-row-reverse mb-6 bg-surface-variant w-75 rounded-b-lg elevation-10">
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
          Button
        </v-btn>
        <v-btn>
          Button
        </v-btn>
        
      </v-toolbar>
    </div>
    <!-- <v-card class="transparent" height="500" >
    </v-card> -->
    <v-container class="mb-8" >
    <v-row no-gutters>
      <v-col cols="6">
        <div class="text-h4 text-white mb-10">¡Encuentra el especialista que necesitabas!</div>

        <v-row no-gutters >
            <v-card
              class="w-100">
              <template v-slot:title>
                Selecciona la ciudad y la especialidad
              </template>
            
              <v-card-text>
                <v-row no-gutters justify="center" align="center">
                  <v-col  cols="5">
                    <v-select class="ma-1" label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                    </v-select>
                  </v-col>
                  <v-col cols="5">
                    <v-select class="ma-1" label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-btn class="ma-1 w-100" variant="outlined">
                        Buscar
                    </v-btn>
                  </v-col>
                </v-row>
                <!-- <v-row no-gutters justify="end">
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
    <v-card class="bg-white elevation-10" height="500">

    </v-card>
  </div>
  <!-- <nav class="menu">
    <div class="menu-logo">
      <router-link to="/">
        <img src="/assets/logo.png" alt="Logo de la empresa">
      </router-link>
    </div>
    <ul class="menu-options">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/acerca-de-nosotros">Acerca de nosotros</router-link></li>
      <li><router-link to="/soporte">Soporte</router-link></li>
    </ul>
    <div class="menu-buttons">
      <router-link to="/registrarse" class="btn">Registrarse</router-link>
      <router-link to="/iniciar-sesion" class="btn btn-primary">Iniciar sesión</router-link>
    </div>
  </nav> -->
</template>

<script>
export default {
  // Aquí puedes agregar la lógica que necesites para el menú
  
  name: 'HomeView',
  props: {
    msg: String
  },
  data: () => ({

    }
),
}
</script>

<style>

.container{
  /* background: url('../../assets/images/Cyanwallpaper.jpg') no-repeat  center;*/
  background-image: linear-gradient(to right top, #1c565c, #26747d, #31949f, #3bb6c3, #46d8e8);
  height: 1000px;
  margin:0;
}

.transparent{
  opacity: 0;
}

.backTransparent{
  background-color: transparent;
}

/* .menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f2f2f2;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
}

.menu-logo img {
  height: 50px;
}

.menu-options {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-options li {
  margin-right: 10px;
}

.menu-options li a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out ;
}

.menu-options li a:hover {
  background-color: #1C565C;
  color:#f2f2f2;
}

.menu-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-buttons .btn {
  margin-right: 10px;
  color: #fff;
  background-color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.menu-buttons .btn:hover {
  background-color: #666;
}

.menu-buttons .btn-primary {
  background-color: #007bff;
}

/* Estilos para pantallas pequeñas 
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }
  
  .menu-options {
    margin-top: 10px;
  }
  
  .menu-options li {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .menu-buttons {
    margin-top: 10px;
  }
} */
</style>




