<script>
import FormLogin from "../../layouts/FormLogin/FormLogin.vue";
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FormLogin,
    Navbar,
    FooterComponent,
  },
};
</script>

<template>
    <Navbar/>
  <div class="my-view">
    <FormLogin />
  </div>
  <FooterComponent/>
</template>

<style>
.my-view {
  background-image: url("@/assets/images/pacienteMedico.png");
  background-size: cover;
  background-position: relative;
  min-height: 100vh;
  margin: 30px;
}
</style>