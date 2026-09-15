<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ejecución del muestreo de suelos agrícolas comprende la aplicación de procedimientos técnicos para obtener muestras representativas de las condiciones del terreno. La correcta extracción de submuestras, la conformación de muestras compuestas y la homogeneización del material garantizan su calidad y permiten obtener resultados confiables en el análisis de laboratorio.
          br
          br
          | La identificación, conservación y transporte de las muestras son fundamentales para mantener sus características físicas y químicas. Estos procedimientos deben cumplir criterios de trazabilidad, buenas prácticas agrícolas (BPA), protección ambiental y manejo responsable de los residuos generados.
          br
          | Los resultados del análisis permiten diagnosticar la fertilidad del suelo y orientar la selección de correctivos y fertilizantes. Su interpretación, junto con el cálculo de áreas, la conversión de unidades y la determinación de dosis, facilita la aplicación eficiente de los insumos según las recomendaciones técnicas y los requerimientos del cultivo.
    
    .cajon.color-primario.p-4.mb-4(data-aos="fade-up")
      p.mb-0 Este componente formativo busca desarrollar las competencias necesarias para recolectar, conservar y transportar muestras de suelo; interpretar los resultados del laboratorio; y dosificar correctivos y fertilizantes, aplicando criterios técnicos, ambientales y de seguridad y salud en el trabajo (SST). De esta manera, se promueve el uso eficiente de los insumos y el manejo sostenible de la fertilidad del suelo.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
