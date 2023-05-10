<script>
export default {
    props:{
        imagen: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        textCard: {
            type: String,
            required: true
        }
    }
}
</script>

<template>          
  <v-card 
    border
    class="mb-3 card"
    density="compact"
    :prepend-avatar="imagen"
    :subtitle="subtitle"  
    :title="title"
  >
    <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>

    <v-card-text>
      {{ textCard }}
    </v-card-text>
  </v-card>

</template>

<style>
.card {
  position: relative;
  width: 320px;
  height: 320px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  /* box-shadow: 50px 15px 7px black; */
}
</style>