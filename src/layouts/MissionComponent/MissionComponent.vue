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
      <v-col cols="6" order="1">
        <v-sheet class="pa-1 ma-1">
          <h2 
        class="text-lg font-custom"
        >{{ title }}</h2>
          <p>{{ text }}</p>
        </v-sheet>
      </v-col>
      <v-col  cols="6" order="2">
        <v-sheet class="pa-2 ma-2">
          <v-img
            src="@/assets/images/imgMissionVision/Mision1.png"
            :alt="title"
            width="100%"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>   
</template>