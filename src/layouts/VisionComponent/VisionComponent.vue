<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <v-container align = "center">
    <v-row align = "center" justify="space-around">
      <v-col cols="6" order="2">
        <v-sheet class="pa-2 ma-2">
        <h2 
        class="text-lg font-custom"
        >{{ title }}</h2>
        <p>{{ text }}</p>
        </v-sheet>
      </v-col>
      <v-col cols="6" order="1">
        <v-sheet class="pa-2 ma-2">
        <v-img
          src="@/assets/images/imgMissionVision/2-vision1.png"
          :alt="title"
          width="80%"
        />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>   
</template>

<style>
  .text-lg {
    font-size: 35px; /* Cambiar el tamaño de letra */
  }

  .font-custom {
    font-family: 'Montserrat', sans-serif; /* Agregar un tipo de letra personalizado */
  }
</style>