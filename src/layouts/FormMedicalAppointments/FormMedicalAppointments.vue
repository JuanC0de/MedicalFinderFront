<script>
import ServiceMedicalAppointments from "@/views/Find/MedicalAppointments/ServiceMedicalAppointments"
import { useField } from "vee-validate";
import moment from 'moment';
export default {
  data: () => ({
    fecha: '',
    fechaInvalida: false,
    hora: "",
    rules: [
      value => !!value || 'Requerido',
      value => (value && value.length >= 3) || 'Debe escribir un mensaje de minimo 3 caracteres.',
    ],
  }),
  setup() {
    const fecha = useField("fecha");
    const motivo = useField("motivo");
    const hora = useField("hora");

    return {
      fecha,
      motivo,
      hora
    };
  },
  methods: {
    validarFecha() {
      const fechaIngresada = moment(this.fecha, 'YYYY-MM-DD');
      const fechaActual = moment();

      if (fechaIngresada.isValid() && fechaIngresada.isAfter(fechaActual, 'day')) {
        this.fechaInvalida = false;
      } else {
        this.fechaInvalida = true;
      }
    },
    async insertarCitaNueva() {
      console.log("Entre a la funcion");
      console.log("fecha", this.fecha.value.value);
      console.log("motivo", this.motivo.value.value);
      console.log("hora", this.hora.value.value);

      let response = await ServiceDoctor.insertarCita(
        this.fecha.value.value,
        this.motivo.value.value,
        this.hora.value.value,
        "presencial",
        "primero",
        3
      );
      console.log("Esta es la respuesta deploy: Medico", response);
      if (response.status == 201) {
        console.log("YA AGREGAMOSSSS");
      } else {
        console.log("Ocurrió un error", response);
      }
    },
  },
};
</script>
<template>
  <v-container class="text-center title-lg">
    <h2>Agenda tu cita!</h2>
    <v-form>
      <v-select class="mt-5" label="Tipo de consulta" :items="['Presencial', 'Virtual']"></v-select>
      <v-textarea class="mb-5" label="Motivo de la cita" :rules="rules" hide-details="auto"></v-textarea>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field type="date" v-model="fecha" @input="validarFecha"></v-text-field>
          <p v-if="fechaInvalida">La fecha ingresada es inválida o anterior a la fecha actual.</p>
          <p v-else>La fecha ingresada es válida.</p>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="hora" type="time" label="Hora"></v-text-field>
        </v-col>
      </v-row>


      <v-btn class="me-4 mt-3 sizebtn" color="SecondaryCyan" type="submit">
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

.sizebtn {
  width: 200px;
}
</style>
