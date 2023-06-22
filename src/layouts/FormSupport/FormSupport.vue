<script>
import { useField, useForm } from 'vee-validate'
import ServiceSupport from "@/views/Support/ServiceSupport.js";
import swal from "sweetalert";
import router from "@/router";

export default {
  data: () => ({
    rules: [
      value => !!value || 'Requerido',
      value => (value && value.length >= 3) || 'Debe escribir un mensaje de minimo 3 caracteres.',
    ],
  }),
  setup() {
    const { handleSubmit } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true

          return 'El nombre ingresado necesita más de 2 caracteres.'
        },
        lastName(value) {
          if (value?.length >= 2) return true

          return 'El apellido ingresado necesita más de 2 caracteres'
        },
        email(value) {
          if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) return true

          return 'Debe ser un correo electrónico válido.'
        },
      },
    })
    const name = useField('name');
    const lastName = useField('lastName');
    const email = useField('email');
    const message = useField('message');

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })

    return { name, lastName, email, submit, message }
  },
  methods: {
    async insertarDatosSoporteNuevo() {
      console.log("Entre a la funcion");
      console.log("name", this.name.value.value);
      console.log("lastName", this.lastName.value.value);
      console.log("email", this.email.value.value);
      console.log("message", this.message.value.value)
      let response = await ServiceSupport.insertarDatosSoporte(
        this.name.value.value,
        this.lastName.value.value,
        this.email.value.value,
        this.message.value.value
      );
      console.log("Esta es la respuesta deploy:", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
        swal({
          title: "Gracias por tu mensaje fue enviada con exito",
          text: "El equipo de soporte leera tu respuesta y le dara solucion ",
          button: "Aceptar",
        }).then(() => {
          //redireccion a inicio sesion
          router.push("/Soporte");
        });
        //Mostrar el inicio de sesiòn y una alerta
        //Sweetalert        
      } else {
        console.log("Ocurrió un error", response);
      }
    }
  }
}
</script>

<template>
  <v-container class="text-center title-lg">
    <h2>Soporte</h2>
    <form @submit.prevent="submit" class="pa-6">
      <v-text-field v-model="name.value.value" :counter="25" :error-messages="name.errorMessage.value"
        label="Nombre"></v-text-field>

      <v-text-field v-model="lastName.value.value" :counter="25" :error-messages="lastName.errorMessage.value"
        label="Apellido"></v-text-field>

      <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
        label="Correo electrónico"></v-text-field>

      <v-textarea v-model="message.value.value" label="Mensaje" :rules="rules" hide-details="auto"></v-textarea>


      <v-btn class="me-4 mt-3 sizebtn" color="SecondaryCyan" type="submit" @click="insertarDatosSoporteNuevo()">  
        Enviar
      </v-btn>

    </form>
  </v-container>
</template>

<style>
.title-lg {
  font-size: 30px;
  /* Cambiar el tamaño de letra */
}

.sizebtn {
  width: 200px;
}
</style>