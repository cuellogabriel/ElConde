// Lista de productos 
const opcionesHamburguesaSandwich = [
    { nombre: "Huevo Frito / Plancha", precio: 1300 },
    { nombre: "Cebolla Caramelizada", precio: 1300 },
    { nombre: "Panceta", precio: 1300 },
    { nombre: "Provolone", precio: 1300 },
    { nombre: "Roquefort", precio: 1300 },
    { nombre: "Muzzarella", precio: 1300 },
    { nombre: "Salsa De Tomate", precio: 1300 }
];

const opcionesAdicionales = {
  titulo: "Adicional",
  items: opcionesHamburguesaSandwich,
  gratis: false 
};

const productos = {
  pizzas: [
    {
      nombre: "Muzzarella",
      descripcion: "Salsa de tomate, Muzzarella , Oregano y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 15000 },
        { tipo: "Chica", precio: 13400 },
        { tipo: "Individual", precio: 10400 }
      ]
    },
     {
      nombre: "Doble Muzzarella",
      descripcion: "Salsa de tomate, Muzzarella , Oregano y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 22000 },
        { tipo: "Chica", precio: 20400 },
        { tipo: "Individual", precio: 17400 }
      ]
    },
    {
      nombre: "Fugazza Con Queso",
      descripcion: "Cebolla , Muzzarella , ajo , Peregil , Aceite De Oliva, Orégano y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 15000 },
        { tipo: "Chica", precio: 13000 },
        { tipo: "Individual", precio: 10000 }
      ]
    },
     {
      nombre: "Jamon",
      descripcion: "Salsa De Tomate , Jamon , Oregano y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 18300 },
        { tipo: "Chica", precio: 16300 },
        { tipo: "Individual", precio: 13200 }
      ]
    },
    {
      nombre: "Jamon y Morrones",
      descripcion: "Salsa De Tomate , Jamon , Morron , Oregano y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 19700 },
        { tipo: "Chica", precio: 17000 },
        { tipo: "Individual", precio: 14000 }
      ]
    },
    {
      nombre: "Jamon y Anana",
      descripcion: "Salsa De Tomate , Jamon, Muzzarella , Anana y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 19700 },
        { tipo: "Chica", precio: 17000 },
        { tipo: "Individual", precio: 14000 }
      ]
    },
    {
      nombre: "Jamon Crudo",
      descripcion: "Salsa De Tomate , Jamon Crudo , Muzzarella , Oregano , Aceite De Oliva y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 19700 },
        { tipo: "Chica", precio: 17000 },
        { tipo: "Individual", precio: 14000 }
      ]
    },
    {
      nombre: "Jamon Crudo - Rucula y Parmesano ",
      descripcion: "Salsa De Tomate , Jamon Crudo , Muzzarella , Oregano , Rucula , Parmesano , Aceite De Oliva y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 23100 },
       { tipo: "Chica", precio: 20300 },
       { tipo: "Individual", precio: 16500 }
      ]
    },
    {
      nombre: "Rucula y Parmesano",
      descripcion: " Salsa De Tomate , Muzzarella , Oregano , Rucula , Parmesano , Aceite De Oliva y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 19700 },
       { tipo: "Chica", precio: 17000 },
       { tipo: "Individual", precio: 14000 }
      ]
    },
    {
      nombre: " Panceta Ahumada",
      descripcion: "Salsa De Tomate , Muzzarella , Panceta , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 19700 },
       { tipo: "Chica", precio: 17000 },
       { tipo: "Individual", precio: 14000 }
      ]
    },
    {
      nombre: "Calabresa",
      descripcion: "Salsa De Tomate , Rodajas de Calabresa , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 18700 },
       { tipo: "Chica", precio: 16700 },
       { tipo: "Individual", precio: 13600 }
      ]
    },
    {
      nombre: "Provolone",
      descripcion: "Salsa De Tomate ,Muzzarella , Provolone , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 18700 },
       { tipo: "Chica", precio: 16700 },
       { tipo: "Individual", precio: 13600 }
      ]
    },
    {
      nombre: "Roquefort",
      descripcion: "Salsa De Tomate , Muzzarella , Roquefort , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 18700 },
       { tipo: "Chica", precio: 16700 },
       { tipo: "Individual", precio: 13600 }
      ]
    },
    {
      nombre: "Tres Quesos",
      descripcion: "Salsa De Tomate , Muzzarella , Provolone , Roquefort,  Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 20600 },
       { tipo: "Chica", precio: 18300 },
       { tipo: "Individual", precio: 15200 }
      ]
    },
    {
      nombre: "Margarita",
      descripcion: "Muzzarella , Cubos De Tomate , Hojas de Albahaca , Oregano , Aceite De Oliva y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 18300 },
       { tipo: "Chica", precio: 16300 },
       { tipo: "Individual", precio: 13400 }
      ]
    },
    {
      nombre: "Napolitana",
      descripcion: "Salsa De Tomate , Muzzarella , Rodajas De Tomate , Albahaca , Ajo , Peregil , Oregano , Aceite De Oliva y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 18300 },
       { tipo: "Chica", precio: 16300 },
       { tipo: "Individual", precio: 13400 }
      ]
    },
    {
      nombre: "Napolitana Con Jamon",
      descripcion: "Salsa De Tomate , Muzzarella , Jamon ,  Rodajas De Tomate , Albahaca , Ajo , Peregil , Oregano , Aceite De Oliva y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 19700 },
       { tipo: "Chica", precio: 17000 },
       { tipo: "Individual", precio: 14000 }
      ]
    },
    {
      nombre: "Napolitana Con Jamon y Huevo",
      descripcion: "Salsa De Tomate , Muzzarella , Jamon ,  Rodajas De Tomate, Huevo Duro Rallado, Ajo , Peregil , Aceite De Oliva , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 20600 },
       { tipo: "Chica", precio: 18300 },
       { tipo: "Individual", precio: 15000 }
      ]
    },
    {
      nombre: "Super Napolitana",
      descripcion: "Salsa De Tomate , Muzzarella , Jamon ,  Rodajas De Tomate, Morron , Huevo Duro Rallado, Ajo , Peregil , Aceite De Oliva , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 21800 },
       { tipo: "Chica", precio: 19400 },
       { tipo: "Individual", precio: 15800 }
      ]
    },
    {
      nombre: "El Conde",
      descripcion: "Salsa De Tomate , Muzzarella, Jmaon , Morron , Palmito , Huevo Duro , Salsa Golf ,  Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 23100 },
       { tipo: "Chica", precio: 20300 },
       { tipo: "Individual", precio: 16500 }
      ]
    },
    {
      nombre: "De Barrio Norte",
      descripcion: "Salsa De Tomate ,Muzzarella , Jamon , Rodajas De Tomate , Palmito , Salsa Golf , Albahaca , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 23100 },
       { tipo: "Chica", precio: 20300 },
       { tipo: "Individual", precio: 16500 }
      ]
    },
    {
      nombre: "Palmito",
      descripcion: "Salsa De Tomate , Muzzarella , Palmitos , Salsa Golf , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 20600 },
       { tipo: "Chica", precio: 18300 },
       { tipo: "Individual", precio: 15200 }
      ]
    },
    {
      nombre: "Palmito Con Jamon",
      descripcion: "Salsa De Tomate , Muzzarella , Palmitos , Salsa Golf , Jamon , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 21800 },
       { tipo: "Chica", precio: 19400 },
       { tipo: "Individual", precio: 15800 }
      ]
    },
    {
      nombre: "Criolla",
      descripcion: "Salsa De Tomate , Muzzarella , Cebolla , Jamon , Morron Picado Con Ajo , Peregil , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 20600 },
       { tipo: "Chica", precio: 18300 },
       { tipo: "Individual", precio: 15000 }
      ]
    },
    {
      nombre: "Champigñones",
      descripcion: "Salsa De Tomate , Champigñones , Muzzarella , Jamon Trozado, Ajo , Peregil , Oregano y Aceitunas.",
      precios: [
       { tipo: "Grande", precio: 20600 },
       { tipo: "Chica", precio: 18300 },
       { tipo: "Individual", precio: 1500 }
      ]
    },
    {
      nombre: "Faina",
      descripcion: "Faina Clasica",
      precios: [
       { tipo: "Porcion", precio: 2200 }
       
      ]
    },


  ],

  empanadas: [
    {
      nombre: "Carne Picada Suave",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
   {
      nombre: "Carne Picada Picante",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Carne Cuchillo Suave",
      precios: [
        { tipo: "Especial", precio: 2600 }
      ]
    },
    {
      nombre: "Carne Cuchillo Picante",
      precios: [
        { tipo: "Especial", precio: 2600 }
      ]
    },
    {
      nombre: "Fatay",
      precios: [
        { tipo: "Especial", precio: 2600 }
      ]
    },
    {
      nombre: "Pollo",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Pollo A La Crema De Verdeo",
      precios: [
        { tipo: "Especial", precio: 2600 }
      ]
    },
    {
      nombre: "Roquefort",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Cebolla y Queso",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Humita",
      precios: [
       { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Verdura",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Capresse",
      precios: [
        { tipo: "Clasica", precio: 2400 }
      ]
    },
    {
      nombre: "Jamon y Queso",
      precios: [
        { tipo: "Clasica", precio: 2400 }

      ]
    },
  ],

  calzones: [
    {
      nombre: "Napolitano",
      descripcion: "Muzzarella , Cubos De Tomate , Albahaca , Ajo , Perejil y Aceite De Oliva",
      precios: [
        { tipo: "", precio: 23000 }
      ]
    },
     {
      nombre: "Calabresa",
      descripcion: "Muzzarella , Longaniza , Cubos De Tomate y Aceite De Oliva",
      precios: [
        {  tipo: "", precio: 23000 }
      ]
    },
     {
      nombre: "Champigñones",
      descripcion: "Muzzarella , Jamon , Champigñones , Provenzal y Aceite De Oliva",
      precios: [
        { tipo: "", precio: 23000 }
      ]
    },
     {
      nombre: "El Conde",
      descripcion: "Muzzarella , Jamon , Morron , Palmito ,Huevo Duro , Salsa Golf , Ajo , Perejil y Aceite De Oliva",
      precios: [
        { tipo: "", precio: 24700 }
      ]
    }
  ],

  sandwiches: [
 {
    nombre: "Milanesa De Carne",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Milanesa De Pollo",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Churrasquito",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Pollo Grille",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Milanesa De Carne",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon.",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Milanesa De Pollo",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Churrasquito",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: opcionesAdicionales
  },
  {
    nombre: "Pollo Grille",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: opcionesAdicionales
  }
],
minutas: [
  {
    nombre: "Milanesa Sola",
    descripcion: "Milanesa de carne o Pollo , Sola.",
    precios: [
      { tipo: "Para 1", precio: 14000 },
      { tipo: "Para 2", precio: 18000 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 0 },
        { nombre: "Puré de Calabaza", precio: 0 },
        { nombre: "Ensalada Mixta", precio: 0 }
      ],
      gratis: true 
    }
  },
   {
    nombre: "Milanesa Napolitana",
    descripcion: "Milanesa de carne o Pollo Napolitana Con Queso y Salsa De Tomate + Jamón.",
    precios: [
      { tipo: "Para 1", precio: 17200 },
      { tipo: "Para 2", precio: 22100 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 0 },
        { nombre: "Puré de Calabaza", precio: 0 },
        { nombre: "Ensalada Mixta", precio: 0 }
      ],
      gratis: true 
    }
  },
   {
      nombre: "Tarta Tricolor",
      descripcion: "Acelga , Calabaza y Muzzarella",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Tarta Champigñones",
      descripcion: "Muzzarella , Jamon y Champigñones",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Tarta Jamon y Anana",
      descripcion: "Muzzarella , Jamon y Anana",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Tarta Capresse",
      descripcion: "Muzzarella , Cubos De Tomate y Albahaca",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Tarta De Palmito",
      descripcion: "Muzzarella , Jamon , Palmito y Salsa Golf",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Tortilla De Papa",
      descripcion: "",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Tortilla De Acelga",
      descripcion: "",
      precios: [
        { tipo: "", precio: 8700 }
      ]
    },
     {
      nombre: "Papas Fritas Grandes",
      descripcion: "",
      precios: [
        { tipo: "", precio: 6100 }
      ]
    }, {
      nombre: "Papas Fritas Medianas",
      descripcion: "",
      precios: [
        { tipo: "", precio: 5300 }
      ]
    },
     {
      nombre: "Papas Fritas Guarnicion",
      descripcion: "",
      precios: [
        { tipo: "", precio: 4900 }
      ]
    },
     {
      nombre: "Pure De Calabaza",
      descripcion: "",
      precios: [
        { tipo: "", precio: 4900 }
      ]
    },
     {
      nombre: "Ensalada Mixta",
      descripcion: "",
      precios: [
        { tipo: "", precio: 4900 }
      ]
    }
],

hamburguesas: [
  {
    nombre: "Hamburguesa Sola",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos",
    precios: [
      { tipo: "", precio: 8900 }
    ],
    opciones: opcionesAdicionales
  },
   {
    nombre: "Hamburguesa Lechuga y Tomate",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos",
    precios: [
      { tipo: "", precio: 10800 }
    ],
    opciones: opcionesAdicionales
  },
   {
    nombre: "Hamburguesa Jamon y Queso",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos",
    precios: [
      { tipo: "", precio: 10800 }
    ],
    opciones: opcionesAdicionales
  },
   {
    nombre: "Hamburguesa Completa",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos , Jamon , Queso , Lechuga y Tomate " ,
     precios: [
      { tipo: "", precio: 11800 } // Precio corregido, probablemente era un error
    ],
    opciones: opcionesAdicionales
  }
],

  bebidas: [
    {
      nombre: "Coca-Cola 1.25L",
      descripcion: "Gaseosa En Botella De PLastico De 1.25 litros.",
      precios: [
        { tipo: "Botella", precio: 3800 }
      ]
    },
   {
      nombre: "Coca-Cola 1.75L",
      descripcion: "Gaseosa En Botella De PLastico De 1.75 litros.",
      precios: [
        { tipo: "Botella", precio: 4800 }
      ]
    },
     {
      nombre: "Pepsi - 7up 1.50L",
      descripcion: "Gaseosa En Botella De PLastico De 1.50 litros.",
      precios: [
        { tipo: "Botella", precio: 3800 }
      ]
    },
     {
      nombre: "Sprite - Fanta 1.50L",
      descripcion: "Gaseosa En Botella De PLastico De 1.50 litros.",
      precios: [
        { tipo: "Botella", precio: 3800 }
      ]
    },
     {
      nombre: "Guiness - Artesanales",
      descripcion: "Cerveza En Lata De 473Ml",
      precios: [
        { tipo: "Lata", precio: 4000 }
      ]
    },
    {
      nombre: "Heineken - Stella - Miller - Imperial",
      descripcion: "Cerveza En Lata De 473Ml",
      precios: [
        { tipo: "Lata", precio: 3900 }
      ]
    },
    {
      nombre: "Quilmes - Grolsch - Andes",
      descripcion: "Cerveza En Lata De 473Ml",
      precios: [
        { tipo: "Lata", precio: 3400 }
      ]
    },
    {
      nombre: "Warsteiner - Budweiser - Brahama",
      descripcion: "Cerveza En Lata De 473Ml",
      precios: [
        { tipo: "Lata", precio: 3200 }
      ]
    }
  ],

  adicionales: [
    {
      nombre: "Huevo Frito / Plancha",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    },
    {
      nombre: "Cebolla Caramelizada",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    },
    {
      nombre: "Panceta",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    },
    {
      nombre: "Provolone",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    },
    {
      nombre: "Roquefort",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    },
    {
      nombre: "Muzzarella",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    },
    {
      nombre: "Salsa De Tomate",
      descripcion: "",
      precios: [
        { tipo: "", precio: 1300 }
      ]
    }
  ],

  fugazzetas: [
    {
      nombre: "Fugazzeta Clasica",
      descripcion: "Muzzarella, Jamón, Cebolla, Ajo , Perejil , Orégano y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 19300 },
        { tipo: "Chica", precio: 17900 }
      ]
    },
    {
      nombre: "Fugazzeta Cebolla Y Jamon",
      descripcion: "Muzzarella, Jamón, Cebolla, Jamon , Ajo , Perejil , Orégano , Aceite De Oliva y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 21800 },
        { tipo: "Chica", precio: 20300 }
      ]
    },
    {
      nombre: "Fugazzeta Cebolla , Jamon y Morrones",
      descripcion: "Muzzarella, Jamón, Cebolla, Jamon, Morron , Ajo , Perejil , Orégano , Aceite De Oliva y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 23500 },
        { tipo: "Chica", precio: 22200 }
      ]
    },
    {
      nombre: "Fugazzeta Cebolla , Jamon , Morrones y Huevo Duro",
      descripcion: "Muzzarella, Jamón, Cebolla, Jamon, Morron , Ajo , Perejil , Orégano , Huevo Duro , Aceite De Oliva y Aceitunas.",
      precios: [
        { tipo: "Grande", precio: 24500 },
        { tipo: "Chica", precio: 23100 }
      ]
    }
  ],
};



