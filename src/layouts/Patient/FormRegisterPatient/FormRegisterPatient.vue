<script>
import { useField, useForm } from "vee-validate";
import ServicePatient from "@/views/Register/Patient/ServicePatient.js";
import swal from "sweetalert";
import router from "@/router";

export default {
  data: () => ({
    show1: false,
    show2: false,
    valid: true,
    checkbox: false,
    password1: "",
    password2: "",
    rules: [
      (value) => !!value || "Requerido",
      (value) =>
        (value && value.length >= 3) ||
        "Debe escribir un mensaje de minimo 3 caracteres.",
    ],
    //contraseñaPaciente: "",
    FechaNacimiento: "",
    ciudades: [],
    // rules: {
    //     required: value => !!value || 'Requerido.',
    //     min: v => v.length >= 8 || 'Mínimo 8 caracteres',
    //     emailMatch: () => (`El correo electrónico y la contraseña introducidos no coinciden`),
    //   },
  }),
  setup() {
    const { handleSubmit } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;

          return "El nombre ingresado necesita más de 2 caracteres.";
        },
        email(value) {
          if (
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value
            )
          )
            return true;

          return "Debe ser un correo electrónico válido.";
        },
        phone(value) {
          if (value?.length == 10) {
            return true;
          } else {
            return "Debe ser un número de celular válido.";
          }
        },
        identificationDocument(value) {
          if (value?.length >= 8) {
            return true;
          } else {
            return "Debe ser una documento de identificación válido.";
          }
        },
      },
    });
    const name = useField("name");
    const email = useField("email");
    const phone = useField("phone");
    const identificationDocument = useField("identificationDocument");

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return { name, email, phone, identificationDocument, submit };
  },
  computed: {
    passwordsMatch() {
      return this.password1 === this.password2;
    },
    canSubmitForm() {
      return (
        this.passwordsMatch &&
        this.password1 !== "" &&
        this.password2 !== "" + "las contraseñas son diferentes"
      );
    },
  },
  /********* Ciclo de vida *********/
  async created() {
    await this.cargarCiudades();
  },  
  methods: {
    async cargarCiudades() {
      let response = await ServicePatient.consultarListaCiudades();
      console.log("Esta es la respuesta deploy - ciudad:", response);
      if (response.length > 0) {
        this.ciudades = response.map(objeto => objeto.city)
        console.log("Estas son las ciudades", this.ciudades);
      }
      else {
        console.log("Ocurrió un error", response)
      }
    },    
    async insertarPacienteNuevo() {
      console.log("Entre a la funcion");
      console.log("Ced", this.identificationDocument.value.value);
      console.log("name", this.name.value.value);
      console.log("phone", this.phone.value.value);
      console.log("email", this.email.value.value);
      console.log("FechaNacimiento", this.FechaNacimiento);
      let response = await ServicePatient.insertarPaciente(
        13,
        this.identificationDocument.value.value,
        this.name.value.value,
        this.phone.value.value,
        this.email.value.value,
        "Armenia",
        this.FechaNacimiento,
        "Armenia"
      );
      console.log("Esta es la respuesta deploy:", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
        // Ingresar api de registro login
        swal({
          title: "Has sido registrado exitosamente",
          text: "Ya puedes iniciar sesion",
          button: "Aceptar",
        }).then(() => {
          //redireccion a inicio sesion
          router.push("/IniciarSesion");
        });
        //Mostrar el inicio de sesiòn y una alerta
        //Sweetalert
      } else {
        console.log("Ocurrió un error", response);
      }
    },
  },
};
</script>

<template>
  <h2 align-center justify-center class="title-lg">Registrate como paciente</h2>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name.value.value"
            :counter="40"
            :error-messages="name.errorMessage.value"
            label="Nombre Completo"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="identificationDocument.value.value"
            :error-messages="identificationDocument.errorMessage.value"
            label="Documento de identificación"
            type="number"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="Correo electrónico"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            type="date"
            label="Fecha de nacimiento"
            v-model="this.FechaNacimiento"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="phone.value.value"
            :error-messages="phone.errorMessage.value"
            label="Celular"
            type="number"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-autocomplete v-model="this.IdCiudad" :items="this.ciudades" label="Ciudades" persistent-hint>
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="password1"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-2"
            label="Contraseña"
            hint="Al menos 8 caracteres"
            class="input-group--focused"
            :models="this.contraseñaPaciente"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirmar contraseña"
            hint="Al menos 8 caracteres"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'Para continuar debes aceptar']"
        label="He leído y acepto la Politica de privacidad y los terminos y condiciones"
        required
      ></v-checkbox>
      <v-btn
        :disabled="!canSubmitForm"
        class="mt-2 sizebtn"
        color="SecondaryCyan"
        @click="insertarPacienteNuevo()"
        >Enviar</v-btn>
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
