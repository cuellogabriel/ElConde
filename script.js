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
    productosCarrito.forEach((p, index) => {
      const subtotal = p.precio * p.cantidad;
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

    const productosTexto = productosCarrito.map(p => {
      const subtotal = p.precio * p.cantidad;
      return `• ${p.cantidad} × ${p.nombre} - $${subtotal}`;
    }).join('\n');

    const total = productosCarrito.reduce((acc, p) => {
      return acc + p.precio * p.cantidad;
    }, 0);

    const mensaje = encodeURIComponent(`🛒 Pedido El Conde\nCliente: ${nombre} ${apellido}\nTel: ${telefono}\nDirección: ${direccion}\nPago: ${pago}\n\nProductos:\n${productosTexto}\n\nTotal: $${total}`);
    window.open(`https://wa.me/541134075054?text=${mensaje}`, '_blank');

    // datos de pago 
    const modal = document.getElementById('modalPago');
    const modalTitulo = document.getElementById('modalPagoTitulo');
    const modalDato = document.getElementById('modalPagoDato');

    if (pago === 'Transferencia') {
      modalTitulo.textContent = 'Pago por Transferencia';
      modalDato.textContent = '0000003100067553675592'; 
      modal.classList.remove('hidden');
      document.getElementById('formularioPedido').classList.add('hidden');
    } else if (pago === 'MercadoPago') {
      modalTitulo.textContent = 'Pago con MercadoPago';
      modalDato.textContent = 'elcondepizza.mp'; 
      modal.classList.remove('hidden');
      document.getElementById('formularioPedido').classList.add('hidden');
    } else {
      alert('¡Pedido enviado con éxito!');
      productosCarrito = [];
      actualizarCarrito();
      document.getElementById('formularioPedido').classList.add('hidden');
    }
  }

  // Slider de promociones y carga de la promo de empanadas
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderPromoEmpanadas === 'function') {
      renderPromoEmpanadas();
    }

    // Lógica del slider
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

  // PROMO DOCENA

  function actualizarConteoEmpanadas() {
    const inputs = document.querySelectorAll('#listaEmpanadasPromo input[type="number"]');
    let total = 0;
    inputs.forEach(input => {
      total += parseInt(input.value) || 0;
    });

    document.getElementById('conteoEmpanadas').textContent = total;
    const btn = document.getElementById('btnAgregarDocena');

    if (total >= 12) {
      btn.disabled = false;
      btn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
      btn.disabled = true;
      if (!btn.classList.contains('opacity-50')) {
        btn.classList.add('opacity-50', 'cursor-not-allowed');
      }
    }
  }

  function armarDocenaEmpanadas(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('#listaEmpanadasPromo input[type="number"]');
    let totalCantidad = 0;
    let precioTotal = 0;
    let detalleEmpanadas = [];

    inputs.forEach(input => {
      const cantidad = parseInt(input.value) || 0;
      if (cantidad > 0) {
        const precioUnitario = parseFloat(input.getAttribute('data-precio'));
        totalCantidad += cantidad;
        precioTotal += cantidad * (precioUnitario - 200); 
        detalleEmpanadas.push(`${cantidad} de ${input.name}`);
      }
    });

    if (totalCantidad < 12) {
      alert('Debes seleccionar al menos 12 empanadas para acceder a la promoción.');
      return;
    }

    const nombreProducto = `Promo Empanadas (${detalleEmpanadas.join(', ')})`;
    agregarAlCarrito(nombreProducto, precioTotal);
    alert('¡Promoción de empanadas agregada al carrito!');
    document.getElementById('formDocenaEmpanadas').reset();
    actualizarConteoEmpanadas();
  }
//  MODAL DE PAGO 

  function copiarAlPortapapeles() {
    const dato = document.getElementById('modalPagoDato').textContent;
    navigator.clipboard.writeText(dato).then(() => {
      const mensajeCopiado = document.getElementById('copiadoMensaje');
      mensajeCopiado.textContent = '¡Copiado!';
      setTimeout(() => {
        mensajeCopiado.textContent = '';
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar: ', err);
      alert('No se pudo copiar el texto.');
    });
  }

  function cerrarModalPago() {
    document.getElementById('modalPago').classList.add('hidden');
    productosCarrito = [];
    actualizarCarrito();
    document.getElementById('formularioPedido').classList.add('hidden');
  }
