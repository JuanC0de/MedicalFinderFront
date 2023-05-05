<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
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


<script>
export default {
  name: 'MenuView',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Inicio', icon: 'mdi-home' },
        { title: 'Perfil', icon: 'mdi-account' },
        { title: 'Configuración', icon: 'mdi-cog' },
        { title: 'Cerrar sesión', icon: 'mdi-logout' },
      ],
    }
  },
}
</script>

<style>
.v-navigation-drawer__content {
  max-width: 256px;
}

@media only screen and (max-width: 600px) {
  .v-navigation-drawer__content {
    max-width: calc(100% - 56px);
  }
}
</style>