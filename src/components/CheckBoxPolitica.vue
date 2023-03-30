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
</template>