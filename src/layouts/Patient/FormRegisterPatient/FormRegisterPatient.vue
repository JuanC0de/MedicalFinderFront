<script>
  import { useField, useForm } from 'vee-validate'

  export default {
      data: () => ({

      rules: [
        value => !!value || 'Requerido',
        value => (value && value.length >= 3) || 'Debe escribir un mensaje de minimo 3 caracteres.',
      ],
    }),
    setup () {
      const { handleSubmit } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'El nombre ingresado necesita más de 2 caracteres.'
          },
          lastName (value) {
            if (value?.length >= 2) return true

            return 'El apellido ingresado necesita más de 2 caracteres'
          },
          email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Debe ser un correo electrónico válido.'
          },
        },
      })
      const name = useField('name')
      const lastName = useField('lastName')
      const email = useField('email')

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, lastName, email, submit }
    },
  }
</script>

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Nombre"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="lastName.value.value"
          :counter="7"
          :error-messages="lastName.errorMessage.value"
          label="Apellido"
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

        <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Fecha nacimiento"
        ></v-text-field> 
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          label="Direccion"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          label="Ciudad"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          label="Ciudad"
        ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          label="Ciudad"
        ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>