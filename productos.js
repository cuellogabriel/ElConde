// Lista de productos 
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
        { tipo: "Unico", precio: 23000 }
      ]
    },
     {
      nombre: "Calabresa",
      descripcion: "Muzzarella , Longaniza , Cubos De Tomate y Aceite De Oliva",
      precios: [
        {  tipo: "Unico", precio: 23000 }
      ]
    },
     {
      nombre: "Champigñones",
      descripcion: "Muzzarella , Jamon , Champigñones , Provenzal y Aceite De Oliva",
      precios: [
        { tipo: "Unico", precio: 23000 }
      ]
    },
     {
      nombre: "El Conde",
      descripcion: "Muzzarella , Jamon , Morron , Palmito ,Huevo Duro , Salsa Golf , Ajo , Perejil y Aceite De Oliva",
      precios: [
        { tipo: "Unico", precio: 24700 }
      ]
    },
  ],

  sandwiches: [
 {
    nombre: "Milanesa De Carne",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false 
    }
  },
  {
    nombre: "Milanesa De Pollo",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false 
    }
  },
  {
    nombre: "Churrasquito",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false 
    }
  },
  {
    nombre: "Pollo Grille",
    descripcion: "Simple , Pan De Pizza",
    precios: [
      { tipo: "20CM", precio: 9800 },
      { tipo: "30CM", precio: 11800 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false 
    }
  },
  {
    nombre: "Milanesa De Carne",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon.",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false
    }
  },
  {
    nombre: "Milanesa De Pollo",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false
    }
  },
  {
    nombre: "Churrasquito",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false
    }
  },
  {
    nombre: "Pollo Grille",
    descripcion: "Completo , Pan De Pizza , Lechuga , Tomate , Muzzarella , Jamon",
    precios: [
      { tipo: "20CM", precio: 11800 },
      { tipo: "30CM", precio: 13700 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 }
      ],
      gratis: false
    }
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
        { nombre: "Ensalada", precio: 0 }
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
        { nombre: "Ensalada", precio: 0 }
      ],
      gratis: true 
    }
  }
 
],
hamburguesas: [
  {
    nombre: "Hamburguesa Sola",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos",
    precios: [
      { tipo: "Simple", precio: 8900 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 },
        { nombre: "Huevo Frito / Plancha", precio: 1300 },
        { nombre: "Cebolla Caramelizada", precio: 1300 },
        { nombre: "Panceta", precio: 1300 },
        { nombre: "Provolone", precio: 1300 },
        { nombre: "Roquefort", precio: 1300 },
        { nombre: "Muzzarella", precio: 1300 },
        { nombre: "Salsa De Tomate", precio: 1300 }
      ],
      gratis: false
    }
  },
   {
    nombre: "Hamburguesa Lechuga y Tomate",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos",
    precios: [
      { tipo: "Simple", precio: 10800 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 },
        { nombre: "Huevo Frito / Plancha", precio: 1300 },
        { nombre: "Cebolla Caramelizada", precio: 1300 },
        { nombre: "Panceta", precio: 1300 },
        { nombre: "Provolone", precio: 1300 },
        { nombre: "Roquefort", precio: 1300 },
        { nombre: "Muzzarella", precio: 1300 },
        { nombre: "Salsa De Tomate", precio: 1300 }
      ],
      gratis: false
    }
  },
   {
    nombre: "Hamburguesa Jamon y Queso",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos",
    precios: [
      { tipo: "Simple", precio: 10800 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 },
        { nombre: "Huevo Frito / Plancha", precio: 1300 },
        { nombre: "Cebolla Caramelizada", precio: 1300 },
        { nombre: "Panceta", precio: 1300 },
        { nombre: "Provolone", precio: 1300 },
        { nombre: "Roquefort", precio: 1300 },
        { nombre: "Muzzarella", precio: 1300 },
        { nombre: "Salsa De Tomate", precio: 1300 }
      ],
      gratis: false
    }
  },
   {
    nombre: "Hamburguesa Completa",
    descripcion: "Medallon De Carne Seleccionada De 200 Gramos , Jamon , Queso , Lechuga y Tomate " ,
     precios: [
      { tipo: "Completa", precio: 8900 }
    ],
    opciones: {
      titulo: "Acompañamiento",
      items: [
        { nombre: "Papas Fritas", precio: 2500 },
        { nombre: "Puré de Calabaza", precio: 4900 },
        { nombre: "Ensalada", precio: 4900 },
        { nombre: "Huevo Frito / Plancha", precio: 1300 },
        { nombre: "Cebolla Caramelizada", precio: 1300 },
        { nombre: "Panceta", precio: 1300 },
        { nombre: "Provolone", precio: 1300 },
        { nombre: "Roquefort", precio: 1300 },
        { nombre: "Muzzarella", precio: 1300 },
        { nombre: "Salsa De Tomate", precio: 1300 }
      ],
      gratis: false
    }
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
      nombre: "Porción de Fainá",
      descripcion: "Porción de fainá tradicional.",
      precios: [
        { tipo: "Unidad", precio: 500 }
      ]
    },
    {
      nombre: "Salsa Extra",
      descripcion: "Salsa de tomate casera.",
      precios: [
        { tipo: "Unidad", precio: 300 }
      ]
    }
  ],

  fugazzetas: [
    {
      nombre: "Fugazzeta Rellena",
      descripcion: "Muzzarella, jamón, cebolla, orégano y aceitunas.",
      precios: [
        { tipo: "Grande", precio: 19000 },
        { tipo: "Chica", precio: 17000 }
      ]
    },
    {
      nombre: "Fugazzeta Rellena con Morrones",
      descripcion: "Muzzarella, jamón, morrones, cebolla, orégano y aceitunas.",
      precios: [
        { tipo: "Grande", precio: 20500 },
        { tipo: "Chica", precio: 18500 }
      ]
    }
  ],
};



