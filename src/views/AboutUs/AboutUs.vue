<script>
import MissionComponent from '@/layouts/MissionComponent/MissionComponent.vue';
import VisionComponent from '@/layouts/VisionComponent/VisionComponent.vue';
import CircularImageCard from '@/layouts/CircularImageCard/CircularImageCard.vue';

//import jh from ''
//https://vuetifyjs.com/en/components/windows/  (para acomodar las card)
export default {
  components: {
    MissionComponent,
    VisionComponent,
    CircularImageCard
  }
}
</script>

<template>
    <MissionComponent
        title="Misión"
        text="Somos una empresa la cual ayuda a los ciudadanos a tener un mejor servicio de salud, en calidad y compromiso. Esta empresa genera elementos los cuales hacen la labor de facilitar a las personas conseguir sus medicamentos y tratamientos a un costo más bajo y barato, esperamos tener el dominio comenzando por el departamento y posteriormente a nivel nacional. Nuestro objetivo principal siempre será ofrecerles a todos nuestros clientes la posibilidad de acceder a servicios con un tiempo de respuesta mucho mas corto, menor precio y con una atención totalmente profesional. Además de esto buscaremos crear una comunidad estable y eficiente afiliando expertos y especialistas que brinden un apoyo constante tanto presencial como a distancia."
        image="@/assets/images/"
    />
    <VisionComponent
        title="Visión"
        text="Pretendemos ayudar y Satisfacer de manera eficaz y eficiente las necesidades del cuidado, mejorando cada vez más en diferentes aspectos como la atención que tenga el ciudadano y el ambiente dentro de nuestro sistema, también queremos llegar inicialmente a todo el territorio de nuestro país, y así, esparcirnos a nivel mundial."
        image="@/assets/images/"
    />
    <CircularImageCard
      title="Vanesa"
      text="holiiii"
      image="@/assets/images/"
    />
</template>