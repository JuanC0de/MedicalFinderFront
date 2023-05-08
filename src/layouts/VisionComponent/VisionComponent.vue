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
      <v-col cols="12" md="6" order="1">
        <v-sheet class="pa-10 ma-1">
          <h2 class="title-lg">
            {{ title }}
          </h2>
          <p class="text-lg">
            {{ text }}
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6" order="2">
        <v-sheet class="pa-2 ma-2">
          <v-img 
            class="img2"
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
  @media only screen and (min-width: 1383px) {
    .img2 {
      width: 500px;
      height: 450px;
    }
  }
  .title-lg {
    font-size: 35px; /* Cambiar el tamaño de letra */
  }
</style>