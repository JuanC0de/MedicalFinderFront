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
  <v-container  align = "center">
    <v-row align = "center" justify="space-around">
      <v-col cols="12" md="6" order="2">
        <v-sheet class="pa-10 ma-1">
          <h2 class="title-lg">
            {{ title }}
          </h2>
          <p class="text-lg">
            {{ text }}
          </p>
        </v-sheet>
      </v-col>
      <v-col  cols="12" md="6" order="1">
        <v-sheet class="pa-2 ma-2">
          <v-img
            class="img"
            src="@/assets/images/imgMissionVision/Mision1.png"
            :alt="title"
            width="100%"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>   
</template>

<style>
  @media only screen and (min-width: 1383px) {
    .img {
      width: 600px;
      height: 550px;
    }
  }
  .text-lg {
    font-size: 20px; /* Cambiar el tamaño de letra */
  }
</style>