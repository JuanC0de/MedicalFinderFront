<script setup>
import FormSupport from '@/layouts/FormSupport/FormSupport.vue'
import SupportingParagraph from '@/layouts/SupportingParagraph/SupportingParagraph.vue'
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <Navbar />
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6">
        <SupportingParagraph />
      </v-col>
      <v-col cols="12" md="6">
        <FormSupport />
      </v-col>
    </v-row>
  </v-container>

  <v-card>
    <v-img src="@/assets/images/imgSupport/imgSupport.png" height="400"></v-img>
  </v-card>
  <FooterComponent/>
</template>
