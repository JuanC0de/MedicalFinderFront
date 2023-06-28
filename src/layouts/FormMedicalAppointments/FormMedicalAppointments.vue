<script>
import ServiceMedicalAppointments from "@/views/Find/MedicalAppointments/ServiceMedicalAppointments"
import swal from "sweetalert";
import moment from 'moment';
export default {
  data: () => ({
    form: false,
    loading: false,
    reason: null,
    queryType: null,
    date: null,
    hour: "11:00:00",
    IdEspecialista: "0",
    IdMedico: "3",
    stage: "Pendiente",
    IdPaciente: "7"
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


      let response = await ServiceMedicalAppointments.insertarCita(
        this.date,
        this.reason,
        this.hour,
        this.queryType,
        this.IdEspecialista,
        this.IdMedico,
        this.stage,
        this.IdPaciente
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
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan" type="submit"> 11:00 </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan" type="submit"> 12:00 </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan" type="submit"> 13:00 </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn class="me-4 mt-3 horabtn" color="DarkCyan" type="submit"> 14:00 </v-btn>
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
</style>
