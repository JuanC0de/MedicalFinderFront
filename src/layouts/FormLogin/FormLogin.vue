<script>
import { useField, useForm } from 'vee-validate'

export default {
  data() {
    return {
      show2: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Requerido.',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        emailMatch: () => (`El correo electrónico y la contraseña introducidos no coinciden`),
      },
    }
  },
  setup() {
    const { handleSubmit } = useForm({
      validationSchema: {
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Debe ser un correo electrónico válido.'
        },
      },
    })
    const email = useField('email')

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })

    return { email, submit }
  },
}
</script>

<template>
  <v-card class="bg-white">
    <v-container>
      <!-- Fila -->
      <v-row>
        <!-- Primera columna pc col6 tablet col6 movil 12 -->
        <v-col cols="6">
          <v-card class="formContainer pa-5 elevation-20">
            <h2 class="title-lg">Iniciar Sesión</h2>
            <form @submit.prevent="submit">
              <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                label="Correo electrónico"></v-text-field>

              <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'" name="input-10-2" label="Contraseña" hint="Al menos 8 caracteres"
                class="input-group--focused" @click:append="show2 = !show2"></v-text-field>

              <v-container>
                <v-row justify="center">
                  <v-col>
                    <v-text>
                      <a href="#" class="ColorAncla">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </v-text>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col>
                    <v-btn type="submit" variant="outlined" color="PrincipalCyan" block class="mt-2">
                      Enviar
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col>
                    <v-text>
                      ¿No tiene una cuenta?
                      <a href="#" class="ColorAncla">Cree una.</a>
                    </v-text>
                  </v-col>
                </v-row>
              </v-container>
            </form>
          </v-card>
        </v-col>
        <!-- Segunda Columna col6 tablet col6 movil 12 -->
        <v-col cols="6">
          <img class="Img_Log  elevation-20 " src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg">
        </v-col>
        <!-- Fin de la segunda columna -->
      </v-row>
      <!-- Fin de la fila -->
    </v-container>
  </v-card>
</template>

<style>
.ColorAncla {
  color: inherit;
  color: DarkCyan;
}

.formContainer {
  /* margin: 5cm 8cm 2cm 4cm; */
}

.title-lg {
  font-size: 30px;
  /* Cambiar el tamaño de letra */
}

.Img_Log {
  display: flex;
  /* width: 100%; */
  height: 900px;
  margin: 1px;
  padding: 5px;
  border-radius: 4%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: rgba(202, 207, 210);
}
</style>
