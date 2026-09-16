<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo, conservación y transporte de muestras

    .row.justify-content-center.mb-4.bg11.g-0(data-aos='fade-right')
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img01.png', alt='')
        .col-lg-7
          .row.mb-0.p-4
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t2/img02.svg', alt='')
            .col-lg-12
              p.mb-0 Una vez finalizada la recolección y preparación de la muestra de suelo, es necesario aplicar procedimientos que garanticen la conservación de sus características hasta el momento del análisis en laboratorio. El manejo adecuado de las muestras comprende actividades relacionadas con su identificación, embalaje, almacenamiento temporal, transporte y disposición de los residuos generados durante el proceso. 
              br
              p Estas acciones son fundamentales para preservar la integridad del material recolectado y asegurar que los resultados del análisis reflejen las condiciones reales del suelo evaluado.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t2/img04.svg")
            .col-lg-10
              p La pérdida de información, la contaminación de las muestras o una identificación incorrecta pueden ocasionar errores en los resultados analíticos y afectar las recomendaciones para el manejo de la fertilidad del suelo. Por esta razón, durante todas las etapas posteriores a la recolección deben aplicarse procedimientos estandarizados que permitan mantener la trazabilidad de las muestras y reducir el riesgo de alteraciones físicas, químicas o biológicas.
            p Se desarrollan los procedimientos para la identificación y rotulado de las muestras, las técnicas de embalaje y conservación, el transporte seguro al laboratorio y el manejo ambientalmente responsable de los residuos generados durante el muestreo. El dominio de estos procedimientos fortalece la calidad del proceso de muestreo y contribuye al cumplimiento de las buenas prácticas agrícolas, ambientales y de aseguramiento de la calidad.
        .col-lg-5.mb-3.col-10
          img(src="@/assets/curso/temas/t2/img03.png")

    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1  Identificación y rotulado de muestras

    p(data-aos='fade-right') La identificación de las muestras es un procedimiento indispensable para garantizar la trazabilidad durante todo el proceso de análisis. Cada muestra debe contar con un código único que permita relacionarla con el lote de origen y con la información registrada durante el trabajo de campo.
    
    .bg02.p-4.mb-4(data-aos='fade-right')
        .row.justify-content-center.align-items-center
          .col-lg-11
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              span Formato de identificación de una muestra de suelo
            img(src='@/assets/curso/temas/t2/fig3.png', alt='Formato para registrar la procedencia, fecha, profundidad, responsables y observaciones de una muestra de suelo. ')
       
    .cajon.color-primario.p-4.mb-4(data-aos='fade-right')
      p.mb-0 Una identificación adecuada evita confusiones entre muestras, facilita el procesamiento en el laboratorio y asegura que los resultados obtenidos correspondan al área evaluada.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3.
      span Información que debe contener la etiqueta

    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-right')
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.text-izq.bg10 Información
                th.text-izq.bg10 Descripción
                th.text-izq.bg10 Finalidad
            tbody
              tr
                td #[b Código de la muestra]
                td Corresponde a un identificador único, asignado mediante una combinación de números, letras o ambos, que diferencia la muestra de las demás recolectadas durante la jornada de campo.
                td Identificar de manera única la muestra durante todas las etapas del proceso, evitando confusiones o intercambios desde la recolección hasta la emisión del informe de laboratorio.

              tr
                td #[b Predio o finca]
                td Nombre del predio, finca o unidad productiva donde se realizó el muestreo. En algunos casos puede incluir el municipio, vereda o coordenadas geográficas.
                td Establecer el lugar de procedencia de la muestra y facilitar la ubicación del sitio para futuras evaluaciones o monitoreos.

              tr
                td #[b Lote]
                td Identificación específica del lote, parcela o unidad homogénea de manejo dentro del predio donde fue tomada la muestra.
                td Relacionar los resultados del análisis con el área evaluada, permitiendo formular recomendaciones específicas para cada lote.

              tr
                td #[b Fecha de muestreo]
                td Día, mes y año en que se efectuó la toma de la muestra. También puede registrarse la hora cuando el protocolo del laboratorio lo requiera.
                td Registrar el momento exacto del muestreo, facilitando el seguimiento de la fertilidad del suelo y la comparación de resultados obtenidos en diferentes periodos.

              tr
                td #[b Profundidad de muestreo]
                td Indica el intervalo de profundidad al cual fue recolectada la muestra, por ejemplo, 0–20 cm o 20–40 cm, de acuerdo con el tipo de cultivo y el objetivo del análisis.
                td Relacionar los resultados del laboratorio con el nivel del perfil del suelo evaluado, garantizando una correcta interpretación de las propiedades físicas y químicas.

              tr
                td #[b Responsable del muestreo]
                td Nombre de la persona, técnico o profesional encargado de realizar la toma de la muestra y el diligenciamiento de la información correspondiente.
                td Facilitar la trazabilidad del procedimiento, identificar al responsable del proceso y garantizar la confiabilidad de la información registrada.

              tr
                td #[b Tipo de cultivo]
                td Especifica el cultivo establecido o el cultivo que se proyecta sembrar en el lote muestreado.
                td Permitir al laboratorio y al profesional responsable interpretar los resultados de acuerdo con los requerimientos nutricionales del cultivo.

              tr
                td #[b Observaciones]
                td Espacio destinado para registrar información adicional, como condiciones climáticas, estado del terreno, presencia de erosión, compactación u otras características relevantes observadas durante el muestreo.
                td Complementar la información técnica de la muestra y proporcionar elementos que faciliten la interpretación de los resultados y la formulación de recomendaciones agronómicas más precisas.

    separador
    #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.2  Técnicas de embalaje y conservación

    p El embalaje tiene como finalidad proteger la muestra durante su almacenamiento temporal y transporte, evitando pérdidas de material, contaminación o alteraciones que puedan modificar sus propiedades.

    .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.bg04.p-4
          .row.justify-content-center.mb-4
            .col-8
              figure
                img(src='@/assets/curso/temas/t2/01.png', alt='')          
          h3.text-center Materiales recomendados
          p Para el embalaje se recomienda utilizar:
          p.mb-0 • Bolsas plásticas resistentes para muestreo de suelos. 
          p.mb-0 • Bolsas de papel cuando el laboratorio así lo solicite.  
          p.mb-0 • Recipientes plásticos limpios y secos. 
          p.mb-0 • Etiquetas resistentes a la humedad. 
          p.mb-0 • Cajas plásticas o de cartón para el transporte. 
       
        
        .col-md.tarjeta.bg05.p-4(data-aos='fade-right')
          .row.justify-content-center.mb-4
            .col-8
              figure
                img(src='@/assets/curso/temas/t2/02.png', alt='')              
          h3.text-center Condiciones para la conservación
          p Las muestras deben mantenerse en condiciones que eviten cambios en su composición:
          p.mb-0 • Almacenar en un lugar fresco y seco. 
          p.mb-0 • Evitar la exposición directa al sol. 
          p.mb-0 • Protegerlas de la lluvia y la humedad excesiva. 
          p.mb-0 • Evitar el contacto con fertilizantes, combustibles o productos químicos. 
          p.mb-0 • Transportarlas al laboratorio en el menor tiempo posible. 
       
        .col-md.tarjeta.bg06.text-white.p-4
          .row.justify-content-center.mb-4
            .col-8
              figure
                img(src='@/assets/curso/temas/t2/03.png', alt='')              
          h3.text-center Factores que pueden alterar la muestra
          p.mb-0 • Altas temperaturas.  
          p.mb-0 • Humedad excesiva. 
          p.mb-0 • Contaminación cruzada.  
          p.mb-0 • Rotura del empaque. 
          p.mb-0 • Pérdida de la etiqueta. 
    separador
    #t_2_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.3  Transporte de muestras al laboratorio

    p El transporte constituye la etapa que conecta el trabajo de campo con el análisis de laboratorio. Durante este proceso es fundamental mantener la integridad de las muestras para garantizar que los resultados reflejen fielmente las condiciones del suelo al momento del muestreo.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
      .row.justify-content-center(titulo="Procedimiento para el transporte")
        .col-lg-6.mb-3
          p Se recomienda seguir el siguiente procedimiento:
          p.mb-0 1. Verificar el correcto rotulado de todas las muestras. 
          p.mb-0 2. Revisar que los empaques se encuentren en buen estado. 
          p.mb-0 3. Organizar las muestras dentro de cajas o contenedores. 
          p.mb-0 4. Adjuntar el formato de registro o remisión. 
          p.mb-0 5. Transportar las muestras evitando golpes o exposición prolongada al calor. 
          p.mb-0 6. Entregar oportunamente al laboratorio. 
        .col-lg-6.col-11.col-md-10
          figure
            img(src='@/assets/curso/temas/t2/img06.png', alt='')
      .row.justify-content-center(titulo="Cadena de custodia")
        .col-lg-6.mb-4.mb-md-0
          p La cadena de custodia corresponde al registro de las personas responsables del manejo de la muestra desde su recolección hasta su recepción en el laboratorio. Este procedimiento fortalece la trazabilidad y la confiabilidad del proceso.
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 4.
            span Buenas prácticas durante el transporte

          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12.mb-3
              .tabla-a.color-primario
                table
                  thead
                    tr
                      th.text-izq.bg10.w-25 Buena práctica
                      th.text-izq.bg10 Beneficio
                  tbody.blanco
                    tr
                      td #[b Verificar el rotulado.]
                      td Evita confusión entre muestras.

                    tr
                      td #[b Utilizar empaques resistentes.]
                      td Reduce pérdidas de material.

                    tr
                      td #[b Proteger las muestras del calor.]
                      td Protege las muestras del calor.

                    tr
                      td #[b Transportar oportunamente.]
                      td Disminuye alteraciones en la muestra.

                    tr
                      td #[b Entregar con documentación.]
                      td Facilita la recepción en laboratorio.
        .col-lg-6.col-md-9
          figure
            img(src='@/assets/curso/temas/t2/img07.png', alt='')

  



















































































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<style lang="sass"></style>
