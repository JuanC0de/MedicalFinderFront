<script>
  export default {
    data: () => ({
      valid: true,
      checkbox: false,
    }),
  }
</script>

<template>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Para continuar debes aceptar']"
        label="He leído y acepto la Politica de privacidad y los terminos y condiciones"
        required
      ></v-checkbox>
      <v-btn type="submit" width="20" class="mt-2" color="SecondaryCyan">Enviar</v-btn>
</template>