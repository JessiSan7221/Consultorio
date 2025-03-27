<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/assets/images/consultoriologo.webp" alt="IUDC Logo" />
        <div class="text">
          <h1>IUDC</h1>
          <p>Consultorio Tecnológico</p>
        </div>
      </div>
      <nav class="nav">
        <ul>
          <li><NuxtLink to="/">INICIO</NuxtLink></li>
          <li class="dropdown">
            <a href="#">SERVICIOS ▾</a>
            <ul class="dropdown-menu">
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">Desarrollo de Apps</a></li>
              <li><a href="#">Diseño Creativo</a></li>
              <li><a href="#">Soporte Técnico</a></li>
            </ul>
          </li>
          <li><NuxtLink to="/Nosotros">NOSOTROS</NuxtLink></li>

          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Nosotros from "/pages/Nosotros.vue";
import index from "/pages/index.vue";
export default {
  components: {
    Nosotros,
  },
};
</script>

<style scoped>
.header {
  background-color: #0a0a0a;
  color: white;
  padding: 10px 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  margin-right: 10px;
}

.text h1 {
  font-size: 20px;
  margin: 0;
}

.text p {
  font-size: 14px;
  margin: 0;
  color: #b3b3b3;
}

.nav ul {
  list-style: none;
  display: flex;
  padding: 0;
}

.nav ul li {
  margin: 0 15px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #222;
  list-style: none;
  padding: 10px;
}

.nav .dropdown:hover .dropdown-menu {
  display: block;
}
</style>
<script setup></script>
