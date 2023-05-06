<template>
<!-- FooterComponent -->
    <div class="" height="800px">
        <v-footer class="bg-PrincipalCyan">
          <v-row justify="center">
            <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
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
</template>
<script>
export default {
  name: 'FooterComponent',
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