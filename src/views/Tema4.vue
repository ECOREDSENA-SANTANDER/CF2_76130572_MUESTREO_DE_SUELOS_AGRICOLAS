<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dosificación y suministro de insumos al suelo

    .row.justify-content-center.mb-4.bg12.g-0(data-aos='fade-right')
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img01.png', alt='')
        .col-lg-7
          .row.mb-0.p-4
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t4/img02.svg', alt='')
            .col-lg-12.text-white
              p.mb-0 La dosificación y aplicación de insumos agrícolas constituyen la etapa final del proceso de manejo de la fertilidad del suelo. Una vez interpretados los resultados del análisis de laboratorio y definidas las recomendaciones técnicas, es necesario calcular correctamente las cantidades de correctivos y fertilizantes que deben aplicarse en el terreno. Una dosificación adecuada permite suministrar los nutrientes requeridos por los cultivos, optimizar el uso de los insumos y evitar aplicaciones insuficientes o excesivas que puedan afectar la productividad agrícola o generar impactos negativos sobre el ambiente

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t4/img04.svg")
            .col-lg-10
              p Para realizar estos cálculos es indispensable manejar conceptos relacionados con la conversión de unidades, la determinación de áreas y el cálculo de dosis según las recomendaciones técnicas y las condiciones específicas del lote. Estas operaciones permiten adaptar las cantidades de insumos a diferentes superficies de cultivo, facilitando la planificación de las labores agrícolas y el uso eficiente de los recursos disponibles.
            p La correcta aplicación de correctivos agrícolas y fertilizantes también requiere conocer las diferentes formas de suministro al suelo, los momentos oportunos para su aplicación y las recomendaciones técnicas que garantizan una adecuada disponibilidad de nutrientes para los cultivos. La selección del método de aplicación depende del tipo de insumo, las características del cultivo, las condiciones del terreno y los objetivos del manejo agronómico.
        .col-lg-5.mb-3.col-10
          img(src="@/assets/curso/temas/t4/img03.png")
    separador
    #t_4_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.1  Conversión de unidades y áreas de terreno

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-3
        img(src="@/assets/curso/temas/t4/img05.png")
      p Antes de calcular la cantidad de insumos que debe aplicarse en un cultivo, es necesario conocer con precisión el área del terreno y manejar correctamente las unidades de medida utilizadas en agricultura. Una conversión adecuada permite ajustar las recomendaciones técnicas emitidas por el laboratorio a las dimensiones reales del lote, evitando errores que puedan afectar la productividad y aumentar los costos de producción. 
      p Las recomendaciones de fertilización generalmente se expresan en kilogramos por hectárea (kg/ha), mientras que en campo las áreas pueden encontrarse medidas en metros cuadrados, fanegadas, hectáreas o plazas. Por ello, el productor o técnico debe realizar las conversiones correspondientes antes de efectuar cualquier cálculo.
    
    .correctivo-calcareo.mb-3(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Principales unidades de superficie

    p En Colombia y otros países latinoamericanos se utilizan diferentes unidades para expresar el tamaño de los terrenos agrícolas.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.mb-3 
        img(src='@/assets/curso/temas/t4/img06.png', alt='')
      .col-lg-5.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 11.
          span Principales unidades de superficie

        .row.justify-content-center.align-items-center.mb-2
          .col-lg-12.mb-3
            .tabla-a.color-primario
              table
                thead
                  tr
                    th.text-izq.bg10.w-25 Unidad
                    th.text-izq.bg10 Equivalencia
                tbody
                  tr
                    td #[b Metro cuadrado (m²)]
                    td Unidad básica de superficie.

                  tr
                    td #[b Hectárea (ha)]
                    td 10.000 m².

                  tr
                    td #[b Kilómetro cuadrado (km²)]
                    td 100 hectáreas.

                  tr
                    td #[b Fanegada*]
                    td Aproximadamente 6.400 m² (puede variar según la región).

                  tr
                    td #[b Plaza*]
                    td Unidad tradicional cuyo valor depende de la región.
      .col-lg-4
        .cajon.color-primario.p-5
          p Las equivalencias de fanegada y plaza pueden variar entre departamentos; por ello, siempre se recomienda verificar la medida utilizada en la zona de trabajo.
          p.mb-0 El procedimiento para calcular el área depende de la forma del lote. Para ello, pueden utilizarse diferentes métodos de medición y cálculo.

    .tarjeta--container.row.mb-4(data-aos='fade-right')
      .col-md.tarjeta.bg13.p-4
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/t4/1.svg', alt='')
        h3.text-center Terrenos rectangulares
        p.text-center Área = largo × ancho

      .col-md.tarjeta.bg14.p-4(data-aos='fade-right')
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/t4/2.svg', alt='')
        h3.text-center Terrenos cuadrados
        p.text-center Área = lado × lado
      .col-md.tarjeta.bg15.p-4
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/t4/3.svg', alt='')
        h3.text-center Terrenos irregulares
        p.text-center Cuando el lote presenta formas irregulares, se recomienda dividirlo en figuras geométricas simples para estimar su superficie.
     
    p Actualmente, el cálculo del área de los terrenos agrícolas puede realizarse con mayor rapidez y precisión mediante el uso de herramientas tecnológicas que facilitan la planificación del muestreo y la dosificación de insumos. Estas tecnologías reducen los errores de medición y permiten obtener información georreferenciada para una mejor gestión del lote.
    p Entre las tecnologías más utilizadas se encuentran: 

    SlyderF(columnas="col-lg-6 col-xl-4").mb-3(data-aos="zoom-in-left")
      .tarjeta.bg04.p-3
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t4/01.svg' alt='')
        h4.text-center Receptores GPS (Sistema de Posicionamiento Global)
        p.text-center Permiten registrar las coordenadas del perímetro del lote y calcular automáticamente su superficie con un alto nivel de precisión.

      .tarjeta.bg04.p-3
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t4/02.svg' alt='')
        h4.text-center Aplicaciones móviles con georreferenciación
        p.text-center Herramientas instaladas en teléfonos inteligentes que utilizan el GPS del dispositivo para delimitar el terreno, calcular áreas y almacenar información del predio durante los recorridos de campo.

      .tarjeta.bg04.p-3
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t4/03.svg' alt='')
        h4.text-center Drones (Vehículos Aéreos No Tripulados - VANT)
        p.text-center Capturan imágenes aéreas de alta resolución que permiten elaborar ortofotos y modelos digitales del terreno para calcular áreas, identificar variabilidad del lote y apoyar la agricultura de precisión.

      .tarjeta.bg04.p-3
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t4/04.svg' alt='')
        h4.text-center Sistemas de Información Geográfica (SIG)
        p.text-center #[em Software] especializado que integra mapas, imágenes satelitales y datos geográficos para medir superficies, delimitar lotes, generar cartografía y planificar actividades agrícolas.

      .tarjeta.bg04.p-3
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t4/05.svg' alt='')
        h4.text-center Imágenes satelitales y plataformas de agricultura digital
        p.text-center Proporcionan información geoespacial que facilita la delimitación de áreas de cultivo, el seguimiento de los lotes y la planificación de las labores agrícolas sin necesidad de recorrer completamente el terreno.

      .tarjeta.bg04.p-3
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t4/06.svg' alt='')
        h4.text-center Telémetros láser y estaciones totales
        p.text-center Equipos utilizados principalmente en levantamientos topográficos que permiten realizar mediciones precisas de distancias y superficies, especialmente en terrenos con formas complejas o cuando se requiere una mayor exactitud.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t4/img08.svg")
            .col-lg-10
              p La incorporación de estas tecnologías contribuye a mejorar la precisión en la medición de áreas, optimizar la planificación del muestreo de suelos, facilitar el cálculo de las dosis de correctivos y fertilizantes y fortalecer la toma de decisiones técnicas en los sistemas de producción agrícola. Además, favorecen la implementación de prácticas propias de la agricultura de precisión, orientadas al uso eficiente de los recursos y al manejo sostenible del suelo.
            p Una medición precisa del área del terreno es fundamental para garantizar la correcta dosificación de los insumos agrícolas y la eficiencia de las labores de fertilización. Determinar con exactitud la superficie sobre la cual se aplicarán los correctivos o fertilizantes permite calcular las cantidades requeridas según las recomendaciones técnicas, optimizar el uso de los insumos, reducir desperdicios y disminuir los costos de producción. Además, una adecuada medición evita aplicaciones insuficientes o excesivas que pueden afectar el desarrollo de los cultivos, generar pérdidas económicas y ocasionar impactos negativos sobre el suelo y el ambiente.
        .col-lg-5.mb-3.col-10
          img(src="@/assets/curso/temas/t4/img07.png")

    separador
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2  4.2  Cálculo de dosis de correctivos

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src="@/assets/curso/temas/t4/img09.png")
    p El cálculo de la dosis de correctivos agrícolas corresponde al procedimiento técnico mediante el cual se determina la cantidad de enmienda que debe aplicarse en un lote para corregir las limitaciones químicas del suelo identificadas en el análisis de laboratorio. Su finalidad es restablecer condiciones adecuadas de fertilidad, favorecer la disponibilidad de nutrientes y optimizar el desarrollo de los cultivos, evitando aplicaciones insuficientes o excesivas que puedan afectar la productividad o generar impactos ambientales. 
    p La dosis recomendada se establece con base en la interpretación de los resultados del análisis de suelo y en las características del correctivo seleccionado, considerando su eficiencia para modificar las condiciones químicas del suelo. Posteriormente, la recomendación debe ajustarse al área del lote y expresarse en las unidades requeridas para facilitar su aplicación en campo.
    p Las dosis de correctivos agrícolas pueden expresarse en diferentes unidades, dependiendo del sistema de producción y del método de aplicación, entre ellas:




























































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
