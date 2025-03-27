<template>
  <section class="index">
    <div class="contenido">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos un equipo dedicado a proporcionar soluciones tecnológicas
        innovadoras. Nuestra misión es...
      </p>
    </div>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        src="https://decanaturasistemasiuc.com/wp-content/uploads/2024/06/uno.mp4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.contenido {
  max-width: 800px;
  text-align: center;
  margin-bottom: 20px;
}

.video {
  width: 100%;
  max-width: 800px;
}
</style>
<script>
import Header from "@/components/Header.vue";
</script>
