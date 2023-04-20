<template>

<v-card
    color="grey-lighten-1"
    height="115px"
    rounded="0"

  >
    <v-toolbar property>

      <h2 class="bton">DocSearch</h2>

      <v-btn icon="mdi-magnify" variant="tonal">
      </v-btn>

      <v-btn class="v-btn" variant="tonal">
        <router-link to="Home2">Home</router-link>
      </v-btn>

      <v-btn class="v-btn" variant="tonal">
        <router-link to="/AcercaDeNosotros">Acerca de Nosotros</router-link>
      </v-btn>

      <v-btn class="v-btn" variant="tonal">
        <router-link to="/Support">Soporte</router-link>
      </v-btn>

      <v-btn class="v-btn" variant="tonal">
        <router-link to="/">registrarse</router-link>
      </v-btn>

      <v-btn class="v-btn" variant="tonal">
        <router-link to="/IniciarSesion">Iniciar Sesion</router-link>
      </v-btn>
    </v-toolbar>
  </v-card>

  <div class="text-center">
    <v-row class="pa-5">
      
    </v-row>

    <v-sheet
      :class="model"
      max-width="596"
      class="mx-auto mt-8"
      elevation="12"
      height="508"
      width="70%"
    ></v-sheet>

    <div class="py-3"></div>

    <code class="text-subtitle-1">.{{ model }}</code>
  </div>

</template>

<style>
.v-btn {
  margin: 20px;}

h2 {
  margin-right: 330px;
  margin-left: 30px;}

.v-main {
        background-image: url('@/assets/images/FondHome.jpg');
        background-size: cover;
        background-position: relative;
        min-height: 100vh;
}
</style>

<script>

export default {
  name: 'HomeView',
  props: {
    msg: String
  },
  data: () => ({

    }
),
}


</script>


