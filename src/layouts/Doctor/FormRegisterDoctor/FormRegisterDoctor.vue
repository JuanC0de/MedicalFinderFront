<script>
import { useField, useForm } from "vee-validate";
import ServiceDoctor from "@/views/Register/Doctor/ServiceDoctor.js";
import swal from "sweetalert";
import router from "@/router";

export default {
  data: () => ({
    valid: true,
    checkbox: false,
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
    },
    IdCiudad: "",
    IdEspecialidad: "",
    ciudades: [],
    especialidades: [],
  }),

  setup() {
    const { handleSubmit } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;

          return "El nombre ingresado necesita más de 2 caracteres.";
        },
        speciality(value) {
          if (value?.length >= 5) return true;

          return "La especialidad ingresado necesita más de 5 caracteres";
        },
        address(value) {
          if (value?.length >= 10) return true;

          return "La dirección ingresada necesita más de 10 caracteres";
        },
        email(value) {
          if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))
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
        professionalCardNumber(value) {
          if (value?.length == 10) {
            return true;
          } else {
            return "Debe ser un número de tarjeta profesional válido.";
          }
        },
      },
    });

    const name = useField("name");
    const speciality = useField("speciality");
    const email = useField("email");
    const phone = useField("phone");
    const identificationDocument = useField("identificationDocument");
    const professionalCardNumber = useField("professionalCardNumber");
    const address = useField("address");
    const city = useField("city");

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return {
      name,
      speciality,
      email,
      submit,
      phone,
      identificationDocument,
      professionalCardNumber,
      address,
      city
    };
  },
  /********* Ciclo de vida *********/
  async created() {
    await this.cargarEspecialidades();
    await this.cargarCiudades();
  },
  methods: {
    async cargarEspecialidades() {
      let response = await ServiceDoctor.consultarListaEspecialidades();
      console.log("Esta es la respuesta deploy:", response);
      if (response.length > 0) {
        this.especialidades = response.map(objeto => objeto.especialidad);
        console.log("Estas son las especialidades", this.especialidades);
      } else {
        console.log("Ocurrió un error", response);
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
        console.log("Ocurrió un error", response)
      }
    },
    async insertarMedicoNuevo() {
      console.log("Entre a la funcion");
      console.log(
        "identificationDocument",
        this.identificationDocument.value.value
      );
      console.log("name", this.name.value.value);
      console.log("phone", this.phone.value.value);
      console.log("email", this.email.value.value);
      console.log("professionalCardNumber", this.professionalCardNumber.value.value);
      // console.log("city", this.IdCiudad.value.value);
      // console.log("speciality",this.speciality.value.value);
      // console.log("address",this.address.value.value);

      let response = await ServiceDoctor.insertarMedico(
        this.identificationDocument.value.value,
        this.name.value.value,
        this.phone.value.value,
        this.email.value.value,
        this.professionalCardNumber.value.value,
        "bogota",
        "primer"
      );

      console.log("Esta es la respuesta deploy: Medico", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
        swal({
          title: "Tu solicitud de registro ha sido enviada exitosamente",
          text: "Al correo se te informará la respuesta a tu solicitud",
          button: "Aceptar",
        }).then(() => {
          //redireccion a inicio sesion
          router.push("/");
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
  <h2 align-center justify-center class="title-lg">
    Pre-inscríbete como médico
  </h2>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="name.value.value" :counter="40" :error-messages="name.errorMessage.value"
            label="Nombre Completo"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-autocomplete v-model="this.IdEspecialidad" :items="this.especialidades" label="Especialidades"
            persistent-hint>
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="identificationDocument.value.value"
            :error-messages="identificationDocument.errorMessage.value" label="Documento de identificacion"
            type="number"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="professionalCardNumber.value.value"
            :error-messages="professionalCardNumber.errorMessage.value" label="Número de tarjeta profesional"
            type="number"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="phone.value.value" :error-messages="phone.errorMessage.value" label="Número de contacto"
            type="number"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
            label="Correo electrónico"></v-text-field>
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
          <v-text-field v-model="address.value.value" :error-messages="address.errorMessage.value"
            label="Direccion de consultorio"></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'Para continuar debes aceptar']"
        label="He leído y acepto la Politica de privacidad y los terminos y condiciones" required></v-checkbox>
      <v-btn class="mt-2 sizebtn" color="SecondaryCyan" @click="insertarMedicoNuevo()">Enviar</v-btn>
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