<script>
export default {
    data: () => ({
      show1: false,
      form: false,
      email: null,
      password: null,
      loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script>

<template>
  <div class="loginContainer">
    <div>
      <!-- LOGN IN FORM by Omar Dsoky -->
      <v-form v-model="form" @submit.prevent="onSubmit" class="formContainer">
        <!--   con = Container  for items in the form-->
        <div class="formContainerInside">
          <!--     Start  header Content  -->
          <header class="headForm">
            <h2>Iniciar Sesión</h2>
            <!--     A welcome message or an explanation of the login form -->
            <p>El sistema identificará que rol cumples</p>
          </header>
          <!--     End  header Content  -->
          <br />
          <div class="field-set">
            <!--   user name Input-->
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              class="mb-2 formInput"
              clearable
              label="Email"
              color="gray"
              variant="solo"
            ></v-text-field>
            <br />

            <!--   Password Input-->
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :readonly="loading"
              :rules="[required]"
              :type="show1 ? 'text' : 'password'"
              class="mb-2 formInput"
              clearable
              label="Contraseña"
              color="gray"
              variant="solo"
              @click:append="show1 = !show1"
            ></v-text-field>
            <br />

            <!--      Forgot Password button-->
            <v-btn variant="plain" class="btnFrgPass">
              ¿Olvidaste tu contraseña?
            </v-btn>

            <!--      button LogIn -->
            <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="#46d8e8"
              size="large"
              type="submit"
              variant="elevated"
              class="btnLogin"
            >
              Acceder
            </v-btn>
          </div>

          <!--   other buttons -->
          <div class="other">
            <v-row>
              <v-col cols="12" sm="6">
                <!--     Sign Up button -->
                <v-btn class="btnRegister btnLogin">
                  Registrate como Paciente
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn class="btnRegister btnLogin">
                  Registrate como Médico
                </v-btn>
                <!--      End Other the Division -->
              </v-col>
            </v-row>
          </div>

          <!--   End Conrainer  -->
        </div>

        <!-- End Form -->
      </v-form>
    </div>
  </div>
</template>

<style>
/* Start body rules */
.loginContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #46d8e8 0%, #c6f2f7 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  /*font-family: 'Vibur', cursive; the main font
  font-family: 'Abel', sans-serif;*/
  opacity: 0.95;
  /* background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%); */
}
/* End body rules */

/* Start form  attributes */
.formContainer {
  width: 500px;
  min-height: 500px;
  height: auto;
  border-radius: 5px;
  margin: 2% auto;
  box-shadow: 0 15px 50px rgb(81, 81, 81);
  padding: 2%;
  background-image: linear-gradient(-225deg, #42ccdb 50%, #b6f5fc 50%);
}

/* form Container */
.formContainerInside {
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: space-around;
  justify-content: space-around;

  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;

  margin: 0 auto;
}

/* the header form form */
.headForm {
  margin: 2% auto 10% auto;
  text-align: center;
}

/* Login title form form */
header h2 {
  font-size: 250%;
  /*font-family: 'Playfair Display', serif; */
  color: white;
}

/*  A welcome message or an explanation of the login form */
header p {
  letter-spacing: 0.05em;
  color: white;
}

/* inputs form  */
.formInput {
  width: 350px;
  height: 50px;
}

/* focus  */
input:focus {
  transform: translateX(-2px);
  border-radius: 5px;
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */

/* input[type="text"] {min-width: 250px;} */
/* buttons  */
.btnLogin {
  margin: 7% auto;
}
/*     Sign Up button  */
.btnRegister {
  background: #46d8e8;
}
</style>
