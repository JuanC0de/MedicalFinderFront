<script>
export default {
  data() {

  },
};
</script>
<template>
  <!--   <div class="cardMed">
    <div class="head">
      <div class="circle"></div>
      <div class="img">
        <img
          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
          alt=""
        />
      </div>
    </div>

    <div class="description">
      <h3>Nombre Medico</h3>
      <h4>Especialidad</h4>
      <p>Edad: {{ edad }}</p>
      <p>ciudad: {{ ciudad }}</p>
    </div>

    <div class="contact">
      <a href="#">Contact</a>
    </div>
  </div> -->
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
/* .cardMed {
  position: relative;
  width: 800px;
  height: 400px;
  background: LightCyan;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;
  margin: 15px 20px;
}
.cardMed:hover {
  box-shadow: 0 5px 15px rgba(3, 89, 92, 0.5);
  transform: translateY(-15px);
}
.cardMed .head {
  height: 125px;
  width: 100%;
  position: relative;
}
.cardMed .head .circle {
  position: absolute;
  left: 18%;
  width: 500px;
  height: 300px;
  border-radius: 50%;
  background: #42ccdb;
  bottom: 0;
}
.cardMed .head .img {
  width: 150px;
  height: 150px;
  position: absolute;
  background: #fff;
  padding: 5px;
  border-radius: 50%;
  bottom: -30%;
  left: 50%;
  transform: translate(-50%);
}
.cardMed .head .img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.cardMed .description {
  height: 200px;
  padding: 40px 20px 20px 20px;
  border-bottom: solid 1px rgba(6, 74, 76, 0.18);
  text-align: center;
}
.cardMed .description h3 {
  color: #3ab4c2;
}
.cardMed .description h4 {
  color: #42ccdb;
}
.cardMed .description p {
  margin-top: 20px;
  font-size: 15px;
}
.cardMed .contact {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardMed .contact a {
  text-decoration: none;
  color: #fff;
  background: #42ccdb;
  padding: 5px 20px;
  border-radius: 5px;
  transition: 0.3s;
}
.cardMed .contact a:hover {
  background: #2f919c;
}
*/</style>