<script>
  import { useField, useForm } from 'vee-validate'
  import AccordionCities from '@/components/AccordionCities/AccordionCities.vue'

  export default {
    data: () => ({
      rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        },
    }),

    components: {
      AccordionCities
    },

    setup () {
      const { handleSubmit } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'El nombre ingresado necesita más de 2 caracteres.'
          },
          speciality (value) {
            if (value?.length >= 5) return true

            return 'La especialidad ingresado necesita más de 5 caracteres'
          },
          email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Debe ser un correo electrónico válido.'
          },
        },
      })
      const name = useField('name')
      const speciality = useField('speciality')
      const email = useField('email')

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, speciality, email, submit }
    },
  }
</script>

<template>
<v-text align-center justify-center>Pre-inscríbete como médico</v-text>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="name.value.value"
          :counter="20"
          :error-messages="name.errorMessage.value"
          label="Nombre Completo"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="speciality.value.value"
          :counter="20"
          :error-messages="speciality.errorMessage.value"
          label="Especialidad"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
          label="Documento de identificacion"
          type="number"
        ></v-text-field> 
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
          label="Número de tarjeta profesional"
          type="number"
        ></v-text-field> 
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          label="Numero de contacto" type="number"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Correo electrónico"
        ></v-text-field>
        </v-col>

        <AccordionCities/>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          label="Direccion de consultorio"
        ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>