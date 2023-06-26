<script>
import ServiceSupport from "@/views/Support/ServiceSupport.js";
import swal from "sweetalert";
import router from "@/router";

export default {
  data: () => ({
    form: false,
    name: null,
    lastName: null,
    email: null,
    message: null,
    loading: false
  }),
  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)

      this.$refs.formSupport.reset(); // Reiniciar el formulario

    },
    required(v) {
      return !!v || 'Este campo es requerido'
    },
    nameValid(value) {
      if (value?.length >= 2) {
        return true;
      } else {
        return 'El nombre ingresado necesita más de 2 caracteres.';
      }
    },
    lastNameValid(value) {
      if (value?.length >= 2) {
        return true;
      } else {
        return 'El apellido ingresado necesita más de 2 caracteres';
      }
    },
    emailValid(value) {
      if (!value) {
        return 'El campo de correo electrónico es requerido.';
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return 'Debe ingresar un correo electrónico válido.';
      } else {
        return true; // El valor es un correo electrónico válido.
      }
    },
    messageValid(value) {
      if (value?.length >= 3) {
        return true;
      } else {
        return 'Debe escribir un mensaje de minimo 3 caracteres.';
      }
    },

    async insertarDatosSoporteNuevo() {
      console.log("Entre a la funcion");
      console.log("name", this.name);
      console.log("lastName", this.lastName);
      console.log("email", this.email);
      console.log("message", this.message);
      let response = await ServiceSupport.insertarDatosSoporte(
        this.name,
        this.lastName,
        this.email,
        this.message
      );
      console.log("Esta es la respuesta deploy:", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
        swal({
          title: "Gracias por tu mensaje",
          text: "El equipo de soporte leerá tu respuesta y le dará solución ",
          button: "Aceptar",
        }).then(() => {
          this.$refs.formSupport.reset(); // Reiniciar el formulario
          //redireccion a inicio sesion
          router.push("/Soporte");
          
        });
      } else {
        console.log("Ocurrió un error", response);
      }
    },
  },
};
</script>

<template>
  <v-container class="text-center title-lg">
    <h2>Soporte</h2>
    <v-form ref="formSupport" v-model="form" @submit.prevent="onSubmit" class="pa-6">
      <v-text-field v-model="name" :readonly="loading" :rules="[required, nameValid]" clearable
        label="Nombre"></v-text-field>

      <v-text-field v-model="lastName" :readonly="loading" :rules="[required, lastNameValid]" clearable
        label="Apellido"></v-text-field>

      <v-text-field v-model="email" :readonly="loading" :rules="[required, emailValid]" clearable
        label="Correo electrónico"></v-text-field>

      <v-textarea v-model="message" :readonly="loading" :rules="[required, messageValid]" clearable label="Mensaje"
        hide-details="auto"></v-textarea>


      <v-btn :disabled="!form" :loading="loading" class="me-4 mt-3 sizebtn" color="SecondaryCyan" type="submit"
        @click="insertarDatosSoporteNuevo()">
        Enviar
      </v-btn>

    </v-form>
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