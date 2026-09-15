export default {
  global: {
    Name: 'Ejecución del muestreo de suelos y manejo técnico de insumos agrícolas',
    Description:
      'El componente formativo desarrolla conocimientos y capacidades para ejecutar el muestreo de suelos agrícolas mediante procedimientos estandarizados de recolección, homogeneización, identificación, conservación y transporte de muestras. Además, aborda la interpretación de recomendaciones, los correctivos y fertilizantes, y el cálculo de dosis y conversión de unidades, promoviendo el manejo eficiente de la fertilidad, el uso de insumos y el cumplimiento de criterios técnicos, ambientales y de seguridad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ejecución del procedimiento de muestreo de suelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Preparación del sitio de muestreo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Recolección de submuestras',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elaboración de muestras compuestas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Homogeneización de la muestra',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo, conservación y transporte de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación y rotulado de muestras',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de embalaje y conservación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Transporte de muestras al laboratorio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Interpretación de recomendaciones técnicas para el manejo del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Correctivos agrícolas.',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fertilizantes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Relación entre análisis de suelo y fertilización',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Dosificación y suministro de insumos al suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conversión de unidades y áreas de terreno',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Cálculo de dosis de correctivos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cálculo de dosis de fertilizantes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Aplicación técnica de insumos al suelo según recomendaciones',
            hash: 't_4_4',
          },
        ],
      },
    ],

    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis de suelo',
      significado:
        'Procedimiento de laboratorio mediante el cual se determinan las propiedades físicas y químicas del suelo para evaluar su fertilidad y apoyar la toma de decisiones agronómicas.',
    },
    {
      termino: 'Correctivo agrícola',
      significado:
        'Material aplicado al suelo para corregir limitaciones químicas, como la acidez o la sodicidad, y mejorar las condiciones para el desarrollo de los cultivos.',
    },
    {
      termino: 'Cuarteo',
      significado:
        'Técnica utilizada para reducir el volumen de una muestra de suelo sin perder su representatividad, dividiéndola sucesivamente hasta obtener la cantidad requerida para el análisis.',
    },
    {
      termino: 'Dosificación',
      significado:
        'Determinación de la cantidad de correctivos o fertilizantes que debe aplicarse en un terreno, de acuerdo con las recomendaciones técnicas y el área del cultivo.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Proceso de acondicionar y proteger las muestras de suelo mediante recipientes y materiales adecuados para conservar su integridad durante el almacenamiento y transporte.',
    },
    {
      termino: 'Fertilizante',
      significado:
        'Insumo agrícola que aporta nutrientes esenciales para favorecer el crecimiento, desarrollo y productividad de los cultivos.',
    },
    {
      termino: 'Homogeneización',
      significado:
        'Proceso de mezclar completamente las submuestras recolectadas para obtener una muestra compuesta uniforme y representativa del lote.',
    },
    {
      termino: 'Interpretación de resultados',
      significado:
        'Análisis técnico del reporte de laboratorio para identificar el estado de fertilidad del suelo y definir recomendaciones de manejo agronómico.',
    },
    {
      termino: 'Muestra compuesta',
      significado:
        'Muestra obtenida al combinar y homogeneizar varias submuestras recolectadas en un área homogénea, representando las condiciones promedio del lote.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Procedimiento técnico mediante el cual se recolectan muestras representativas del suelo para su análisis físico y químico.',
    },
    {
      termino: 'Recomendación técnica',
      significado:
        'Orientación emitida por un profesional o laboratorio con base en el análisis del suelo, que indica las prácticas de manejo y las dosis de correctivos o fertilizantes requeridas.',
    },
    {
      termino: 'Rotulado',
      significado:
        'Identificación de la muestra mediante información como código, predio, lote, fecha, profundidad y responsable, garantizando su correcta trazabilidad.',
    },
    {
      termino: 'Submuestra',
      significado:
        'Porción individual de suelo recolectada en un punto específico del lote, que posteriormente se integra con otras para conformar la muestra compuesta.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de realizar el seguimiento de la muestra durante todas las etapas del proceso, desde la recolección hasta la entrega e interpretación de los resultados del laboratorio.',
    },
    {
      termino: 'Transporte de muestras',
      significado:
        'Actividad de trasladar las muestras al laboratorio bajo condiciones adecuadas de conservación para evitar alteraciones que afecten la confiabilidad del análisis.',
    },
  ],
  referencias: [
    {
      referencia: 'CalcuFácil. (s. f.). Calculadora dosis de fertilizante.',
      link: 'https://calcufacil.com/calculadora-dosis-de-fertilizante/',
    },
    {
      referencia:
        'Castellanos, J. Z. (s. f.). Manejo y corrección de la acidez de los suelos. Intagri S.C.',
      link: 'https://www.intagri.com/articulos/suelos/manejo-y-correccion-de-acidez-de-suelo',
    },
    {
      referencia:
        'EcoArmonía. (s. f.). Fertilizantes: tipos y su importancia en la agricultura.',
      link: 'https://ecoarmonia.com/fertilizantes-tipos-y-su-importancia-en-la-agricultura/',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (11 de junio de 2020). Manejo ecológico del suelo - Cómo tomar una muestra [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=qBdp2waTIsI',
    },
    {
      referencia:
        'González, R. (26 de septiembre de 2024). Tipos y clasificación de fertilizantes: ¿Cuál es el adecuado para tu cultivo? Agroenlace.',
      link: 'https://agroenlace.co/tipos-y-clasificacion-de-fertilizantes/',
    },
    {
      referencia:
        'González, R. (5 de noviembre de 2025). Incorporación de sustancias orgánicas al suelo: Guía práctica para lograr cosechas más fértiles. Agroenlace.',
      link: 'https://agroenlace.co/incorporacion-de-sustancias-organicas/',
    },
    {
      referencia:
        'Portal Frutícola. (13 de mayo de 2026). Guía de clasificación de fertilizantes agrícolas.',
      link: 'https://www.portalfruticola.com/noticias/2026/05/13/fertilizantes-agricolas/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