// Función para renderizar productos
function renderProductos(id, lista) {
  const contenedor = document.getElementById(id);
  let html = `<div class="accordion border-t border-yellow-500 py-2 md:py-4 open">
    <div class="flex justify-between items-center cursor-pointer" onclick="toggleAccordion(this)">
      <h2 class="text-base md:text-xl font-semibold">${id.charAt(0).toUpperCase() + id.slice(1)}</h2>
      <span class="text-base md:text-xl">-</span>
    </div>
    <div class="accordion-content mt-2">`;

 lista.forEach(prod => {
  html += `
    <div class="mb-2 md:mb-4 flex flex-col md:flex-row items-start justify-between gap-2">
      <div class="flex-1">
        <p class="font-bold text-sm md:text-base">${prod.nombre}</p>
        <p class="text-xs md:text-sm text-gray-300 mt-1">${prod.descripcion}</p>
        ${prod.opciones ? `
          <div class="mt-2 flex items-center gap-2">
            <label class="block font-semibold text-xs md:text-sm whitespace-nowrap">${prod.opciones.titulo}:</label>
            <select class="w-48 p-1 rounded text-white bg-gray-700 border border-gray-500 text-xs md:text-sm acomp-select" data-producto="${prod.nombre}" data-gratis="${prod.opciones.gratis}">
              <option value="">Sin acompañamiento</option>
              ${prod.opciones.items.map(opt => `
                <option value="${opt.nombre}" data-precio="${opt.precio}">${opt.nombre} ${prod.opciones.gratis ? '(sin cargo)' : `(+ $${opt.precio})`}</option>
              `).join('')}
            </select>
          </div>
        ` : ''}
      </div>
      <div class="flex flex-row items-center gap-1 md:gap-2 ml-0 md:ml-4">
        ${prod.precios.map(p => `
          <button onclick="agregarConAcomp(this, '${prod.nombre} (${p.tipo})', ${p.precio})" class="glow-btn glow-hover px-2 py-1 bg-slate-900 text-yellow-300 border border-yellow-400 rounded text-xs md:text-base whitespace-nowrap">
            ${p.tipo} <span class="font-semibold">$${p.precio}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
});

  html += `</div></div>`;
  contenedor.innerHTML = html;
}

function agregarConAcomp(btn, nombre, precioBase) {
  const parent = btn.closest('.mb-2, .md\\:mb-4');
  const select = parent.querySelector('.acomp-select');
  let nombreFinal = nombre;
  let precioFinal = precioBase;
  if (select && select.value) {
    const opcion = select.options[select.selectedIndex];
    const precioAcomp = Number(opcion.getAttribute('data-precio'));
    const gratis = select.getAttribute('data-gratis') === "true";
    nombreFinal += ` + ${select.value}`;
    if (!gratis) precioFinal += precioAcomp;
  }
  agregarAlCarrito(nombreFinal, precioFinal);
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
