<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Ejecución del procedimiento de muestreo de suelos
        
      .row.justify-content-center.mb-3.bg01.g-0
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img01.png', alt='')
        .col-lg-7.text-white
          .row.mb-0.p-5
            .col-lg-2.mb-3.col-4.col-md-3
              img.wid15(src='@/assets/curso/temas/t1/ico1.svg', alt='')
            .col-lg-12
              p.mb-0 La ejecución del procedimiento de muestreo de suelos constituye la fase operativa mediante la cual se obtiene una muestra representativa del terreno para su análisis en laboratorio. En esta etapa se aplican los procedimientos técnicos previamente establecidos para garantizar que el material recolectado conserve las características físicas y químicas propias del suelo y refleje de manera confiable las condiciones del lote agrícola.

      .cajon.color-primario.p-4.mb-4
        p.mb-0 Le invitamos a consultar el siguiente video, en el que conocerá recomendaciones prácticas para realizar correctamente el muestreo y obtener resultados confiables sobre las condiciones del suelo.

      .row.justify-content-center.align-items-center.mb-3           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/qBdp2waTIsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption  Video: Manejo ecológico del suelo - ¿Cómo tomar una muestra?

      p La calidad de los resultados analíticos depende directamente de la correcta ejecución de cada una de las actividades que conforman el proceso de muestreo. Aspectos como la preparación del sitio, la extracción de submuestras, la elaboración de la muestra compuesta y su adecuada homogeneización permiten reducir los errores asociados a la variabilidad natural del suelo y asegurar que las recomendaciones agronómicas posteriores se fundamenten en información confiable.
































  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
