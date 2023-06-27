<script>
import ServiceDoctor from "@/views/Register/Doctor/ServiceDoctor.js";
import swal from "sweetalert";
import router from "@/router";

export default {
  created() {
    this.cargarEspecialidades();
    this.cargarCiudades();
  },
  data: () => ({
    form: false,
    loading: false,
    checkbox: false,
    name: null,
    identificationDocument: null,
    professionalCardNumber: null,
    phone: null,
    email: null,
    address: null,
    ciudades: [],
    especialidades: [],
    speciality: null,
    city: null,
    state: true
  }),
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)

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
    identificationValid(value) {
      if (value?.length >= 8) {
        return true;
      } else {
        return "Debe ser un documento de identificación válido.";
      }
    },
    profesionalCardValid(value) {
      if (value?.length == 10) {
        return true;
      } else {
        return "Debe ser un número de tarjeta profesional válido.";
      }
    },
    phoneValid(value) {
      if (value?.length == 10) {
        return true;
      } else {
        return "Debe ser un número de celular válido.";
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
    addressValid(value) {
      if (value?.length >= 10) return true;

      return "La dirección ingresada necesita más de 10 caracteres";
    },
    async cargarEspecialidades() {
      let response = await ServiceDoctor.consultarListaEspecialidades();
      console.log("Esta es la respuesta deploy:", response);
      if (response.length > 0) {
        this.especialidades = response.map(objeto => objeto.especialidad);
        console.log("Estas son las especialidades", this.especialidades);
      } else {
        swal({
          title: "Ocurrió un error",
          text: response,
          button: "Aceptar",
        }).then(() => {
          console.log("Ocurrió un error", response);
        });
      }
    },
    async cargarCiudades() {
      let response = await ServiceDoctor.consultarListaCiudades();
      console.log("Esta es la respuesta deploy - ciudad:", response);
      if (response.length > 0) {
        this.ciudades = response.map(objeto => objeto.city)
        console.log("Estas son las ciudades", this.ciudades);
      }
      else {
        swal({
          title: "Ocurrió un error",
          text: response,
          button: "Aceptar",
        }).then(() => {
          console.log("Ocurrió un error", response);
        });
      }
    },
    async insertarMedicoNuevo() {
      console.log("Entre a la funcion");

      console.log("name", this.name);
      console.log("professionalCardNumber", this.professionalCardNumber);
      console.log("identificationDocument", this.identificationDocument);
      console.log("email", this.email);
      console.log("phone", this.phone);
      console.log("city", this.city);
      console.log("speciality", this.speciality);
      console.log("address", this.address);

      let response = await ServiceDoctor.insertarMedico(
        this.name,
        this.professionalCardNumber,
        this.identificationDocument,
        this.email,
        this.phone,
        this.city,
        this.speciality,
        this.address,
        this.state
      );

      console.log("Esta es la respuesta deploy: Medico", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
        swal({
          title: "Tu solicitud de registro ha sido enviada exitosamente",
          text: "Al correo se te informará la respuesta a tu solicitud",
          button: "Aceptar",
        }).then(() => {
          this.$refs.formPatient.reset(); // Reiniciar el formulario
          //redireccion a inicio sesion
          router.push("/");
        });
        //Mostrar el inicio de sesiòn y una alerta
        //Sweetalert
      } else {
        swal({
          title: "Ocurrió un error",
          text: response,
          button: "Aceptar",
        }).then(() => {
          console.log("Ocurrió un error", response);
        });
      }
    },
  },
};
</script>

<template>
  <h2 align-center justify-center class="title-lg">
    Pre-inscríbete como médico
  </h2>
  <v-form ref="formPatient" v-model="form" @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="name" :readonly="loading" :rules="[required, nameValid]" clearable
            label="Nombre Completo"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-autocomplete v-model="speciality" :readonly="loading" :rules="[required]" clearable
            :items="this.especialidades" label="Especialidades" persistent-hint>
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="identificationDocument" :readonly="loading" :rules="[required, identificationValid]"
            clearable label="Documento de identificación" type="number"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="professionalCardNumber" :readonly="loading" :rules="[required, profesionalCardValid]"
            clearable label="Número de tarjeta profesional" type="number"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="phone" :readonly="loading" :rules="[required, phoneValid]" clearable
            label="Número de contacto" type="number"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="email" :readonly="loading" :rules="[required, emailValid]" clearable
            label="Correo electrónico"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-autocomplete v-model="city" :readonly="loading" :rules="[required]" clearable :items="this.ciudades"
            label="Ciudades" persistent-hint>
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="address" :readonly="loading" :rules="[required, addressValid]" clearable
            label="Direccion de consultorio"></v-text-field>
        </v-col>
      </v-row>

      <v-checkbox v-model="checkbox" :rules="[required]" :readonly="loading" clearable
        label="He leído y acepto la Politica de privacidad y los terminos y condiciones" required></v-checkbox>

      <v-btn :disabled="!form" :loading="loading" class="mt-2 sizebtn" color="SecondaryCyan" type="submit"
        @click="insertarMedicoNuevo()">Enviar</v-btn>
    </v-container>
  </v-form>
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