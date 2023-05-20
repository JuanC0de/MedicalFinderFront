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
          address (value) {
            if (value?.length >= 10) return true

            return 'La dirección ingresada necesita más de 10 caracteres'
          },          
          email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Debe ser un correo electrónico válido.'
          },
          phone(value) {
            if (value?.length==10){
            return true;
            }
            else{
              return "Debe ser un número de celular válido.";
            }
          },
          identificationDocument (value) {
            if (value?.length==10){
            return true;
            }
            else{
              return "Debe ser una documento de identificación válido.";
            }
          },
          professionalCardNumber (value) {
            if (value?.length==10){
            return true;
            }
            else{
              return "Debe ser un número de tarjeta profesional válido.";
            }
          }                     
        },
      });

      const name = useField('name');
      const speciality = useField('speciality');
      const email = useField('email');
      const phone = useField('phone');
      const identificationDocument = useField('identificationDocument');
      const professionalCardNumber = useField('professionalCardNumber');
      const address = useField('address');

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, speciality, email, submit, phone, identificationDocument, professionalCardNumber, address}
    },
  }
</script>

<template>
<h2 align-center justify-center class="title-lg">Pre-inscríbete como médico</h2>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="name.value.value"
          :counter="40"
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
          v-model="identificationDocument.value.value"
          :error-messages="identificationDocument.errorMessage.value"
          label="Documento de identificacion"
          type="number"
        ></v-text-field> 
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
          v-model="professionalCardNumber.value.value"
          :error-messages="professionalCardNumber.errorMessage.value"         
          label="Número de tarjeta profesional"
          type="number"
        ></v-text-field> 
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="phone.value.value"
          :error-messages="phone.errorMessage.value"
          label="Número de contacto" 
          type="number"
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
          v-model="address.value.value"
          :error-messages="address.errorMessage.value"          
          label="Direccion de consultorio"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style>
  .title-lg {
    font-size: 30px; /* Cambiar el tamaño de letra */
  }
</style>