<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El muestreo de suelos agrícolas permite obtener información confiable sobre su fertilidad mediante la recolección de submuestras, la conformación y homogeneización de muestras compuestas, y su adecuada identificación, conservación y transporte al laboratorio. La interpretación de los resultados orienta la selección de correctivos y fertilizantes, el cálculo de dosis y su aplicación técnica, favoreciendo el uso eficiente de los insumos, la productividad agrícola y la conservación del suelo.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Organiza las etapas del muestreo de suelos, el análisis de fertilidad y la dosificación y aplicación técnica de insumos agrícolas. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
