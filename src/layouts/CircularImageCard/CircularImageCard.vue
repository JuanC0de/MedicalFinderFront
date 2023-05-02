<script>
export default {
    name: 'CircularImageCard',
    props: {
        title: {
          type: String,
          required: true
        },
        text: {
          type: String,
          required: true
        },
        imagen: {
          img: String,
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
<v-card class="card">
  <v-avatar size=80 class="align-center">
    <img 
      :src="imagen"
      alt="icono-grupo"
    />
  </v-avatar>
  <v-card-title>
    {{ title }}
  </v-card-title>
  <v-card-text>
    <p>{{ text }}</p>
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
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #3AB4C2;
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 5px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100%  0 5px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.5s;
}

.card:hover:after {
  content: "Medical Finder";
}
</style>
