<script>
import MissionComponent from '@/layouts/MissionComponent/MissionComponent.vue';
import VisionComponent from '@/layouts/VisionComponent/VisionComponent.vue';
import CircularImageCard from '@/layouts/CircularImageCard/CircularImageCard.vue';
import FormUser from '@/layouts/Doctor/FormUser/FormUser.vue'

//https://vuetifyjs.com/en/components/windows/  (para acomodar las card)
export default {
  components: {
    MissionComponent,
    VisionComponent,
    CircularImageCard,
    FormUser
  }
}
</script>

<template>
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
            <CircularImageCard
              imagen="@/assets/images/imgWorkingGroup/JuanAndres.jpg"
              title="Juan Andrés Bolaño Ospina"
              text="Scrum Master"
            />
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              imagen="@/assets/images/imgWorkingGroup/Vanessa.jpg"
              title="Karelys Vanessa Silva Quitian"
              text="Product Owner"
            />
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              imagen="@/assets/images/imgWorkingGroup/JuanJose.jpg"
              title="Juan Jose Rojas Guaneme"
              text="Equipo de Desarrollo"
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
              imagen="@/assets/images/imgWorkingGroup/Luisa.jpg"
              title="Luisa Fernanda Castiblanco"
              text="Equipo de Desarrollo"            
            />
          </v-sheet>
        </v-col>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              imagen="@/assets/images/imgWorkingGroup/JoseLuis.jpg"
              title="Jose Luis Ordoñez Calderón "
              text="Equipo de Desarrollo"            
            />
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <CircularImageCard
              imagen="@/assets/images/imgWorkingGroup/Majo.jpg"
              title="Maria Jose Paz García"
              text="Equipo de Desarrollo"                   
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <FormUser/>
</template>