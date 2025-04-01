// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  // Los modulos son funciones anadidas de nuxt
  modules: ["@nuxt/ui"],
  // Importacion global del archivo de estilos (nuxt ui y tailwind)
  css: ["~/assets/css/main.css"],
  // Para importar automaticamnete los componentes en las vistas
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
