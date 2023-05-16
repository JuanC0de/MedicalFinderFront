<script>
import MissionComponent from '@/layouts/MissionComponent/MissionComponent.vue';
import VisionComponent from '@/layouts/VisionComponent/VisionComponent.vue';
// import CircularImageCard from '@/layouts/CircularImageCard/CircularImageCard.vue';
// import CardAboutUs from '@/layouts/CardAboutUs/CardAboutUs.vue'
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: 'Aboutus',
  components: {
    MissionComponent,
    VisionComponent,
    Navbar,
    FooterComponent
  },
  data() {
    return {
      imageJuanAndres: '@/assets/images/imgWorkingGroup/JuanAndres.jpg',
      imageJuanJose: '@/assets/images/imgWorkingGroup/JuanJose.jpg',
      imageJoseLuis: '@/assets/images/imgWorkingGroup/JoseLuis.jpg',
      imageLuisaFernanda: '@/assets/images/imgWorkingGroup/Luisa.jpg',
      imageKarelysVanessa: '@/assets/images/imgWorkingGroup/Vanessa.jpg',
      imageMariaJose: '@/assets/images/imgWorkingGroup/Majo.jpg'
    }
  }
}
</script>


<template>
  <Navbar/>
    <MissionComponent
        title="Misión"
        text="Somos una empresa la cual ayuda a los ciudadanos a tener un mejor servicio de salud, en calidad y compromiso. Esta empresa genera elementos los cuales hacen la labor de facilitar a las personas conseguir sus medicamentos y tratamientos a un costo más bajo y barato, esperamos tener el dominio comenzando por el departamento y posteriormente a nivel nacional. Nuestro objetivo principal siempre será ofrecerles a todos nuestros clientes la posibilidad de acceder a servicios con un tiempo de respuesta mucho mas corto, menor precio y con una atención totalmente profesional. Además de esto buscaremos crear una comunidad estable y eficiente afiliando expertos y especialistas que brinden un apoyo constante tanto presencial como a distancia."
    />
    <VisionComponent
        title="Visión"
        text="Pretendemos ayudar y Satisfacer de manera eficaz y eficiente las necesidades del cuidado, mejorando cada vez más en diferentes aspectos como la atención que tenga el ciudadano y el ambiente dentro de nuestro sistema, también queremos llegar inicialmente a todo el territorio de nuestro país, y así, esparcirnos a nivel mundial."
    />
    <v-container align = "center"> 
      <v-row>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <v-card class="card">
              <v-avatar size=80 class="align-center">
                <img
                  class="imgIconoCard"
                  src="@/assets/images/imgWorkingGroup/JuanAndres.jpg"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                  <v-card-title>
                    Juan Andrés Bolaño Ospina
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <p>Scrum Master</p>
                    <p class="mt-2">Facilita el proceso de Scrum y elimina obstáculos para el equipo.</p>
                  </v-card-text>
              </v-container>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <v-card class="card">
              <v-avatar size=80 class="align-center">
                <img
                  class="imgIconoCard"
                  src="@/assets/images/imgWorkingGroup/Vanessa.jpg"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                  <v-card-title>
                    Karelys Vanessa Silva Quitian
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <p>Product Owner</p>
                    <p class="mt-2">Define los requisitos del producto y prioriza el trabajo del equipo.</p>
                  </v-card-text>
              </v-container>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <v-card>
              <v-avatar>
                <img
                  class="imgIconoCard"
                  src="@/assets/images/imgWorkingGroup/JuanJose.jpg"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                  <v-card-title>
                    Juan Jose Rojas Guaneme
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <p>Equipo de Desarrollo</p>
                    <p class="mt-2">Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum.</p>
                  </v-card-text>
              </v-container>
            </v-card> 
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container align = "center"> 
      <v-row>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <v-card class="card">
              <v-avatar size=80 class="align-center">
                <img  
                  class="imgIconoCard"
                  src="@/assets/images/imgWorkingGroup/Luisa.jpg"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                  <v-card-title>
                    Luisa Fernanda Castiblanco
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <p>Equipo de Desarrollo</p>
                    <p class="mt-2">Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum.</p>
                  </v-card-text>
              </v-container>
            </v-card> 
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <v-card class="card">
              <v-avatar size=80 class="align-center">
                <img
                  class="imgIconoCard"
                  src="@/assets/images/imgWorkingGroup/JoseLuis.jpg"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                  <v-card-title>
                    Jose Luis Ordoñez Calderón
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <p>Equipo de Desarrollo</P>
                    <p class="mt-2">Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum.</p>
                  </v-card-text>
              </v-container>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <v-card>
              <v-avatar>
                <img
                  class="imgIconoCard"
                  src="@/assets/images/imgWorkingGroup/Majo.jpg"
                  alt="icono-grupo"
                />
              </v-avatar>
              <v-container>
                  <v-card-title>
                    Maria Jose Paz García
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <p>Equipo de Desarrollo</p>
                    <p class="mt-2">Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum.</p>
                  </v-card-text>
              </v-container>
            </v-card> 
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  <FooterComponent/>  
</template>

<style>
.imgIconoCard{
  background-size: cover;
  background-position: relative;
  width: 100px;
}
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

@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}
</style>