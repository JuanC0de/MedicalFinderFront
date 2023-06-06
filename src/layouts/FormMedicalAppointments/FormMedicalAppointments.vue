<script>
export default {
  data: () => ({
    fecha: "",
    hora: "",
    rules: [
      value => !!value || 'Requerido',
      value => (value && value.length >= 3) || 'Debe escribir un mensaje de minimo 3 caracteres.',
    ],
  })
};
</script>
<template>
  <v-container class="text-center title-lg">
    <h2>Agenda tu cita!</h2>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="fecha" type="date" label="Fecha"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="hora" type="time" label="Hora"></v-text-field>
        </v-col>
      </v-row>
      <v-textarea label="Motivo de la cita" :rules="rules" hide-details="auto"></v-textarea>
      <v-select class="mt-5" label="Tipo de consulta" :items="['Presencial', 'Virtual']"></v-select>
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