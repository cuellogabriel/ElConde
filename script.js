 let productosCarrito = [];

  function toggleAccordion(el) {
    const acc = el.parentElement;
    acc.classList.toggle('open');
    const icon = el.querySelector('span');
    icon.textContent = acc.classList.contains('open') ? '-' : '+';
  }

  function agregarAlCarrito(nombre, precio) {
    const existente = productosCarrito.find(p => p.nombre === nombre);
    if (existente) {
      existente.cantidad += 1;
    } else {
      productosCarrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
  }

  function eliminarUnidad(index) {
    if (productosCarrito[index].cantidad > 1) {
      productosCarrito[index].cantidad -= 1;
    } else {
      productosCarrito.splice(index, 1);
    }
    actualizarCarrito();
  }

  function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const total = document.getElementById('total-carrito');
    lista.innerHTML = '';
    let totalPrecio = 0;

    const totalEmpanadas = productosCarrito
      .filter(p => p.nombre.toLowerCase().includes('empanada'))
      .reduce((sum, p) => sum + p.cantidad, 0);

    productosCarrito.forEach((p, index) => {
      let precioUnitario = p.precio;
      if (p.nombre.toLowerCase().includes('empanada') && totalEmpanadas >= 12) {
        precioUnitario -= 200;
      }
      const subtotal = precioUnitario * p.cantidad;
      totalPrecio += subtotal;

      const li = document.createElement('li');
      li.innerHTML = `${p.cantidad} × ${p.nombre} - $${subtotal} <button onclick="eliminarUnidad(${index})" class="text-red-400 ml-2">✖</button>`;
      lista.appendChild(li);
    });

    total.textContent = totalPrecio;
    document.getElementById('carrito').classList.toggle('hidden', productosCarrito.length === 0);
  }

  function mostrarFormulario() {
    document.getElementById('formularioPedido').classList.remove('hidden');
  }

  function enviarPedido(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const pago = document.getElementById('pago').value;

    const totalEmpanadas = productosCarrito
      .filter(p => p.nombre.toLowerCase().includes('empanada'))
      .reduce((sum, p) => sum + p.cantidad, 0);

    const productosTexto = productosCarrito.map(p => {
      let precioUnitario = p.precio;
      if (p.nombre.toLowerCase().includes('empanada') && totalEmpanadas >= 12) {
        precioUnitario -= 200;
      }
      const subtotal = precioUnitario * p.cantidad;
      return `• ${p.cantidad} × ${p.nombre} - $${subtotal}`;
    }).join('\n');

    const total = productosCarrito.reduce((acc, p) => {
      let precioUnitario = p.precio;
      if (p.nombre.toLowerCase().includes('empanada') && totalEmpanadas >= 12) {
        precioUnitario -= 200;
      }
      return acc + precioUnitario * p.cantidad;
    }, 0);

    const mensaje = encodeURIComponent(`🛒 Pedido El Conde\nCliente: ${nombre} ${apellido}\nTel: ${telefono}\nDirección: ${direccion}\nPago: ${pago}\n\nProductos:\n${productosTexto}\n\nTotal: $${total}`);
    window.open(`https://wa.me/541134075054?text=${mensaje}`, '_blank');
    productosCarrito = [];
    actualizarCarrito();
    document.getElementById('formularioPedido').classList.add('hidden');
  }

  // Slider de promociones
  document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slider = document.getElementById('slider');
    const slides = slider?.children;
    const totalSlides = slides?.length || 0;

    function moverSlide(dir) {
      if (!slider) return;
      slideIndex = (slideIndex + dir + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${slideIndex * slider.offsetWidth}px)`;
    }

    document.getElementById('nextSlide')?.addEventListener('click', () => moverSlide(1));
    document.getElementById('prevSlide')?.addEventListener('click', () => moverSlide(-1));
    setInterval(() => moverSlide(1), 5000);
  });

  const preciosPizzas = {
    "Muzzarella": 4200,
    "Napolitana": 4200,
    "Palmito": 4200,
    "Super Napolitana": 4200
  };

  function armarMitadMitad(e) {
    e.preventDefault();
    const mitad1 = document.getElementById('mitad1').value;
    const mitad2 = document.getElementById('mitad2').value;
    if (mitad1 && mitad2) {
      const precioMitad1 = preciosPizzas[mitad1] ? preciosPizzas[mitad1] / 2 : 0;
      const precioMitad2 = preciosPizzas[mitad2] ? preciosPizzas[mitad2] / 2 : 0;
      const precioTotal = precioMitad1 + precioMitad2;
      const nombre = `Pizza Mitad ${mitad1} / Mitad ${mitad2}`;
      agregarAlCarrito(nombre, precioTotal);
      alert(`¡Pizza mitad y mitad agregada al carrito!\nPrecio: $${precioTotal}`);
      document.getElementById('formMitadMitad').reset();
    }
  }