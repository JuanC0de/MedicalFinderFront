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
    <FormLogin />

  <FooterComponent/>
</template>

<style>
.my-view {
  background-image: url("");
  background-size: cover;
  background-position: relative;
  height: 100%;
  width: 100%;
  margin: 8px
}
</style>
