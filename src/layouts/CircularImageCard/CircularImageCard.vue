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
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>
<template>
<v-card>
  <v-card-title class="align-center">
    <v-avatar size="80" class="mx-auto">
        <v-img
          :src="image"
          :alt="title"
          width="100%"
          height="auto"
        />
    </v-avatar>
  </v-card-title>
  <v-card-title>
    {{ title }}
  </v-card-title>
  <v-card-text>
    <p>{{ text }}</p>
  </v-card-text>
</v-card>
</template>
