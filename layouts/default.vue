<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<style>
body {
  background-image:
    linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.8)),
    url('/assets/images/fondo.webp') !important;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>