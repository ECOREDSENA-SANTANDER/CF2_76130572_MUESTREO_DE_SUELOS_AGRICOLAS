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

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12.mb-3
        img(src="@/assets/curso/temas/t4/img05.png")
      p Antes de calcular la cantidad de insumos que debe aplicarse en un cultivo, es necesario conocer con precisión el área del terreno y manejar correctamente las unidades de medida utilizadas en agricultura. Una conversión adecuada permite ajustar las recomendaciones técnicas emitidas por el laboratorio a las dimensiones reales del lote, evitando errores que puedan afectar la productividad y aumentar los costos de producción. 
      p Las recomendaciones de fertilización generalmente se expresan en kilogramos por hectárea (kg/ha), mientras que en campo las áreas pueden encontrarse medidas en metros cuadrados, fanegadas, hectáreas o plazas. Por ello, el productor o técnico debe realizar las conversiones correspondientes antes de efectuar cualquier cálculo.
    
    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Principales unidades de superficie

    p En Colombia y otros países latinoamericanos se utilizan diferentes unidades para expresar el tamaño de los terrenos agrícolas.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-3.mb-3.d-none.d-lg-block 
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

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12
        img(src="@/assets/curso/temas/t4/img09.png")
    p El cálculo de la dosis de correctivos agrícolas corresponde al procedimiento técnico mediante el cual se determina la cantidad de enmienda que debe aplicarse en un lote para corregir las limitaciones químicas del suelo identificadas en el análisis de laboratorio. Su finalidad es restablecer condiciones adecuadas de fertilidad, favorecer la disponibilidad de nutrientes y optimizar el desarrollo de los cultivos, evitando aplicaciones insuficientes o excesivas que puedan afectar la productividad o generar impactos ambientales. 
    p La dosis recomendada se establece con base en la interpretación de los resultados del análisis de suelo y en las características del correctivo seleccionado, considerando su eficiencia para modificar las condiciones químicas del suelo. Posteriormente, la recomendación debe ajustarse al área del lote y expresarse en las unidades requeridas para facilitar su aplicación en campo.
    p Las dosis de correctivos agrícolas pueden expresarse en diferentes unidades, dependiendo del sistema de producción y del método de aplicación, entre ellas:

    .fondot3.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-3.col-9.col-md-7
          img(src='@/assets/curso/temas/t4/img10.png', alt='')
        .col-lg-7.text-white
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right22
                | Kilogramos por hectárea (kg/ha). 
              li.d-flex
                i.fas.fa-angle-right22
                | Toneladas por hectárea (t/ha). 
              li.d-flex
                i.fas.fa-angle-right22
                | Kilogramos por lote (kg/lote). 
              li.d-flex
                i.fas.fa-angle-right22
                | Kilogramos por planta, utilizados principalmente en cultivos permanentes como café, cítricos, cacao y frutales.

    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Factores que influyen en la dosis de aplicación

    p La cantidad de correctivo agrícola que debe aplicarse depende de diversos factores edáficos, agronómicos y técnicos que determinan el grado de intervención requerido para mejorar las condiciones del suelo. Entre los principales se encuentran:

    .fondo01.mb-4.p-4(data-aos='fade-right')
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.col-9.col-md-6
            img(src="@/assets/curso/temas/t4/img11.svg")
          .col-lg-8
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/1.png' alt='')
                h4.text-center pH del suelo
                p.text-center Determina el nivel de acidez o alcalinidad que debe corregirse.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/2.png' alt='')
                h4.text-center Saturación de aluminio
                p.text-center En suelos ácidos permite establecer la necesidad de disminuir la toxicidad por aluminio intercambiable.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/3.png' alt='')
                h4.text-center Capacidad de intercambio catiónico (CIC)
                p.text-center Influye en la cantidad de correctivo necesaria para modificar las condiciones químicas del suelo.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/4.png' alt='')
                h4.text-center Textura del suelo
                p.text-center Los suelos arcillosos generalmente requieren mayores dosis que los suelos arenosos debido a su mayor capacidad amortiguadora.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/5.png' alt='')
                h4.text-center Contenido de materia orgánica
                p.text-center Afecta la capacidad del suelo para retener nutrientes y amortiguar cambios en el pH.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/6.png' alt='')
                h4.text-center Tipo de correctivo agrícola
                p.text-center Cada producto posee diferente composición química y eficiencia agronómica.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/7.png' alt='')
                h4.text-center Poder Relativo de Neutralización Total (PRNT) o Poder Neutralizante (PN)
                p.text-center Indica la capacidad del correctivo para neutralizar la acidez del suelo y permite ajustar la dosis real de aplicación.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/8.png' alt='')
                h4.text-center Requerimientos nutricionales y tolerancia del cultivo
                p.text-center Cada especie presenta un rango óptimo de pH y diferentes necesidades de calcio, magnesio u otros elementos.

              .tarjeta.bg08.p-3
                .row.justify-content-center.mb-3
                  .col-lg-6.col-8.col-md-4
                    img(src='@/assets/curso/temas/t4/9.png' alt='')
                h4.text-center Sistema de producción y manejo agronómico
                p.text-center El tipo de cultivo, el historial de fertilización y las prácticas de manejo influyen en la recomendación final.

    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Procedimiento general para el cálculo de la dosis

    p El cálculo de la dosis de correctivos debe realizarse siguiendo una secuencia lógica que garantice la correcta interpretación de la recomendación técnica y la determinación precisa de la cantidad de insumo requerida para el área de cultivo.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-4.mb-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img12.png', alt='')
      .col-lg-8
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-angle-right22
            | Revisar el reporte del análisis de suelo e identificar la recomendación técnica emitida por el laboratorio o el profesional responsable. 
          li.d-flex
            i.fas.fa-angle-right22
            | Verificar el tipo de correctivo recomendado, considerando su composición química, pureza y Poder Relativo de Neutralización Total (PRNT) o Poder Neutralizante (PN). 
          li.d-flex
            i.fas.fa-angle-right22
            | Determinar el área efectiva del lote sobre la cual se realizará la aplicación. 
          li.d-flex
            i.fas.fa-angle-right22
            | Convertir las unidades de medida, cuando sea necesario (kg, toneladas, hectáreas, metros cuadrados o número de plantas). 
          li.d-flex
            i.fas.fa-angle-right22
            | Calcular la cantidad total de correctivo requerida para el lote mediante la aplicación de las relaciones matemáticas correspondientes. 
          li.d-flex
            i.fas.fa-angle-right22
            | Verificar la disponibilidad del insumo, asegurando que la cantidad calculada coincida con la capacidad de abastecimiento y las condiciones de almacenamiento. 
          li.d-flex
            i.fas.fa-angle-right22
            | Registrar los cálculos realizados como soporte técnico para la planificación y ejecución de la aplicación en campo.
             

    separador
    #t_4_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2  4.3  Cálculo de dosis de fertilizantes

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El cálculo de la dosis de fertilizantes es el procedimiento técnico mediante el cual se determina la cantidad de fertilizante que debe aplicarse a un cultivo para suministrar los nutrientes requeridos de acuerdo con los resultados del análisis de suelo, las necesidades nutricionales de la especie cultivada, el rendimiento esperado y las características del fertilizante seleccionado; este proceso permite planificar una fertilización eficiente, evitando deficiencias o excesos que puedan afectar el desarrollo de las plantas, disminuir la productividad o generar impactos negativos sobre el suelo y el ambiente.

          br
          br
          | Una fertilización técnicamente calculada contribuye al uso racional de los insumos agrícolas, mejora la eficiencia en la absorción de nutrientes, optimiza los costos de producción y favorece la sostenibilidad de los sistemas agrícolas. Por esta razón, el cálculo de las dosis constituye una de las actividades más importantes dentro del manejo de la fertilidad del suelo.

    p Antes de realizar el cálculo es indispensable recopilar información técnica que permita determinar la cantidad de fertilizante que debe aplicarse. Entre los principales datos se encuentran:

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-6.mb-3.col-md-9
        img(src='@/assets/curso/temas/t4/img14.png', alt='')
      .col-lg-6
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Área del lote o superficie que será fertilizada.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Resultados del análisis de suelo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Recomendación técnica de fertilización (cuando esté disponible).
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Requerimientos nutricionales del cultivo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Tipo de fertilizante que se utilizará.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Concentración de nutrientes indicada en la etiqueta comercial.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Método o forma de aplicación.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Época de aplicación dentro del ciclo del cultivo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Eficiencia esperada del fertilizante según las condiciones del terreno.

    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Aspectos técnicos que deben considerarse

    p El cálculo de la dosis no consiste únicamente en multiplicar una cantidad por el área del terreno. También es necesario evaluar diversos factores que influyen en el aprovechamiento de los nutrientes por parte de las plantas y en la eficiencia de la fertilización.
    p Entre los principales aspectos se encuentran:

    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-right')
      .col-lg-6.mb-3  
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | El contenido porcentual de nutrientes del fertilizante comercial.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | La disponibilidad de nutrientes en el suelo según el análisis de laboratorio.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Los requerimientos nutricionales del cultivo y su etapa de desarrollo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | La eficiencia de recuperación del fertilizante por las plantas.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Las pérdidas potenciales por lixiviación, volatilización, fijación o escorrentía.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Las condiciones climáticas durante la aplicación.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | La textura, humedad y capacidad de retención del suelo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | El sistema de aplicación (al voleo, localizado, en banda o mediante fertirriego).
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | El rendimiento esperado del cultivo.
      .col-lg-6.col-md-9
        img(src='@/assets/curso/temas/t4/img15.png', alt='')

    p Considerar estos factores permite ajustar las dosis de fertilización y mejorar el aprovechamiento de los nutrientes aplicados.

    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Procedimiento general para el cálculo
    
    p El cálculo de la dosis de fertilizantes debe desarrollarse siguiendo una secuencia organizada que garantice la precisión de los resultados.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-6.mb-3.col-md-9
        img(src='@/assets/curso/temas/t4/img16.png', alt='')
      .col-lg-6
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Revisar el análisis de suelo y la recomendación técnica de fertilización.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Identificar el nutriente y la cantidad recomendada para el cultivo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Seleccionar el fertilizante comercial que suministrará dicho nutriente.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Verificar la concentración nutricional indicada en la etiqueta del producto.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Calcular la cantidad de fertilizante necesaria para aportar la dosis recomendada.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Determinar el área total del lote.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Calcular la cantidad total de fertilizante requerida para toda la superficie.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Verificar la disponibilidad del insumo antes de iniciar la aplicación.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Registrar los cálculos realizados como soporte del plan de fertilización.

    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Procedimiento general para el cálculo

    p En muchas ocasiones la recomendación técnica se expresa en kilogramos de nutriente por hectárea y no en kilogramos de fertilizante comercial. Por esta razón, es necesario convertir la recomendación utilizando el porcentaje del nutriente contenido en el producto seleccionado.


    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
      .row.justify-content-center(titulo="La expresión utilizada es")
        .col-lg-6.mb-3
          p Cantidad de fertilizante (kg/ha) = nutriente recomendado (kg/ha) ÷ (porcentaje del nutriente ÷ 100)

          p #[b Ejemplo:]
          p El análisis recomienda aplicar 120 kg de nitrógeno (N) por hectárea. Se dispone de urea, cuyo contenido es 46 % de nitrógeno.

          p Entonces:
          p Cantidad de fertilizante = 120 ÷ 0,46
          p Cantidad de fertilizante = 260,9 kg de urea por hectárea

          p Esto significa que para aportar 120 kg de nitrógeno será necesario aplicar aproximadamente 261 kg de urea por hectárea.

        .col-lg-6.col-11.col-md-10
          figure
            img(src='@/assets/curso/temas/t4/aco1.png', alt='')

      .row.justify-content-center(titulo="Cálculo para el área del lote")
        .col-lg-6.mb-3
          p Una vez obtenida la dosis por hectárea, se calcula la cantidad total requerida para el terreno.
          p Cantidad total = dosis por hectárea × área del lote

          p #[b Ejemplo:]
          p La recomendación técnica indica aplicar 300 kg de fertilizante por hectárea y el lote tiene 2 hectáreas.

          p Entonces:
          p Cantidad total = 300 kg/ha × 2 ha = 600 kg de fertilizante

          p Por lo tanto, para fertilizar completamente el lote se requieren 600 kilogramos del producto.

        .col-lg-6.col-11.col-md-10
          figure
            img(src='@/assets/curso/temas/t4/aco2.png', alt='')

    .correctivo-calcareo.mb-3.p-2(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Recomendaciones para mejorar la eficiencia de la fertilización
    p Para lograr un adecuado aprovechamiento de los fertilizantes se recomienda:

    .fondot3.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-3.col-9.col-md-7
          img(src='@/assets/curso/temas/t4/img17.svg', alt='')
        .col-lg-7.text-white
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right22
                | Aplicar únicamente las dosis recomendadas técnicamente.
              li.d-flex
                i.fas.fa-angle-right22
                | Utilizar fertilizantes con composición adecuada para las necesidades del cultivo.
              li.d-flex
                i.fas.fa-angle-right22
                | Realizar la aplicación en las etapas de mayor demanda nutricional.
              li.d-flex
                i.fas.fa-angle-right22
                | Evitar aplicaciones antes de lluvias intensas para reducir pérdidas por lixiviación.
              li.d-flex
                i.fas.fa-angle-right22
                | Distribuir uniformemente el fertilizante sobre el área de aplicación.
              li.d-flex
                i.fas.fa-angle-right22
                | Calibrar previamente los equipos de aplicación.
              li.d-flex
                i.fas.fa-angle-right22
                | Registrar las cantidades aplicadas para facilitar el seguimiento del manejo nutricional del cultivo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 12.
          span Información requerida para calcular la dosis de fertilizantes

        .row.justify-content-center.align-items-center.mb-2
          .col-lg-12.mb-3
            .tabla-a.color-primario
              table
                thead
                  tr
                    th.text-izq.bg10.w-25 Información
                    th.text-izq.bg10 Descripción
                    th.text-izq.bg10 Utilidad en el cálculo
                tbody
                  tr
                    td #[b Área del terreno]
                    td Superficie donde se realizará la fertilización, expresada en hectáreas o metros cuadrados.
                    td Permite determinar la cantidad total de fertilizante requerida para el lote.

                  tr
                    td #[b Análisis de suelo]
                    td Resultados de laboratorio que muestran el estado de fertilidad y disponibilidad de nutrientes.
                    td Sirve como base para establecer las necesidades nutricionales del suelo.

                  tr
                    td #[b Recomendación técnica]
                    td Dosis de nutrientes o fertilizantes sugerida por el laboratorio o un profesional.
                    td Define la cantidad de nutriente que debe aplicarse por unidad de superficie.

                  tr
                    td #[b Cultivo establecido]
                    td Especie agrícola y rendimiento esperado.
                    td Permite ajustar la fertilización según los requerimientos nutricionales del cultivo.

                  tr
                    td #[b Tipo de fertilizante]
                    td Producto comercial seleccionado para aportar los nutrientes requeridos.
                    td Facilita la elección del fertilizante más adecuado.

                  tr
                    td #[b Concentración de nutrientes]
                    td Porcentaje de nutrientes indicado en la etiqueta del fertilizante (por ejemplo, 46 % N).
                    td Permite convertir la dosis de nutriente en cantidad de fertilizante comercial.

                  tr
                    td #[b Forma de aplicación]
                    td Método mediante el cual se distribuirá el fertilizante (al voleo, localizado, fertirriego, entre otros).
                    td Influye en la eficiencia del aprovechamiento de los nutrientes.

                  tr
                    td #[b Condiciones del suelo y clima]
                    td Humedad, textura, temperatura y probabilidad de lluvias.
                    td Ayudan a programar el momento más adecuado para la aplicación y reducir pérdidas de nutrientes.

    .row.justify-content-center.mb-4(data-aos='fade-right')
      .col-lg-12
        img.w-100(src='@/assets/curso/temas/t4/podcast.png' alt='' data-aos="zoom-in-left")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
              texto="Pódcast:"
              :audio="require_src('@/assets/curso/temas/t4/podcast.png')"
            )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mt-3.mb-0
              | Le invitamos a escuchar el siguiente pódcast, en el que conocerá los aspectos esenciales para interpretar una recomendación técnica, calcular la cantidad de fertilizante requerida y prevenir errores durante su aplicación en el cultivo.

    separador
    #t_4_4.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2   4.4  Aplicación técnica de insumos al suelo según recomendaciones

    .row.justify-content-center.mb-4.bg11.g-0(data-aos='fade-right')
        .col-lg-7.p-4
          p.mb-0 La aplicación técnica de insumos al suelo corresponde al conjunto de procedimientos orientados a suministrar correctivos agrícolas y fertilizantes de manera eficiente, segura y oportuna, de acuerdo con las recomendaciones derivadas del análisis de suelo, las necesidades nutricionales del cultivo y las condiciones del terreno. Su finalidad es garantizar que los nutrientes sean aprovechados por las plantas en la mayor proporción posible, contribuyendo al incremento de la productividad, la optimización de los costos de producción y la conservación del recurso suelo.
          br
          p La eficiencia de la fertilización no depende únicamente de la cantidad de insumo aplicada, sino también de aspectos como el método de distribución, la uniformidad de la aplicación, el momento oportuno, las condiciones de humedad del suelo, el estado fenológico del cultivo y la calibración de los equipos utilizados. Una aplicación técnicamente adecuada reduce las pérdidas de nutrientes por lixiviación, volatilización, escorrentía o fijación en el suelo, mejorando la rentabilidad del sistema productivo.
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img18.png', alt='')

    p Asimismo, durante la aplicación deben cumplirse las recomendaciones técnicas del fabricante, las buenas prácticas agrícolas, las normas de seguridad y salud en el trabajo y los criterios ambientales establecidos para evitar riesgos sobre las personas, los cultivos y los recursos naturales.

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/agro.svg")
            h3.bg07.py-2.w-card-text.text-white Objetivos de una aplicación técnica
    p La correcta aplicación de correctivos y fertilizantes busca:

    .fondot3.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-3.col-9.col-md-7
          img(src='@/assets/curso/temas/t4/img18.svg', alt='')
        .col-lg-7.text-white
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right22
                | Garantizar la disponibilidad de nutrientes para el cultivo.
              li.d-flex
                i.fas.fa-angle-right22
                | Mejorar la eficiencia del aprovechamiento de los fertilizantes.
              li.d-flex
                i.fas.fa-angle-right22
                | Corregir oportunamente las limitaciones químicas del suelo.
              li.d-flex
                i.fas.fa-angle-right22
                | Reducir las pérdidas de nutrientes hacia el ambiente.
              li.d-flex
                i.fas.fa-angle-right22
                | Optimizar la inversión en insumos agrícolas.
              li.d-flex
                i.fas.fa-angle-right22
                | Favorecer el crecimiento, desarrollo y rendimiento de los cultivos.
              li.d-flex
                i.fas.fa-angle-right22
                | Conservar la fertilidad del suelo a largo plazo.

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/agro.svg")
            h3.bg07.py-2.w-card-text.text-white Factores que influyen en la aplicación de insumos
    p Antes de realizar cualquier aplicación deben evaluarse diferentes factores técnicos que condicionan la eficiencia del proceso. Entre los más importantes se encuentran:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.mb-3
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Recomendación técnica derivada del análisis de suelo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Estado nutricional del cultivo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Etapa fenológica de la planta.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Humedad del suelo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Condiciones climáticas.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Tipo de fertilizante o correctivo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Solubilidad del producto.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Método de aplicación.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Textura del suelo.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Pendiente del terreno.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Sistema de producción.
          li.d-flex.mb-0
            i.fas.fa-angle-right22
            | Disponibilidad de maquinaria o equipos de aplicación.
      .col-lg-7
        img(src="@/assets/curso/temas/t4/img19.png")

    .cajon.color-primario.p-3.mb-4
      p.mb-0 #[b Nota:] cada uno de estos factores influye sobre la eficiencia de absorción de los nutrientes y debe considerarse antes de programar las labores de fertilización.


    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/agro.svg")
            h3.bg07.py-2.w-card-text.text-white Métodos de aplicación
    p La selección del método de aplicación depende del tipo de cultivo, del fertilizante empleado, del sistema de producción y de las recomendaciones técnicas emitidas para cada caso.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 13.
      span Métodos de aplicación

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.text-izq.bg10 Método de aplicación
                th.text-izq.bg10 Descripción técnica
                th.text-izq.bg10 Procedimiento general
                th.text-izq.bg10 Ventajas
                th.text-izq.bg10 Limitaciones
                th.text-izq.bg10 Uso recomendado
            tbody
              tr
                td #[b Al voleo]
                td Consiste en distribuir el fertilizante o correctivo de manera uniforme sobre toda la superficie del terreno, ya sea manualmente o mediante equipos mecánicos. Generalmente, el producto aplicado se incorpora posteriormente al suelo mediante labores de preparación o por efecto de la lluvia o el riego.
                td El insumo se distribuye de forma homogénea sobre el lote procurando cubrir toda la superficie y evitando acumulaciones en un mismo sitio.
                td
                  | • Permite cubrir grandes extensiones en poco tiempo.
                  br
                  | • Fácil ejecución.
                  br
                  | • Adecuado para la aplicación de correctivos agrícolas.
                  br
                  | • Puede realizarse con equipos manuales o mecanizados.
                td
                  | • Menor eficiencia cuando el fertilizante permanece sobre la superficie.
                  br
                  | • Mayor riesgo de pérdidas por volatilización, lixiviación o escorrentía.
                  br
                  | • Requiere buena uniformidad de distribución.
                td Correctivos agrícolas, fertilización de establecimiento, pasturas y cultivos extensivos antes de la siembra.

              tr
                td #[b Localizada]
                td Consiste en depositar el fertilizante cerca del sistema radicular de la planta, sin que exista contacto directo con las raíces o con la semilla, favoreciendo un mayor aprovechamiento de los nutrientes.
                td El fertilizante se coloca en pequeños hoyos o franjas cercanas a la planta, respetando la distancia recomendada según el cultivo.
                td
                  | • Mayor eficiencia en la absorción de nutrientes.
                  br
                  | • Reduce pérdidas por lixiviación y volatilización.
                  br
                  | • Disminuye la cantidad total de fertilizante requerida.
                  br
                  | • Favorece el crecimiento inicial del cultivo.
                td
                  | • Requiere mayor precisión.
                  br
                  | • Demanda más tiempo de aplicación.
                  br
                  | • Puede causar fitotoxicidad si el fertilizante queda muy cerca de la raíz.
                td Hortalizas, cultivos permanentes, viveros, sistemas intensivos y agricultura de precisión.

              tr
                td #[b En bandas]
                td El fertilizante se aplica formando bandas o líneas paralelas al surco de siembra, ubicándolo a una distancia adecuada de la semilla o del sistema radicular.
                td Se deposita el fertilizante antes o durante la siembra siguiendo las líneas del cultivo, procurando mantener una profundidad y separación uniformes.
                td
                  | • Incrementa la disponibilidad de nutrientes en la zona radicular.
                  br
                  | • Favorece el establecimiento del cultivo.
                  br
                  | • Reduce pérdidas respecto a la aplicación al voleo.
                  br
                  | • Mejora la eficiencia del fósforo y otros nutrientes poco móviles.
                td
                  | • Requiere equipos adecuados o mayor precisión manual.
                  br
                  | • Una ubicación inadecuada puede afectar la germinación o las raíces.
                td Maíz, arroz, fríjol, sorgo, algodón y otros cultivos transitorios sembrados en hileras.

              tr
                td #[b Alrededor de la planta]
                td El fertilizante se distribuye formando un círculo alrededor del área de mayor desarrollo de las raíces absorbentes, evitando el contacto directo con el tallo.
                td La aplicación se realiza alrededor de la proyección de la copa o en la zona de absorción radicular, incorporando ligeramente el fertilizante cuando sea necesario.
                td
                  | • Favorece la absorción de nutrientes.
                  br
                  | • Reduce desperdicios.
                  br
                  | • Permite ajustar las dosis por planta.
                  br
                  | • Facilita fertilizaciones de mantenimiento.
                td
                  | • Mayor demanda de mano de obra.
                  br
                  | • No es práctico para cultivos de alta densidad.
                  br
                  | • La ubicación incorrecta reduce la eficiencia.
                td Café, cacao, cítricos, aguacate, mango y demás frutales o cultivos perennes.

              tr
                td #[b Fertirriego]
                td Consiste en suministrar fertilizantes completamente solubles mediante sistemas de riego presurizado, distribuyendo simultáneamente agua y nutrientes directamente a la zona radicular.
                td El fertilizante se disuelve en el agua de riego y se incorpora al sistema mediante inyectores o tanques fertilizadores, siguiendo la programación establecida.
                td
                  | • Alta eficiencia en el uso de nutrientes.
                  br
                  | • Dosificación muy precisa.
                  br
                  | • Permite fraccionar las aplicaciones.
                  br
                  | • Reduce pérdidas y costos de mano de obra.
                  br
                  | • Facilita la automatización del proceso.
                td
                  | • Requiere infraestructura especializada.
                  br
                  | • Utiliza únicamente fertilizantes solubles.
                  br
                  | • Demanda mantenimiento y limpieza del sistema de riego.
                  br
                  | • Mayor inversión inicial.
                td Sistemas tecnificados con riego por goteo, microaspersión, agricultura protegida y cultivos de alto valor comercial.
      .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/agro.svg")
            h3.bg07.py-2.w-card-text.text-white Recomendaciones generales durante la aplicación

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La eficiencia de los correctivos agrícolas y fertilizantes no depende únicamente de la dosis calculada, sino también de la forma en que estos son aplicados en el campo. Una aplicación técnicamente adecuada permite que los nutrientes lleguen a la zona de mayor actividad radicular, favoreciendo su absorción y reduciendo las pérdidas ocasionadas por factores ambientales o por prácticas inadecuadas de manejo. 
          br
          br
          | Antes de iniciar la aplicación, es importante verificar que la dosis corresponda a la recomendación técnica obtenida a partir del análisis de suelo o del plan de fertilización establecido para el cultivo. Asimismo, los equipos o implementos de aplicación deben revisarse y calibrarse previamente para asegurar una distribución uniforme del insumo en toda el área de trabajo, evitando zonas con exceso o deficiencia de fertilización.
       
    p Las condiciones del terreno y del clima también influyen en la eficiencia de la aplicación. Se recomienda realizar las labores cuando el suelo presente una humedad adecuada que favorezca la incorporación y disponibilidad de los nutrientes. Igualmente, deben evitarse aplicaciones durante lluvias intensas o en presencia de fuertes vientos, ya que estas condiciones pueden ocasionar pérdidas por escorrentía, lixiviación o deriva del producto.

    .cajon.color-primario.p-4.mb-4
      p.mb-0 Durante la distribución del fertilizante o correctivo es necesario respetar las distancias recomendadas respecto a las semillas, plántulas o raíces, con el fin de evitar daños por altas concentraciones de nutrientes. De igual manera, no deben mezclarse productos incompatibles sin verificar previamente su compatibilidad química y física, ya que esto puede reducir su eficacia o afectar la calidad de la aplicación.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
        .col-lg-5.mb-3.col-md-9
          img(src="@/assets/curso/temas/t4/img21.png")
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t4/img22.svg")
            .col-lg-10
              p Por tanto, es conveniente registrar la información correspondiente a cada aplicación, incluyendo la fecha, el producto utilizado, la dosis aplicada y el área intervenida. Este registro facilita el seguimiento del manejo de la fertilidad del suelo, permite evaluar los resultados obtenidos y constituye un apoyo para la planificación de futuras labores de fertilización. Los insumos que no sean utilizados deben almacenarse de acuerdo con las recomendaciones del fabricante para conservar sus propiedades y garantizar su adecuado uso en aplicaciones posteriores. 

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/agro.svg")
            h3.bg07.py-2.w-card-text.text-white Beneficios de una aplicación técnica adecuada

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-8.col-md-6
        img(src='@/assets/curso/temas/t4/img23.png', alt='')
      .col-lg-9.mb-3
        .row.justify-content-center.align-items-center.bg03.p-3.mb-3
          .col-lg-4.mb-3.col-8.col-md-6
            img(src='@/assets/curso/temas/t4/img25.svg', alt='')
          .col-lg-8
            p.mb-0 La aplicación técnica de correctivos agrícolas y fertilizantes permite maximizar el aprovechamiento de los nutrientes por parte de los cultivos, contribuyendo al desarrollo adecuado de las plantas y al incremento de la productividad. Cuando los insumos se aplican en la dosis, el momento y el lugar adecuados, se mejora la eficiencia de la fertilización y se reducen las pérdidas ocasionadas por procesos como la lixiviación, la volatilización o la escorrentía. 
        p Otro beneficio importante es la optimización de los costos de producción, ya que el uso racional de los insumos evita aplicaciones innecesarias y mejora el rendimiento de la inversión realizada en fertilización. Además, una distribución uniforme de los nutrientes favorece un crecimiento más homogéneo de los cultivos, facilita las labores de manejo agronómico y contribuye a obtener cosechas de mejor calidad.

    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-right')
        .col-lg-7.mb-3
          .row
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t4/img27.svg")
            .col-lg-10
              p La aplicación técnica también favorece la conservación de la fertilidad del suelo al mantener un equilibrio adecuado en el suministro de nutrientes y reducir el riesgo de degradación ocasionado por aplicaciones excesivas o deficientes. Asimismo, disminuye la posibilidad de contaminación de los recursos naturales por el uso inadecuado de fertilizantes, promoviendo sistemas de producción más eficientes y sostenibles.
          p De esta manera, el registro de las aplicaciones y el seguimiento de las labores realizadas proporcionan información valiosa para evaluar la respuesta de los cultivos, ajustar los planes de fertilización y mejorar la planificación de los ciclos productivos siguientes. Esto fortalece la toma de decisiones basada en criterios técnicos.
        .col-lg-5.mb-3.col-md-9
          img(src="@/assets/curso/temas/t4/img26.png")

    .cajon.color-primario.p-4
      p.mb-0 La aplicación articulada de los procedimientos de muestreo, conservación, análisis, dosificación y suministro de insumos permite tomar decisiones técnicas orientadas al manejo eficiente de la fertilidad del suelo. Los conocimientos y habilidades desarrollados en este componente fortalecen la capacidad del aprendiz para ejecutar prácticas agrícolas responsables, optimizar el uso de correctivos y fertilizantes, favorecer la productividad de los cultivos y contribuir a la sostenibilidad de los sistemas agrícolas.












































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
<style lang="sass"></style>