// Función para renderizar productos
function renderProductos(id, lista) {
  const contenedor = document.getElementById(id);
  let html = `<div class="accordion border-t border-yellow-500 py-2 md:py-4 open">
    <div class="flex justify-between items-center cursor-pointer" onclick="toggleAccordion(this)">
      <h2 class="text-base md:text-xl font-semibold text-yellow-400">${id.charAt(0).toUpperCase() + id.slice(1)}</h2>
      <span class="text-base md:text-xl">-</span>
    </div>
    <div class="accordion-content mt-2">`;

 lista.forEach(prod => {
  html += `
    <div class="producto-item mb-2 md:mb-4 flex flex-col md:flex-row items-start justify-between gap-2">
      <div class="flex-1">
        <p class="producto-nombre font-bold text-sm md:text-base">${prod.nombre}</p>
        <p class="producto-descripcion text-xs md:text-sm text-gray-300 mt-1">${prod.descripcion || ''}</p>
      </div>
      <div class="flex flex-row items-center gap-1 md:gap-2 ml-0 md:ml-4">
        ${prod.precios.map(p => {
          const onclickAction = prod.opciones 
            ? `abrirModalOpciones('${prod.nombre}', '${p.tipo}', ${p.precio}, '${btoa(JSON.stringify(prod.opciones))}')`
            : `agregarAlCarrito('${prod.nombre} (${p.tipo})', ${p.precio})`;
          return `<button onclick="${onclickAction}" class="glow-btn glow-hover px-2 py-1 bg-slate-900 text-yellow-300 border border-yellow-400 rounded text-xs md:text-base whitespace-nowrap">
            ${p.tipo} <span class="font-semibold">$${p.precio}</span>
          </button>`;
        }).join('')}
      </div>
    </div>
  `;
});

  if (id === 'pizzas') {
    html += `
      <div class="border-t border-gray-700 mt-4 pt-4">
        <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg max-w-md mx-auto">
          <h3 class="text-base md:text-lg font-bold mb-3 text-center text-yellow-300">🍕 Armá tu Pizza Mitad y Mitad</h3>
          <form id="formMitadMitad" class="flex flex-col gap-2 items-center" onsubmit="armarMitadMitad(event)">
            <div class="w-full flex flex-row gap-2">
              <div class="flex-1">
                <label class="block mb-1 font-semibold text-xs md:text-sm">Mitad 1:</label>
                <select id="mitad1" required class="w-full p-1 rounded text-black text-xs md:text-sm">
                  <!-- Opciones generadas por JS -->
                </select>
              </div>
              <div class="flex-1">
                <label class="block mb-1 font-semibold text-xs md:text-sm">Mitad 2:</label>
                <select id="mitad2" required class="w-full p-1 rounded text-black text-xs md:text-sm">
                  <!-- Opciones generadas por JS -->
                </select>
              </div>
            </div>
            <button type="submit" class="bg-slate-900 text-yellow-300 border border-yellow-400 px-3 py-1 rounded glow-hover font-bold w-24 text-center text-xs md:text-sm mt-2">
              Agregar
            </button>
          </form>
        </div>
      </div>`;
  }
  else if (id === 'empanadas') {
    html += `
      <div class="border-t border-gray-700 mt-4 pt-4">
        <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg max-w-2xl mx-auto">
          <h3 class="text-base md:text-lg font-bold mb-3 text-center text-yellow-300">🥟 Promo Docena de Empanadas</h3>
          <p class="text-center text-xs md:text-sm text-gray-300 mb-4">Elige 12 empanadas o más y obtén $200 de descuento en cada una.</p>
          <form id="formDocenaEmpanadas" class="flex flex-col gap-3 items-center" onsubmit="armarDocenaEmpanadas(event)">
            <div id="listaEmpanadasPromo" class="w-full grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
              <!-- Generado por JS -->
            </div>
            <p class="font-semibold text-sm md:text-base mt-2">Seleccionadas: <span id="conteoEmpanadas">0</span> (Mínimo 12)</p>
            <button id="btnAgregarDocena" type="submit" class="bg-slate-900 text-yellow-300 border border-yellow-400 px-4 py-2 rounded glow-hover font-bold w-32 text-center text-sm mt-2 opacity-50 cursor-not-allowed" disabled>Agregar</button>
          </form>
        </div>
      </div>`;
  }

  html += `</div></div>`;
  contenedor.innerHTML = html;
}

