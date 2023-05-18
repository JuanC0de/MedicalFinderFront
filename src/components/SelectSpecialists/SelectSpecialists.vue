<script>
// https://medicina.bogota.unal.edu.co/formacion/especialidades-medicas
  export default {
    data () {
      return {
        model: null,
        states: [
            'Especialidad en Anestesiología y Reanimación','Especialidad en Cirugía General','Especialidad en Cirugía Pediátrica', 'Especialidad en Cirugía Plástica','Especialidad en Cuidado Intensivo Pediátrico','Especialidad en Dermatología','Especialidad en Endocrinología', 'Especialidad en Gastroenterología','Especialidad en Geriatría','Especialidad en Hematología','Especialidad en Infectología', 'Especialidad en Medicina Aeroespacial','Especialidad en Medicina del deporte','Especialidad en Medicina Física y Rehabilitación','Especialidad en Medicina Forense', 'Especialidad en Medicina Interna','Especialidad en Neumología Clínica','Especialidad en Neurocirugia','Especialidad en Neurología Clínica', 'Especialidad en Neuropediatría','Especialidad en Obstetricia y Ginecología','Especialidad en Oftalmología','Especialidad en Oncohematología Pediátrica', 'Especialidad en Ortopedia y Traumatología','Especialidad en Otorrinolaringología','Especialidad en Patología Anatómica y Clínica','Especialidad en Pediatría', 'Especialidad en Perinatología y Neonatología','Especialidad en Psiquiatría','Especialidad en Radiología e Imágenes Diagnósticas','Especialidad en Radiología Pediátrica', 'Especialidad en Reumatología','Especialidad en Urología', 
        ]
      }
    }
  }
</script>

<template>
        <v-col>     
          <v-autocomplete
            v-model="model"
            :items="states"
            label="Especialidades"
            persistent-hint
          >
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition
                mode="out-in"
              >
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>        
        </v-col>
</template>