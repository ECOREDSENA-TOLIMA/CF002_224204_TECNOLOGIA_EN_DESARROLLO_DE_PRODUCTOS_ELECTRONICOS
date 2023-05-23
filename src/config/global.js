export default {
  global: {
    componenteFormativo: 'Dispositivos electrónicos',
    descripcionCurso:
      'Los principales conceptos relacionados con los dispositivos electrónicos semiconductores son la base del hardware de la tecnología que nos rodea actualmente, por tanto, es fundamental comprender su funcionamiento y características para entender la dinámica de sistemas más complejos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Naturaleza de los semiconductores',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diodos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El diodo ideal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Circuitos con diodos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diodos de propósito especial',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Transistores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'El transistor BJT',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Transistor MOSFET',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tiristores',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Software de simulación',
        desarrolloContenidos: true,
        subMenu: [],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      texto:
        'López Dorado, A. (2011). Circuitos electrónicos básicos.. Editorial Universidad de Alcalá. ',
      tipo: 'Capítulo del libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53530',
    },
    {
      texto:
        'García, V. (2012). El Transistor MOSFET. Electrónica Práctica Aplicada [EPA].',
      tipo: 'Sitio web',
      link: 'https://www.diarioelectronicohoy.com/blog/el-transistor-mosfet',
    },
    {
      texto: 'SENSORICX. (s. f.). SCR: ¿Qué es y cómo funciona?',
      tipo: 'Sitio web',
      link: 'https://sensoricx.com/electronica-de-potencia/la-guia-maxima-scr/',
    },
  ],
  glosario: [
    {
      termino: 'Circuito',
      significado:
        ' conjunto de componentes eléctricos o electrónicos que, juntos e interconectados, proporcionan un camino cerrado para la circulación de la corriente.',
    },
    {
      termino: 'Corriente',
      significado:
        ' flujo de electrones a través de un material impulsado por la diferencia de potencial entre dos puntos o materiales.',
    },
    {
      termino: 'Electrón',
      significado:
        ' partícula subatómica con carga eléctrica negativa que orbita alrededor del núcleo del átomo.',
    },
    {
      termino: 'Hardware',
      significado:
        ' parte física y tangible de un sistema electrónico que facilita la interacción con el usuario.',
    },
    {
      termino: 'Polarización',
      significado:
        ' forma en la que se interconectan los pines de un dispositivo semiconductor a un polo de alimentación positivo o negativo.',
    },
    {
      termino: 'Voltaje',
      significado:
        ' diferencia de potencial eléctrico entre dos puntos de un circuito o dos materiales con carga eléctrica diferente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aranzabal, A. (2001). Electrónica básica. Curso de Electrónica Básica en Internet. Universidad del País Vasco. ',
      link: 'http://www.sc.ehu.es/sbweb/electronica/elec_basica/default.htm ',
    },
    {
      referencia:
        'Arboledas Brihuega, D. (2010). Electrónica básica.. RA-MA Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/106571',
    },
    {
      referencia:
        'Ingeniería Mecafenix. (2018). ¿Qué es un tiristor y cómo funciona? ',
      link:
        'https://www.ingmecafenix.com/electronica/que-es-un-tiristor-y-como-funciona/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz',
          cargo: 'Experto Temático',
          centro: 'Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González H.',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: '',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñones',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Revisión y Corrección de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
