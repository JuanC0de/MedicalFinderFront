<script>
import { useField, useForm } from "vee-validate";
import AccordionCities from "@/components/AccordionCities/AccordionCities.vue";

export default {
  data: () => ({
    show2: false,
    password: "Password",
    rules: [
      (value) => !!value || "Requerido",
      (value) =>
        (value && value.length >= 3) ||
        "Debe escribir un mensaje de minimo 3 caracteres.",
    ],
    // rules: {
    //     required: value => !!value || 'Requerido.',
    //     min: v => v.length >= 8 || 'Mínimo 8 caracteres',
    //     emailMatch: () => (`El correo electrónico y la contraseña introducidos no coinciden`),
    //   },
  }),

  components: {
    AccordionCities,
  },

  setup() {
    const { handleSubmit } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;

          return "El nombre ingresado necesita más de 2 caracteres.";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

          return "Debe ser un correo electrónico válido.";
        },
        phone(value) {
          if (value?.length==10){
           return true;
          }
          else{
            return "Debe ser un número de celular válido.";
          }
        }
      },
    });
    const name = useField("name");
    const email = useField("email");
    const phone = useField("phone");

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return { name, email, phone, submit };
  },
};
</script>

<template>
  <v-text align-center justify-center>Registrate como paciente</v-text>
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
          <v-text-field type="date" label="Fecha de nacimiento"> </v-text-field>
          
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="phone.value.value"
            :error-messages="phone.errorMessage.value"
            label="Celular"
            type="number"
          ></v-text-field>
        </v-col>

        <AccordionCities />

        <v-col cols="12" sm="6">
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Contraseña"
            hint="Al menos 8 caracteres"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
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
    </v-container>
  </v-form>
</template>