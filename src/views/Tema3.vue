<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interpretación de recomendaciones técnicas para el manejo del suelo

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de laboratorio constituye una de las herramientas más importantes para evaluar el estado de fertilidad del suelo y apoyar la toma de decisiones relacionadas con el manejo nutricional de los cultivos. Sin embargo, los resultados obtenidos únicamente adquieren valor cuando son interpretados correctamente, ya que cada parámetro analizado proporciona información sobre las condiciones físicas y químicas del suelo y sobre su capacidad para suministrar nutrientes a las plantas. 
          br
          br
          | La interpretación del reporte de laboratorio consiste en analizar los valores obtenidos para determinar si las propiedades del suelo son adecuadas para el desarrollo del cultivo o si es necesario implementar prácticas de manejo como la aplicación de correctivos agrícolas, fertilizantes o enmiendas orgánicas. Este proceso permite establecer recomendaciones técnicas ajustadas a las características del lote y a las necesidades nutricionales del sistema productivo.

    .row.justify-content-center.mb-3(data-aos='fade-right')
        .col-lg-5.mb-3.col-md-9
          img(src="@/assets/curso/temas/t3/img02.png")
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t3/img03.svg")
            .col-lg-10
              p Es importante comprender que un mismo resultado puede tener interpretaciones diferentes dependiendo del tipo de cultivo, las características del suelo, las condiciones climáticas y el sistema de producción. Por esta razón, la lectura del reporte debe realizarse de manera integral, considerando el conjunto de variables evaluadas y no únicamente un parámetro de forma aislada.
          p Una adecuada interpretación del análisis de suelo contribuye a optimizar el uso de los insumos agrícolas, mejorar la productividad, reducir costos de producción y minimizar los impactos ambientales ocasionados por aplicaciones inadecuadas de fertilizantes y correctivos.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
      .row.justify-content-center(titulo="¿Qué es un reporte de laboratorio?")
        .col-lg-6.mb-3
          p El reporte de laboratorio es el documento técnico emitido por un laboratorio especializado después de analizar una muestra de suelo. En él se presentan los resultados de las propiedades físicas y químicas evaluadas, junto con la información necesaria para conocer el estado de fertilidad del suelo.

          p.mb-0 Dependiendo del laboratorio, el formato puede variar; sin embargo, la mayoría de los reportes incluyen los mismos parámetros básicos y una sección con recomendaciones técnicas para el manejo del suelo.

        .col-lg-6.col-11.col-md-10
          figure
            img(src='@/assets/curso/temas/t3/aco1.png', alt='')

      .row.justify-content-center(titulo="Información general del reporte")
        .col-lg-6.mb-4.mb-md-0
          p Antes de interpretar los resultados analíticos, es importante verificar que la información de identificación de la muestra corresponda al lote evaluado. Generalmente el reporte contiene:

          p.mb-0 • Nombre del productor o propietario.
          p.mb-0 • Nombre del predio.
          p.mb-0 • Identificación del lote.
          p.mb-0 • Código de la muestra.
          p.mb-0 • Fecha de recepción.
          p.mb-0 • Fecha del análisis.
          p.mb-0 • Profundidad del muestreo.
          p.mb-0 • Tipo de cultivo.
          p.mb-3 • Laboratorio responsable.

          figure
            img(src='@/assets/curso/temas/t3/aco2.png', alt='')

        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 5.
            span Información general del reporte de laboratorio

          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-izq.bg10.w-25 Información
                  th.text-izq.bg10 Importancia
              tbody
                tr
                  td Código de la muestra
                  td Permite identificar la muestra analizada.

                tr
                  td Predio y lote
                  td Relaciona los resultados con el área muestreada.

                tr
                  td Fecha del análisis
                  td Facilita el seguimiento de la fertilidad del suelo.

                tr
                  td Profundidad de muestreo
                  td Permite interpretar correctamente los resultados obtenidos.

                tr
                  td Cultivo de referencia
                  td Facilita la formulación de recomendaciones agronómicas.

                tr
                  td Laboratorio responsable
                  td Garantiza la trazabilidad y confiabilidad del análisis.

      .row.justify-content-center(titulo="Principales parámetros evaluados")
        .col-lg-6.mb-4.mb-md-0
          p Aunque los laboratorios pueden incluir diferentes análisis, normalmente los reportes presentan información relacionada con:

          p.mb-0 • pH.
          p.mb-0 • Materia orgánica.
          p.mb-0 • Conductividad eléctrica.
          p.mb-0 • Capacidad de intercambio catiónico (CIC).
          p.mb-0 • Macronutrientes.
          p.mb-0 • Micronutrientes.
          p.mb-0 • Saturación de bases.
          p.mb-3 • Saturación de aluminio (cuando aplica).

          p Nota: cada uno de estos parámetros permite evaluar una condición específica del suelo y establecer posibles limitantes para el crecimiento de los cultivos.

          figure
            img(src='@/assets/curso/temas/t3/aco3.png', alt='')

        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 6.
            span Principales parámetros del análisis de suelo

          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-izq.bg10.w-25 Parámetro
                  th.text-izq.bg10 Información que proporciona
                  th.text-izq.bg10 Importancia agronómica
              tbody
                tr
                  td pH
                  td Nivel de acidez o alcalinidad.
                  td Influye en la disponibilidad de nutrientes.

                tr
                  td Materia orgánica
                  td Contenido de residuos orgánicos estabilizados.
                  td Mejora la fertilidad y la actividad biológica.

                tr
                  td Conductividad eléctrica
                  td Concentración de sales solubles.
                  td Permite identificar problemas de salinidad.

                tr
                  td CIC
                  td Capacidad para retener nutrientes.
                  td Indica el potencial de fertilidad del suelo.

                tr
                  td Macronutrientes
                  td Disponibilidad de nitrógeno (N), fósforo (P), potasio (K), calcio (Ca), magnesio (Mg) y azufre (S).
                  td Determinan el crecimiento y la producción de los cultivos.

                tr
                  td Micronutrientes
                  td Disponibilidad de hierro (Fe), zinc (Zn), cobre (Cu), manganeso (Mn), boro (B) y molibdeno (Mo).
                  td Participan en procesos fisiológicos esenciales.

      .row.justify-content-center(titulo="Niveles de interpretación")
        .col-lg-6.mb-4.mb-md-0.mb-3
          p Los resultados del laboratorio generalmente se expresan mediante categorías que facilitan la toma de decisiones.

          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 7.
            span Interpretación general de los resultados

          .tabla-a.color-primario.mb-3
            table
              thead
                tr
                  th.text-izq.bg10.w-25 Nivel
                  th.text-izq.bg10 Interpretación
                  th.text-izq.bg10 Acción general
              tbody
                tr
                  td Muy bajo
                  td Alta deficiencia del parámetro evaluado.
                  td Requiere intervención prioritaria.

                tr
                  td Bajo
                  td Disponibilidad insuficiente.
                  td Se recomienda realizar correcciones técnicas.

                tr
                  td Medio
                  td Nivel aceptable.
                  td Mantener un manejo adecuado y realizar seguimiento.

                tr
                  td Alto
                  td Buena disponibilidad.
                  td Mantener las condiciones actuales evitando excesos.

                tr
                  td Muy alto
                  td Exceso del parámetro evaluado.
                  td Revisar el manejo para prevenir desequilibrios nutricionales o ambientales.

          p Nota: cada laboratorio establece rangos de referencia de acuerdo con la metodología utilizada y las condiciones de la región.

        .col-lg-6.col-11.col-md-10
          figure
            img(src='@/assets/curso/temas/t3/aco4.png', alt='')

      .row.justify-content-center(titulo="Interpretación integral del reporte")
        .col-lg-6.mb-3
          p La interpretación del análisis de suelo no debe realizarse evaluando cada parámetro de manera independiente. Es necesario analizar la relación existente entre el pH, la materia orgánica, la disponibilidad de nutrientes, la conductividad eléctrica y la capacidad de intercambio catiónico, ya que estos factores interactúan entre sí y determinan el comportamiento del suelo frente al desarrollo de los cultivos.

          p Por ejemplo, un suelo puede presentar altos contenidos de nutrientes, pero un pH inadecuado puede limitar su disponibilidad para las plantas. De igual manera, un bajo contenido de materia orgánica puede reducir la capacidad del suelo para retener agua y nutrientes, afectando la eficiencia de la fertilización.

          p La correcta interpretación de los resultados del laboratorio permite:

          p.mb-0 • Identificar limitantes de fertilidad.
          p.mb-0 • Definir estrategias de manejo del suelo.
          p.mb-0 • Optimizar la aplicación de correctivos y fertilizantes.
          p.mb-0 • Mejorar la eficiencia en el uso de los insumos.
          p.mb-0 • Reducir costos de producción.
          p.mb-0 • Incrementar la productividad de los cultivos.
          p.mb-0 • Disminuir el impacto ambiental asociado al uso inadecuado de fertilizantes.

        .col-lg-6.col-11.col-md-10
          figure
            img(src='@/assets/curso/temas/t3/aco5.png', alt='')

    separador
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1  Correctivos agrícolas

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t3/img06.png', alt='')

    p Los correctivos agrícolas son insumos utilizados para recuperar o mejorar las condiciones del suelo cuando estas limitan el crecimiento y desarrollo de los cultivos. Su empleo busca restablecer un ambiente adecuado para el funcionamiento del sistema radicular, favoreciendo el equilibrio de las propiedades químicas del suelo y creando condiciones que permitan un mejor aprovechamiento de los nutrientes presentes de forma natural o suministrados mediante la fertilización. De esta manera, los correctivos contribuyen a mantener la capacidad productiva del suelo y a mejorar la eficiencia de las prácticas de manejo agronómico. 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.mb-3
        img(src='@/assets/curso/temas/t3/img07.png', alt='')
      .col-lg-9.mb-3
        .row.justify-content-center.align-items-center.bg03.p-4.mb-3
          .col-lg-4.mb-3
            img(src='@/assets/curso/temas/t3/img08.svg', alt='')
          .col-lg-8
            p.mb-0 La necesidad de utilizar un correctivo debe establecerse a partir de la interpretación de los resultados del análisis de suelo, ya que este proporciona información objetiva sobre las condiciones de fertilidad y los factores que pueden restringir el desarrollo de los cultivos. La selección del material más adecuado depende de las características del suelo, del sistema de producción y de los requerimientos del cultivo, por lo que su utilización debe responder a criterios técnicos y no a aplicaciones rutinarias o generalizadas.
        p Además de contribuir al mejoramiento de las condiciones del suelo, el uso adecuado de correctivos favorece una mayor eficiencia en el aprovechamiento de los fertilizantes, promueve un desarrollo más uniforme de las plantas y ayuda a conservar la productividad del terreno a largo plazo. Su incorporación forma parte de las estrategias de manejo sostenible de la fertilidad, orientadas a optimizar el uso de los recursos, reducir pérdidas de nutrientes y fortalecer la sostenibilidad de los sistemas agrícolas.

    .cajon.color-primario.p-4.mb-4
      p.mb-0 Los correctivos agrícolas pueden clasificarse de acuerdo con su composición química y con la función que desempeñan en el mejoramiento de las condiciones del suelo. Cada tipo de correctivo posee características particulares que permiten atender diferentes limitantes de fertilidad identificadas mediante el análisis de suelo. La selección del material más apropiado debe considerar factores como el pH, la disponibilidad de nutrientes, la textura del suelo, el tipo de cultivo y las recomendaciones técnicas emitidas por el laboratorio o el profesional responsable.

    p A continuación, se presentan los principales grupos de correctivos agrícolas utilizados en los sistemas de producción:
    
    .correctivo-calcareo.mb-3
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Correctivos calcáreos

    p Los correctivos calcáreos son materiales ricos en calcio que se utilizan principalmente para disminuir la acidez del suelo mediante el incremento gradual del pH. Al reducir la acidez, mejoran la disponibilidad de nutrientes esenciales para las plantas y disminuyen la toxicidad ocasionada por elementos como el aluminio y el manganeso, frecuentes en suelos ácidos. Además, favorecen el desarrollo del sistema radicular, incrementan la actividad de los microorganismos benéficos y mejoran la eficiencia de los fertilizantes aplicados.
    p Entre los correctivos calcáreos más utilizados se encuentran:

    .row.align-items-center.justify-content-center.mb-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-3.tarjeta001
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t3/01.png', alt='')
          h5.text-center Cal agrícola (caliza molida)
          p.mb-0 Se obtiene mediante la trituración y molienda de rocas calizas. Es uno de los correctivos más utilizados por su disponibilidad, facilidad de aplicación y capacidad para reducir gradualmente la acidez del suelo. Su efectividad depende de la pureza y del tamaño de sus partículas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-3.tarjeta002
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t3/02.png', alt='')
          h5.text-center Carbonato de calcio (CaCO₃)
          p.mb-3 Permite elevar progresivamente el pH, disminuir los efectos de la acidez y aportar calcio al suelo. Su acción es relativamente lenta, pero segura y prolongada cuando se aplica en las dosis recomendadas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-3.tarjeta003
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t3/03.png', alt='')
          h5.text-center Óxido de calcio (CaO)
          p.mb-0 Conocido como cal viva, posee una alta capacidad neutralizante y actúa rápidamente al entrar en contacto con la humedad. Debido a que libera calor y puede causar lesiones, requiere precauciones especiales durante su manipulación y aplicación.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-3.tarjeta004
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t3/04.png', alt='')
          h5.text-center Hidróxido de calcio [Ca(OH)₂]
          p.mb-0 Denominado cal hidratada o apagada, se obtiene a partir de la reacción de la cal viva con agua. Su acción correctiva es rápida y eficaz; sin embargo, debe utilizarse en dosis controladas y bajo recomendación técnica para evitar alteraciones excesivas del pH.

    .correctivo-calcareo.mb-3
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Correctivos magnésicos
    
    p Los correctivos magnésicos se emplean cuando el suelo presenta simultáneamente problemas de acidez y bajos contenidos de magnesio, un macronutriente secundario indispensable para la formación de clorofila y el adecuado funcionamiento de los procesos de fotosíntesis. Estos materiales permiten corregir ambas limitantes de manera simultánea, favoreciendo el crecimiento y desarrollo de los cultivos.
    p El principal correctivo de este grupo es la cal dolomítica; material compuesto por carbonato de calcio y carbonato de magnesio que neutraliza la acidez del suelo y suministra magnesio disponible para las plantas.

    .correctivo-calcareo.mb-3
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Enmiendas orgánicas 
    
    p Las enmiendas orgánicas corresponden a materiales de origen vegetal o animal sometidos a procesos de estabilización o descomposición controlada. Su principal función es mejorar las propiedades físicas, químicas y biológicas del suelo, incrementando el contenido de materia orgánica y favoreciendo la actividad de los organismos edáficos. Aunque no sustituyen completamente a los correctivos minerales, constituyen una herramienta fundamental para el manejo integral de la fertilidad.

    p Entre las principales enmiendas orgánicas se encuentran:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-3
      .tarjeta.bg04.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t3/sly1.png' alt='')
        h4.text-center Compost
        p.text-center Producto obtenido mediante la descomposición controlada de residuos orgánicos.

      .tarjeta.bg04.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t3/sly2.png' alt='')
        h4.text-center Lombricompost o humus de lombriz
        p.text-center Material producido por la acción de lombrices, caracterizado por su alta estabilidad y riqueza microbiológica.

      .tarjeta.bg04.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t3/sly3.png' alt='')
        h4.text-center Estiércoles estabilizados
        p.text-center Residuos pecuarios previamente tratados para reducir microorganismos patógenos y estabilizar su composición.

      .tarjeta.bg04.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t3/sly4.png' alt='')
        h4.text-center #[em Bocashi]
        p.text-center Abono orgánico fermentado que combina residuos vegetales, estiércoles, minerales y microorganismos benéficos.

      .tarjeta.bg04.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-8.col-md-4
            img(src='@/assets/curso/temas/t3/sly5.png' alt='')
        h4.text-center Abonos orgánicos compostados
        p.text-center Materiales orgánicos transformados mediante procesos biológicos que aportan nutrientes y mejoran las condiciones del suelo.
   
    p Estas enmiendas favorecen la formación de agregados, incrementan la capacidad de retención de agua, mejoran la aireación y estimulan la actividad biológica, contribuyendo al mantenimiento de la fertilidad a largo plazo.

    .correctivo-calcareo.mb-3
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Otros correctivos agrícolas
    
    p Existen materiales que se utilizan para corregir problemas específicos del suelo distintos a la acidez, de acuerdo con las condiciones identificadas durante el diagnóstico. Su aplicación debe realizarse únicamente cuando exista una recomendación técnica que justifique su uso.
    p Entre ellos se destacan:


    .tarjeta--container.row.mb-4(data-aos='fade-right')
      .col-md.tarjeta.bg04.p-4
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t3/tar1.png', alt='')
        h3.text-center Fertilizantes minerales
        p Son productos obtenidos mediante procesos industriales o a partir de minerales naturales. Se caracterizan por presentar una composición química definida y una alta concentración de nutrientes, lo que permite una rápida disponibilidad para las plantas.

        p Ejemplos:
        p.mb-0 • Urea.
        p.mb-0 • Fosfato diamónico (DAP).
        p.mb-0 • Cloruro de potasio (KCl).
        p.mb-0 • Sulfato de amonio.
        p.mb-0 • Nitrato de calcio.

      .col-md.tarjeta.bg05.p-4(data-aos='fade-right')
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t3/tar2.png', alt='')
        h3.text-center Fertilizantes orgánicos
        p Proceden de materiales de origen vegetal o animal sometidos a procesos de descomposición o estabilización. Además de aportar nutrientes, contribuyen a incrementar el contenido de materia orgánica y a mejorar las propiedades físicas, químicas y biológicas del suelo.

        p Ejemplos:
        p.mb-0 • Compost.
        p.mb-0 • Lombricompost.
        p.mb-0 • Estiércoles estabilizados.
        p.mb-0 • Gallinaza compostada.
        p.mb-0 • #[em Bocashi].

      .col-md.tarjeta.bg06.text-white.p-4
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t3/tar3.png', alt='')
        h3.text-center Fertilizantes organominerales
        p Resultan de la combinación de fertilizantes minerales con materiales orgánicos. Buscan integrar las ventajas de ambas fuentes, proporcionando nutrientes de disponibilidad inmediata y de liberación gradual.

        p Ejemplos:
        p.mb-0 • Mezclas comerciales enriquecidas con compost.
        p.mb-0 • Fertilizantes minerales incorporados a materia orgánica estabilizada.

    .correctivo-calcareo.mb-3
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Según el número de nutrientes
    p Los fertilizantes se clasifican de acuerdo con la fuente de donde provienen los nutrientes.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8.mb-3 
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
          .row.justify-content-center(titulo="Fertilizantes simples")
            .col-lg-12.mb-3
              p Contienen un solo nutriente principal en alta concentración.
              p Ejemplos:
              p.mb-0 • Urea (N).
              p.mb-0 • Cloruro de potasio (K).
              p.mb-0 • Superfosfato simple (P).

          .row.justify-content-center(titulo="Fertilizantes compuestos")
            .col-lg-12.mb-3
              p Aportan dos o más nutrientes principales en un mismo producto, facilitando el suministro simultáneo de varios elementos esenciales.
              p Ejemplos:
              p.mb-0 • DAP (N y P).
              p.mb-0 • NPK 15 - 15 - 15.
              p.mb-0 • NPK 10 - 30 - 10.
              p.mb-0 • NPK 18 - 18 - 18.
      .col-lg-4
        img(src='@/assets/curso/temas/t3/img09.png', alt='')


    .correctivo-calcareo.mb-3
      img(src='@/assets/curso/temas/t3/mata.svg', alt='')
      span Según su estado físico o presentación
    p La presentación del fertilizante influye en la forma de aplicación, el almacenamiento y la velocidad de disponibilidad de los nutrientes.






















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
