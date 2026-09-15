<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos sobre ejecución del muestreo de suelos y manejo técnico de insumos agrícolas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos del aprendiz sobre los procedimientos técnicos para la ejecución del muestreo de suelos agrícolas, el manejo, conservación y transporte de muestras, la interpretación de recomendaciones técnicas derivadas del análisis de suelo, y el cálculo y aplicación de correctivos y fertilizantes de acuerdo con criterios agronómicos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de realizar correctamente el muestreo de suelos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo de trabajo en campo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener una muestra representativa para el análisis de laboratorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir el uso de herramientas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la compactación del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 2,
          texto: 'Antes de extraer una submuestra se debe:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Humedecer el suelo artificialmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar fertilizante al punto de muestreo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Retirar los residuos superficiales del sitio de muestreo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mezclar el suelo con agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 3,
          texto: 'Una submuestra corresponde a:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Toda la muestra enviada al laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una pequeña porción de suelo tomada en un punto del lote.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El análisis realizado por el laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El fertilizante recomendado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 4,
          texto: 'La muestra compuesta se obtiene mediante:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La mezcla uniforme de varias submuestras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La mezcla de diferentes fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La toma de una única muestra profunda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La combinación de muestras de distintos cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 5,
          texto: '¿Cuál es la finalidad de homogeneizar la muestra?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el peso de la muestra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uniformar el material para mejorar su representatividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Secar completamente el suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la materia orgánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 6,
          texto:
            '¿Qué procedimiento permite reducir el volumen de una muestra sin perder representatividad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Filtrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tamizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuarteo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compactación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 7,
          texto:
            '¿Cuál de los siguientes datos debe aparecer en el rótulo de una muestra?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio del fertilizante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Código de la muestra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Nombre del laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipo de maquinaria utilizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 8,
          texto: 'El principal objetivo del rotulado es:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el color de la muestra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar el secado del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la fertilidad del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar la identificación y la trazabilidad de la muestra.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 9,
          texto: 'Durante el transporte de las muestras es importante:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclar diferentes muestras en una misma bolsa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exponerlas al sol para secarlas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Abrir constantemente los empaques.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protegerlas de contaminación y humedad excesiva.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },

        {
          id: 10,
          texto: '¿Cuál es el propósito principal del análisis de suelo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el rendimiento del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar las características químicas y la disponibilidad de nutrientes del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar plagas presentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 11,
          texto: 'Los correctivos agrícolas se utilizan principalmente para:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la humedad del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar malezas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Corregir limitaciones químicas del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el tamaño de las semillas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 12,
          texto: '¿Cuál de los siguientes productos es un correctivo calcáreo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Urea',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cloruro de potasio',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cal dolomítica',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fosfato diamónico',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 13,
          texto: 'La función principal de un fertilizante es:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar únicamente la textura del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aportar nutrientes esenciales para el cultivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar microorganismos del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la humedad del terreno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes nutrientes favorece principalmente el crecimiento vegetativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fósforo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Potasio',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nitrógeno',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 15,
          texto:
            'Para calcular correctamente la cantidad total de fertilizante se requiere conocer:',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El área del lote y la dosis recomendada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La temperatura ambiente únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de trabajadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 16,
          texto:
            'Si la recomendación técnica es aplicar 250 kg/ha y el lote tiene 4 ha, la cantidad requerida es:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '500 kg.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1.000 kg.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '750 kg.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1.250 kg.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 17,
          texto:
            '¿Qué método de aplicación consiste en distribuir el fertilizante sobre toda la superficie del terreno?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al voleo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En bandas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fertirriego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Localizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 18,
          texto: 'La aplicación localizada se caracteriza por:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distribuir el fertilizante uniformemente sobre todo el lote.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colocar el fertilizante cerca de la zona radicular.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicarlo únicamente mediante riego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mezclarlo con el suelo de toda la parcela.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es uno de los beneficios de aplicar correctamente los insumos agrícolas?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar las pérdidas por lixiviación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar el aprovechamiento de los nutrientes por el cultivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el desperdicio de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el crecimiento radicular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
        {
          id: 20,
          texto:
            'La interpretación de las recomendaciones técnicas del análisis de suelo permite:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elegir únicamente el laboratorio de análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar el precio de venta de la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar el suelo únicamente por su color.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir el manejo adecuado de correctivos y fertilizantes según las condiciones del suelo y el cultivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la ejecución del muestreo de suelos y manejo técnico de insumos agrícolas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
