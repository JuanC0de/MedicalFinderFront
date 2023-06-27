<script>
import ServicePatient from "@/views/Register/Patient/ServicePatient.js";
import swal from "sweetalert";
import router from "@/router";

export default {
  created() {
    this.cargarCiudades();
  },
  data: () => ({
    form: false,
    loading: false,
    show1: false,
    show2: false,
    checkbox: false,
    name: null,
    identificationDocument: null,
    email: null,
    birthdate: null,
    phone: null,
    ciudades: [],
    city: null,
    password1: "",
    password2: "",
    passwordError1: '',
    passwordError2: '',
    errorSnackbar: false,
    passwordError: '',
    snackbarColor: 'error'
  }),
  computed: {
    canSubmitForm() {
      if (this.password1 !== this.password2) {
        this.passwordError = 'Las contraseñas no coinciden';
        this.errorSnackbar = true;
      } else {
        this.passwordError = '';
      }

      return (
        this.password1 !== '' &&
        this.password2 !== '' &&
        this.passwordError === ''
      );
    },
    handleSnackbarInput(value) {
      if (!value) {
        // Snackbar se cerró, restablecer el color
        this.snackbarColor = 'error';
      }
    },
    birthdateValid() {
      return (value) => {
        if (value) {
          const fechaNacimiento = new Date(value);
          const edadMinima = 18;
          const fechaActual = new Date();
          const anioNacimiento = fechaNacimiento.getFullYear();
          const mesNacimiento = fechaNacimiento.getMonth();
          const diaNacimiento = fechaNacimiento.getDate();
          const anioActual = fechaActual.getFullYear();
          const mesActual = fechaActual.getMonth();
          const diaActual = fechaActual.getDate();
          let edad = anioActual - anioNacimiento;

          // Verificar si el mes de nacimiento es mayor al mes actual
          // o si el mes de nacimiento es igual al mes actual pero el día de nacimiento es mayor al día actual
          if (
            mesNacimiento > mesActual ||
            (mesNacimiento === mesActual && diaNacimiento > diaActual)
          ) {
            edad--;
          }

          // Verificar si la persona es mayor de edad
          if (edad < edadMinima) {
            return "Debes ser mayor de edad para ingresar.";
          }
        }
        return true;
      }
    }
  },
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
        return "Debe ser una documento de identificación válido.";
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
    phoneValid(value) {
      if (value?.length == 10) {
        return true;
      } else {
        return "Debe ser un número de celular válido.";
      }
    },
    passwordValid1() {
      if (this.password1.length < 8) {
        this.passwordError1 = 'La contraseña debe tener al menos 8 caracteres';
      } else if (!/[a-z]/.test(this.password1)) {
        this.passwordError1 = 'La contraseña debe contener al menos una letra minúscula';
      } else if (!/[A-Z]/.test(this.password1)) {
        this.passwordError1 = 'La contraseña debe contener al menos una letra mayúscula';
      } else if (!/\d/.test(this.password1)) {
        this.passwordError1 = 'La contraseña debe contener al menos un número';
      } else {
        this.passwordError1 = '';
      }
    },
    passwordValid2() {
      if (this.password2.length < 8) {
        this.passwordError2 = 'La contraseña debe tener al menos 8 caracteres';
      } else if (!/[a-z]/.test(this.password2)) {
        this.passwordError2 = 'La contraseña debe contener al menos una letra minúscula';
      } else if (!/[A-Z]/.test(this.password2)) {
        this.passwordError2 = 'La contraseña debe contener al menos una letra mayúscula';
      } else if (!/\d/.test(this.password2)) {
        this.passwordError2 = 'La contraseña debe contener al menos un número';
      } else {
        this.passwordError2 = '';
      }
    },
    async cargarCiudades() {
      let response = await ServicePatient.consultarListaCiudades();
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
    async insertarPacienteNuevo() {
      console.log("Entre a la funcion");
      console.log("identificationDocument", this.identificationDocument);
      console.log("name", this.name);
      console.log("phone", this.phone);
      console.log("email", this.email);
      console.log("city", this.city);
      console.log("fechaNacimiento", this.birthdate);
      let response = await ServicePatient.insertarPaciente(
        this.identificationDocument,
        this.name,
        this.phone,
        this.email,
        this.city,
        this.birthdate,
      );
      console.log("Esta es la respuesta deploy:", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS ");
        console.log("Datos usuario", this.email, '-', this.password1);
        let responseCreateUser = await ServicePatient.insertarUsuarioPaciente(this.email, this.password1)
        if (responseCreateUser.status == 201) {
          swal({
            title: "Has sido registrado exitosamente",
            text: "Ya puedes iniciar sesion",
            button: "Aceptar",
          }).then(() => {
            this.$refs.formPatient.reset(); // Reiniciar el formulario
            router.push("/IniciarSesion");
          });
        }
        else {
          swal({
            title: "El usuario no se ha creado",
            text: `Error: ${responseCreateUser.response.json()}, vuelva a intentarlo`,
            button: "Aceptar",
          }).then(() => {
            router.push("/IniciarSesion");
          });
        }

      } else {
        swal({
          title: "Ocurrió un error",
          text: response,
          button: "Aceptar",
        }).then(() => {
          console.log("Ocurrió un error", response);
        })
      }
    }
  },
};
</script>

<template>
  <h2 align-center justify-center class="title-lg">Registrate como paciente</h2>
  <v-form ref="formPatient" v-model="form" @submit.prevent="onSubmit">
    <v-row>

      <v-col cols="12" sm="6">
        <v-text-field v-model="name" :readonly="loading" :rules="[required, nameValid]" clearable
          label="Nombre Completo"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field v-model="identificationDocument" :readonly="loading" :rules="[required, identificationValid]"
          clearable label="Documento de identificación" type="number"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field v-model="email" :readonly="loading" :rules="[required, emailValid]" clearable
          label="Correo electrónico"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field v-model="birthdate" :readonly="loading" :rules="[required, birthdateValid]" clearable
          label="Fecha de nacimiento" type="date"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field v-model="phone" :readonly="loading" :rules="[required, phoneValid]" clearable label="Celular"
          type="number"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">

        <v-autocomplete v-model="city" :readonly="loading" :rules="[required]" :items="this.ciudades" label="Ciudad"
          persistent-hint clearable>

          <template v-slot:append-outer>
            <v-slide-x-reverse-transition mode="out-in">
            </v-slide-x-reverse-transition>
          </template>

        </v-autocomplete>

      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field v-model="password1" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :readonly="loading"
          :rules="[passwordValid1]" :error-messages="passwordError1" :type="show1 ? 'text' : 'password'" clearable
          label="Contraseña" @click:append="show1 = !show1"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <div>
        <v-text-field v-model="password2" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :readonly="loading"
          :rules="[passwordValid2]" :error-messages="passwordError2" :type="show2 ? 'text' : 'password'"
          label="Confirmar contraseña" @click:append="show2 = !show2"></v-text-field>
        <v-snackbar v-model="errorSnackbar" :color="snackbarColor" top  @input="handleSnackbarInput">
          {{ passwordError }}
        </v-snackbar>
      </div>
      </v-col>
    </v-row>

    <v-checkbox v-model="checkbox" :readonly="loading" :rules="[required]" clearable
      label="He leído y acepto la Politica de privacidad y los terminos y condiciones"></v-checkbox>

    <v-btn :disabled="!canSubmitForm || !form" :loading="loading" class="mt-2 sizebtn" color="SecondaryCyan" type="submit"
      @click="insertarPacienteNuevo()">Enviar</v-btn>
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
