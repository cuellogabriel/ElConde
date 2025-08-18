# El Conde - Menú Digital Interactivo

Este proyecto es un menú digital interactivo desarrollado para la pizzería y casa de empanadas "El Conde". El objetivo principal es ofrecer a los clientes una experiencia moderna y fluida para explorar el catálogo de productos, personalizar sus pedidos y enviarlos directamente al local a través de WhatsApp.

## ✨ Características Principales

El sistema fue diseñado desde cero pensando en la facilidad de uso tanto para el cliente como para el administrador del negocio.

*   **Catálogo de Productos Dinámico:** Todo el menú se gestiona desde un único archivo (`productos.js`), permitiendo agregar, modificar o eliminar productos y precios de forma centralizada y sin tocar el código principal de la página.
*   **Carrito de Compras Interactivo:** Los clientes pueden agregar productos, ver el total actualizado en tiempo real y modificar las cantidades fácilmente. El carrito está siempre visible una vez que se agrega el primer producto.
*   **Buscador de Productos en Tiempo Real:** Un buscador potente que filtra el menú instantáneamente a medida que el cliente escribe, facilitando la localización de sus platos favoritos.
*   **Alta Personalización de Pedidos:**
    *   **Pizzas Mitad y Mitad:** Una función especial permite a los clientes crear una pizza con dos sabores diferentes, calculando el precio proporcionalmente.
    *   **Promo Docena de Empanadas:** Un formulario inteligente aplica un descuento automático por unidad cuando el cliente selecciona 12 o más empanadas.
    *   **Personalización de Promociones:** Las promociones que incluyen bebidas o empanadas abren un modal para que el cliente elija sus preferidas.
    *   **Adicionales y Acompañamientos:** Los sándwiches, hamburguesas y minutas se pueden personalizar con agregados (con o sin costo) o eligiendo una guarnición gratuita.
*   **Flujo de Pedido Completo y Sencillo:**
    1.  El cliente finaliza la compra.
    2.  Elige entre **"Enviar a Domicilio"** o **"Retirar en Local"**.
    3.  Completa un formulario simple con sus datos.
    4.  Al confirmar, se genera un **mensaje de WhatsApp pre-formateado** con todo el detalle del pedido, listo para ser enviado al número del local.
*   **Diseño Moderno y Responsivo:** Construido con **TailwindCSS**, el diseño es 100% adaptable a dispositivos móviles, tablets y computadoras de escritorio, garantizando una experiencia de usuario óptima en cualquier pantalla.
*   **Componentes Visuales Atractivos:**
    *   Sliders de promociones y productos destacados.
    *   Sección de reseñas de clientes con scroll automático.
    *   Acordeones para organizar las categorías del menú de forma limpia.

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Para la estructura semántica del sitio.
*   **CSS3:** Para estilos personalizados, animaciones y efectos visuales.
*   **TailwindCSS:** Framework CSS para un desarrollo rápido y un diseño responsivo consistente.
*   **JavaScript (Vanilla JS):** Para toda la lógica del sitio, incluyendo la interactividad del carrito, los modales, el buscador y la generación del pedido. No se usaron frameworks complejos para mantener el proyecto ligero y rápido.
*   **Font Awesome:** Para la iconografía.

## 📂 Estructura del Proyecto

*   `index.html`: El archivo principal que contiene toda la estructura de la página.
*   `productos.js`: La "base de datos" del menú. Aquí se define cada producto, su descripción, precios y opciones de personalización.
*   `script.js`: El cerebro de la aplicación. Maneja todas las interacciones del usuario, la lógica del carrito y el flujo de pedidos.
*   `styles.css`: Contiene los estilos personalizados que complementan a TailwindCSS, como las animaciones de los carruseles.

Este proyecto no solo moderniza la imagen de "El Conde", sino que también optimiza el proceso de toma de pedidos, reduciendo errores y agilizando la comunicación con el cliente.
