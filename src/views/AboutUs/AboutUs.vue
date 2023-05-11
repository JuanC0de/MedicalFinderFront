<script>
import MissionComponent from '@/layouts/MissionComponent/MissionComponent.vue';
import VisionComponent from '@/layouts/VisionComponent/VisionComponent.vue';
// import CircularImageCard from '@/layouts/CircularImageCard/CircularImageCard.vue';
import CardAboutUs from '@/layouts/CardAboutUs/CardAboutUs.vue'
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'Aboutus',
  components: {
    MissionComponent,
    VisionComponent,
    CardAboutUs,
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
    <!-- <v-container align = "center">
      <v-row>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              :img="imageJuanAndres"
              title="Juan Andrés Bolaño Ospina"
              subtitle="Scrum Master"
              textCard="Facilita el proceso de Scrum y elimina obstáculos para el equipo."
            />
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              :img="imageKarelysVanessa"
              title="Karelys Vanessa Silva Quitian"
              subtitle="Product Owner"
              textCard="Define los requisitos del producto y prioriza el trabajo del equipo."
            />
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              :img="imageJuanJose" 
              title="Juan Jose Rojas Guaneme"
              subtitle="Equipo de Desarrollo"
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container align = "center">
      <v-row>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              :img="imageLuisaFernanda"    
              title="Luisa Fernanda Castiblanco"
              subtitle="Equipo de Desarrollo" 
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."           
            />
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              :img="imageJoseLuis"  
              title="Jose Luis Ordoñez Calderón "
              subtitle="Equipo de Desarrollo" 
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."           
            />
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              :img="imageMariaJose" 
              title="Maria Jose Paz García"
              subtitle="Equipo de Desarrollo" 
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."                  
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container> -->
  
    <v-container align = "center">
      <v-row>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <CardAboutUs
              :image-url="imageJuanAndres"
              title="Juan Andrés Bolaño Ospina"
              subtitle="Scrum Master"
              textCard="Facilita el proceso de Scrum y elimina obstáculos para el equipo."
            />
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <CardAboutUs
              :imgCard="imageKarelysVanessa"
              title="Karelys Vanessa Silva Quitian"
              subtitle="Product Owner"
              textCard="Define los requisitos del producto y prioriza el trabajo del equipo."
            />
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <CardAboutUs
              :imgCard="imageJuanJose"
              title="Juan Jose Rojas Guaneme"
              subtitle="Equipo de Desarrollo"
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container align = "center">
      <v-row>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <CardAboutUs
              :imgCard="imageLuisaFernanda"
              title="Luisa Fernanda Castiblanco"
              subtitle="Equipo de Desarrollo" 
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."
            />
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <CardAboutUs
              :imgCard="imageJoseLuis"
              title="Jose Luis Ordoñez Calderón "
              subtitle="Equipo de Desarrollo" 
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum."
            />
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <CardAboutUs
              :imgCard="imageMariaJose"
              title="Maria Jose Paz García"
              subtitle="Equipo de Desarrollo" 
              textCard="Construye el producto de acuerdo con los requisitos del Product Owner y el proceso de Scrum." 
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>    
  <FooterComponent/>  
</template>

<style>
@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 1800px !important;
  }
}
</style>