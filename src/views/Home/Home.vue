<template>
  <nav class="menu">
    <div class="menu-logo">
      <router-link to="/">
        <img src="/assets/logo.png" alt="Logo de la empresa">
      </router-link>
    </div>
    <ul class="menu-options">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/acerca-de-nosotros">Acerca de nosotros</router-link></li>
      <li><router-link to="/soporte">Soporte</router-link></li>
    </ul>
    <div class="menu-buttons">
      <router-link to="/registrarse" class="btn">Registrarse</router-link>
      <router-link to="/iniciar-sesion" class="btn btn-primary">Iniciar sesión</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  // Aquí puedes agregar la lógica que necesites para el menú
  
  name: 'HomeView',
  props: {
    msg: String
  },
  data: () => ({

    }
),
}
</script>

<style>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.menu-logo img {
  height: 50px;
}

.menu-options {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-options li {
  margin-right: 10px;
}

.menu-options li a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}

.menu-options li a:hover {
  background-color: #f2f2f2;
}

.menu-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-buttons .btn {
  margin-right: 10px;
  color: #fff;
  background-color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.menu-buttons .btn:hover {
  background-color: #666;
}

.menu-buttons .btn-primary {
  background-color: #007bff;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }
  
  .menu-options {
    margin-top: 10px;
  }
  
  .menu-options li {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .menu-buttons {
    margin-top: 10px;
  }
}
</style>




