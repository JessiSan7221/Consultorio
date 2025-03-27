<template>
  <section class="desarrollo-web">
    <div class="info">
      <p class="subtitulo">Capacitaciones incluidas</p>
      <h2>Desarrollo Web</h2>
      <p>Planes diseñados para adaptarse perfectamente a tus necesidades.</p>
      <p class="precio">Precios desde – <span>$350.000 COP</span></p>
      <button class="btn">PRECIOS</button>
    </div>
    <div class="servicios">
      <div class="servicio">
        <img src="/icons/desarrollo.svg" alt="Desarrollo" />
        <h3>Desarrollo</h3>
        <p>
          Programación y desarrollo de sitios web atractivos, basados en
          plantillas.
        </p>
      </div>
      <div class="servicio">
        <img src="/icons/mantenimiento.svg" alt="Mantenimiento" />
        <h3>Mantenimiento</h3>
        <p>Mantenimiento y actualización continua de su sitio web.</p>
      </div>
      <div class="servicio">
        <img src="/icons/optimizacion.svg" alt="Optimización" />
        <h3>Optimización</h3>
        <p>
          Mejora del rendimiento, velocidad y posicionamiento SEO de sitios web.
        </p>
      </div>
      <div class="servicio">
        <img src="/icons/analisis.svg" alt="Análisis" />
        <h3>Análisis</h3>
        <p>
          Evaluación de las necesidades del cliente y planificación de proyectos
          web.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.desarrollo-web {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: #0a0a0a;
  color: #fff;
}

.info {
  max-width: 400px;
}

.subtitulo {
  color: #f0c040;
  font-style: italic;
}

h2 {
  font-size: 2rem;
}

.precio span {
  color: #f0c040;
  font-style: italic;
}

.btn {
  padding: 10px 20px;
  border: 1px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
}

.servicios {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.servicio {
  text-align: center;
}

.servicio img {
  width: 50px;
  margin-bottom: 10px;
}
</style>
