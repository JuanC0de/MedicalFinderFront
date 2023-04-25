<script setup>
import FormSupport  from '@/layouts/FormSupport/FormSupport.vue'
import SupportingParagraph from '@/layouts/SupportingParagraph/SupportingParagraph.vue'

</script>

<template>
    <v-container>
      <v-row>
        <v-col cols="6">
                <SupportingParagraph/>
        </v-col>
        <v-col cols="6">
            <FormSupport/>
        </v-col>
      </v-row>
    </v-container>

    <v-card>
        <v-img
            src="@/assets/images/imgSupport/imgSupport.png"
            height="400"            
        ></v-img>
    </v-card>
</template>