renderProductos('pizzas', productos.pizzas);
renderProductos('empanadas', productos.empanadas);
renderProductos('calzones', productos.calzones);
renderProductos('sandwiches', productos.sandwiches);
renderProductos('minutas', productos.minutas);
renderProductos('hamburguesas', productos.hamburguesas);
renderProductos('bebidas', productos.bebidas);
renderProductos('adicionales', productos.adicionales);
renderProductos('fugazzetas', productos.fugazzetas);


// Función de empanadas
function renderPromoEmpanadas() {
  const contenedor = document.getElementById('listaEmpanadasPromo');
  if (!contenedor) return;

  const empanadas = productos.empanadas;
  let html = '';

  empanadas.forEach(emp => {
    const precio = emp.precios[0].precio;
  html += `
      <div class="flex items-center justify-between">
        <label for="emp-${emp.nombre.replace(/\s+/g, '-')}" class="text-sm">${emp.nombre}</label>
        <input type="number" id="emp-${emp.nombre.replace(/\s+/g, '-')}" name="${emp.nombre}" data-precio="${precio}" min="0" max="50" value="0" oninput="actualizarConteoEmpanadas()" class="w-12 text-center bg-gray-700 rounded p-1">
      </div>`;
  });
  contenedor.innerHTML = html;
}
