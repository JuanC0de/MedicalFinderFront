<script>
import ServiceMedicalAppointments from "@/views/Find/MedicalAppointments/ServiceMedicalAppointments"
import swal from "sweetalert";
import moment from 'moment';
import ServiceLogin from './ServiceLogin'
import ServiceMedicalFinder from '../../views/Find/ServiceMedicalFinder'
export default {
  data: () => ({
    form: false,
    loading: false,
    reason: null,
    queryType: null,
    date: null,
    hour: "11:00:00",
    especialista:{},
    guidEspecialista:'',
    IdEspecialista: 0,
    IdMedico: 0,
    stage: "Pendiente",
    IdPaciente: "7",
    email: null,
    selectedHour: null,
    show2: false,
    password: '',
    rules: {
      required: value => !!value || 'Requerido.',
      min: v => v.length >= 8 || 'Mínimo 8 caracteres'
    },
  }),
  async created() {
    await this.consultarEspecialista();
    this.guidEspecialista = this.$route.query.guidEspecialista || '';
  },
  methods: {
    async consultarEspecialista() {
      let response = await ServiceMedicalFinder.consultarEspecialistas();
      this.guidEspecialista = this.$route.query.guidEspecialista || '';
      console.log("Esta es la respuesta especialistas:", response);
      if (response.length > 0) {
        this.especialista = response.filter((e)=> e.guidEspecialista==this.guidEspecialista)
        // this.IdMedico = this.especialista.IdMedico;
        this.IdMedico = 3;
        console.log("Estes es el id especialista", this.especialista);
      } else {
        console.log("Ocurrió un error buscando al especialista", response);
      }
      console.log('valores de url',this.CiudadSeleccionada,'-',this.EspecialidadSeleccionada)
    },
    onSubmit() {
      if (!this.form) return;

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)

    },
    required(v) {
      return !!v || 'Este campo es requerido'
    },
    reasonValid(value) {
      if (value?.length >= 10) {
        return true;
      } else {
        return 'El motivo ingresado necesita más de 10 caracteres.';
      }
    },
    dateValid() {
      const fechaIngresada = moment(this.date, 'YYYY-MM-DD');
      const fechaActual = moment();

      if (fechaIngresada.isValid() && fechaIngresada.isAfter(fechaActual, 'day')) {
        this.fechaInvalida = false;
      } else {
        this.fechaInvalida = true;
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

    async insertarCitaNueva() {
      console.log("Entre a la funcion");
      console.log("fecha", this.date);
      console.log("motivo", this.reason);
      console.log("hora", this.hour);
      console.log("tipo de consulta", this.queryType);
      console.log("id especialista", this.IdEspecialista);
      console.log("id medico", this.IdMedico);
      console.log("estado", this.stage);
      console.log("id paciente", this.IdPaciente);
      let loginResponse = await ServiceLogin.login(this.email,this.password);
      if (loginResponse.token != undefined) {
        let responsePacientes = await ServiceMedicalAppointments.consultarListaPacientes()
        let paciente = responsePacientes.filter((paciente) => {
          return paciente.correoPac == this.email
        })
        let response = await ServiceMedicalAppointments.insertarCita(
        this.date,
        this.reason,
        this.hour,
        this.queryType,
        this.IdMedico,
        this.stage,
        paciente.IdPaciente
      );
      console.log("Esta es la respuesta deploy: Medico", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
        swal({
          title: "Tu cita ha sido agendada correctamente",
          text: "Gracias por utilizar Medical Finder",
          button: "Aceptar",
        }).then(() => {
          this.$refs.formMedicalAppointments.reset(); // Reiniciar el formulario
          //redireccion a inicio sesion
          this.$router.push('/');
        });
      } else {
        swal({
          title: "Ocurrió un error",
          text: response,
          button: "Aceptar",
        }).then(() => {
          console.log("Ocurrió un error", response);
        });
      }
      }
      else{
        swal({
          title: "Login denegado",
          text: 'Credenciales incorrectas',
          button: "Aceptar",
        }).then(() => {
          console.log("Ocurrió un error");
        });
      }
    },
  },
};
</script>
<template>
  <v-container class="text-center title-lg">
    <h2>Agenda tu cita!</h2>
    <v-form ref="formMedicalAppointments" v-model="form" @submit.prevent="onSubmit">

      <v-select v-model="queryType" :readonly="loading" :rules="[required]" clearable class="mt-5"
        label="Tipo de consulta" :items="['Presencial', 'Virtual']"></v-select>

      <v-textarea v-model="reason" :readonly="loading" :rules="[required, reasonValid]" clearable class="mb-5"
        label="Motivo de la cita" hide-details="auto"></v-textarea>

      <v-text-field type="date" v-model="date" :rules="[required, dateValid]"></v-text-field>
      <p class="errorText" v-if="fechaInvalida">La fecha ingresada es inválida o anterior a la fecha actual.</p>

      <v-row>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan" 
          :class="{ 'hora-seleccionada': selectedHour === '11:00:00' }"
          @click="selectedHour = '11:00:00'"
          type="submit"> 11:00 </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan"
          :class="{ 'hora-seleccionada': selectedHour === '12:00:00' }"
          @click="selectedHour = '12:00:00'"
          type="submit"> 12:00 </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan"
          :class="{ 'hora-seleccionada': selectedHour === '13:00:00' }"
          @click="selectedHour = '13:00:00'"
          type="submit"> 13:00 </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan"
          :class="{ 'hora-seleccionada': selectedHour === '14:00:00' }"
          @click="selectedHour = '14:00:00'"
          type="submit"> 14:00 </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="email" :readonly="loading" :rules="[required, emailValid]" clearable
          label="Ingresar Usuario"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="password" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" clearable
          :type="show2 ? 'text' : 'password'" name="input-10-2" label="Contraseña" hint="Al menos 8 caracteres"
          class="input-group--focused" @click:append="show2 = !show2"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="7">
          <p class="textoBtn">Si no tiene cuenta, haz click en el siguiente botón </p>
        </v-col>
        <v-col cols="12" sm="5">
          <v-btn to="/registro/paciente">Registrarse</v-btn>
        </v-col>
      </v-row>

      <v-btn :disabled="!form" :loading="loading" class="me-4 mt-10 agendarbtn" color="SecondaryCyan" type="submit"
        @click="insertarCitaNueva()">
        Agendar
      </v-btn>
    </v-form>
  </v-container>
</template>

<style>
.textoBtn{
  font-size: 18px;
}
.title-lg {
  font-size: 30px;
  /* Cambiar el tamaño de letra */
}

.agendarbtn {
  width: 200px;
}

.errorText {
  color: red;
  font-size: 15px;
}
.hora-seleccionada {
  background-color: rgb(45, 112, 199);
  color: white;
}
</style>
