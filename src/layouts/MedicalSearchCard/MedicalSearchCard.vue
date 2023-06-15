<script>
export default {
  data() {

  },
};
</script>
<template>
  <v-sheet class="pa-2 ma-2 text-center cardStyles">
    <v-card class="elevation-10">
      <v-avatar size=150 class="mt-6">
        <img class="imgIconoCard" src="@/assets/images/imgWorkingGroup/JuanAndres.jpg" alt="icono-grupo" />
      </v-avatar>
      <v-container>
        <h2 class="text-color-h2">Nombre Medico</h2>
        <h4 class="text-color-h4">Especialidad</h4>
        <p>Edad: {{ edad }}</p>
        <p>ciudad: {{ ciudad }}</p>
      </v-container>
      <v-btn class="me-4 mt-3 mb-5 sizebtn" color="MediumCyan" type="submit">
        Agendar
      </v-btn>
    </v-card>
  </v-sheet>
</template>
<style>

.sizebtn {
  width: 200px;
}
.imgIconoCard {
  background-size: cover;
  background-position: relative;
  width: 150px;

}

.v-sheet:hover {
  background-color: #46D8E8;
}

.cardStyles {
  transition: background-color 0.5s;
}
.text-color-h2 {
  color: #2F919C;
}
.text-color-h4 {
  color: #3AB4C2;
}
</style>