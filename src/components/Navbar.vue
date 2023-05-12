<script>
export default {
  name: 'NavbarView',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Inicio', icon: 'mdi-home' },
        { title: 'Perfil', icon: 'mdi-account' },
        { title: 'Configuración', icon: 'mdi-cog' },
        { title: 'Cerrar sesión', icon: 'mdi-logout' },
      ],
      registro: [
        { title: 'Médico',  routerTo:'/registro/medico' },
        { title: 'Paciente', routerTo:'/registro/paciente' },
      ],
    }
  },
}
</script>

<template>
<div>
    <v-app-bar app class="bg-PrincipalCyan">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="menu"></v-app-bar-nav-icon> -->
      <v-toolbar-title>
        <!-- <img src="@/assets/LogoMedicalFinder.png" alt="" width="30%"> -->
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn to="/" class="top-items text-white">Inicio</v-btn>
      <v-btn to="/AcercaDeNosotros" class="top-items text-white">Acerca de Nosotros</v-btn>
      <v-btn to="/Soporte" class="top-items text-white">Soporte</v-btn>
      <v-btn id="menu-activator" class="top-items text-white">
        Registrarnos
      </v-btn>
      <v-menu activator="#menu-activator" class="top-items">
        <v-list>
          <v-list-item  v-for="(item, index ) in registro" :key="index" :value="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn to="/IniciarSesion" class="top-items text-white">Iniciar Sesión</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!-- Contenido de la aplicación -->
    </v-content>
  </div>
</template>

<style>
.v-navigation-drawer__content {
  max-width: 256px;
}
.v-app-bar-nav-icon{
  display: none;
}
.v-navigation-drawer{
  display: none;
}
@media only screen and (max-width: 750px) {
  .v-navigation-drawer__content {
    max-width: calc(100% - 56px);
  }
  .v-app-bar-nav-icon{
    display: block;
  }
  .top-items{
    display:none;
  }
  .v-navigation-drawer{
    display: block;
  } 
}
</style>
