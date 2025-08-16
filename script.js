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

  // --- INICIO FLUJO DE PEDIDO ---

  function iniciarProcesoPedido() {
    document.getElementById('modalTipoPedido').classList.remove('hidden');
  }

  function closeModalTipoPedido() {
    document.getElementById('modalTipoPedido').classList.add('hidden');
  }

  function seleccionarTipoPedido(tipo) {
    closeModalTipoPedido();
    if (tipo === 'domicilio') {
      mostrarFormulario();
    } else if (tipo === 'retiro') {
      mostrarFormularioRetiro();
    }
  }

  function mostrarFormulario() {
    document.getElementById('formularioPedido').classList.remove('hidden');
  }

  function closeFormulario() {
    document.getElementById('formularioPedido').classList.add('hidden');
  }

  function mostrarFormularioRetiro() {
    document.getElementById('formularioRetiro').classList.remove('hidden');
  }

  function closeFormularioRetiro() {
    document.getElementById('formularioRetiro').classList.add('hidden');
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
    window.open(`https://wa.me/541160486366?text=${mensaje}`, '_blank');

    // datos de pago 
    const modal = document.getElementById('modalPago');
    const modalTitulo = document.getElementById('modalPagoTitulo');
    const modalDato = document.getElementById('modalPagoDato');

    if (pago === 'Transferencia') {
      modalTitulo.textContent = 'Pago por Transferencia';
      modalDato.textContent = '0000003100067553675592'; 
      modal.classList.remove('hidden');
      closeFormulario();
    } else if (pago === 'MercadoPago') {
      modalTitulo.textContent = 'Pago con MercadoPago';
      modalDato.textContent = 'elcondepizza.mp'; 
      modal.classList.remove('hidden');
      closeFormulario();
    } else {
      showAlert('¡Pedido enviado con éxito!', '¡Gracias!');
      productosCarrito = [];
      actualizarCarrito();
      closeFormulario();
    }
  }

  function enviarPedidoRetiro(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreRetiro').value;
    const telefono = document.getElementById('telefonoRetiro').value;
    const pago = document.getElementById('pagoRetiro').value;
    
    const productosTexto = productosCarrito.map(p => `• ${p.cantidad} × ${p.nombre} - $${p.precio * p.cantidad}`).join('\n');
    const total = productosCarrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

    let pagoFinalTexto = pago;
    let totalFinal = total;
    let mensajeRecargo = '';

    if (pago === 'Tarjeta') {
      const tipoTarjeta = document.getElementById('tipoTarjeta').value;
      if (!tipoTarjeta) {
        showAlert('Por favor, selecciona si el pago es con Crédito o Débito.', 'Falta Información');
        return; 
      }

      if (tipoTarjeta === 'Credito') {
        const recargo = total * 0.10;
        totalFinal += recargo;
        pagoFinalTexto = 'Tarjeta de Crédito';
        mensajeRecargo = `\nRecargo 10%: $${recargo.toFixed(2)}`;
      } else {
        pagoFinalTexto = 'Tarjeta de Débito';
      }
    }

    const mensaje = encodeURIComponent(`🛒 Pedido para RETIRAR EN LOCAL\nCliente: ${nombre}\nTel: ${telefono}\nPago: ${pagoFinalTexto}\n\nProductos:\n${productosTexto}${mensajeRecargo}\n\nTotal Final: $${totalFinal.toFixed(2)}`);
    window.open(`https://wa.me/541160486366?text=${mensaje}`, '_blank');

    const modal = document.getElementById('modalPago');
    const modalTitulo = document.getElementById('modalPagoTitulo');
    const modalDato = document.getElementById('modalPagoDato');

    if (pago === 'Transferencia') {
      modalTitulo.textContent = 'Pago por Transferencia';
      modalDato.textContent = '0000003100067553675592'; 
      modal.classList.remove('hidden');
      closeFormularioRetiro();
    } else if (pago === 'MercadoPago') {
      modalTitulo.textContent = 'Pago con MercadoPago';
      modalDato.textContent = 'elcondepizza.mp'; 
      modal.classList.remove('hidden');
      closeFormularioRetiro();
    } else {
      showAlert('¡Pedido enviado con éxito!', '¡Gracias!');
      productosCarrito = [];
      actualizarCarrito();
      closeFormularioRetiro();
    }
  }

  function filtrarProductos() {
    const termino = document.getElementById('buscador').value.toLowerCase().trim();
    const noResultados = document.getElementById('no-resultados');
    let totalEncontradosGeneral = 0;

    const categorias = document.querySelectorAll('.accordion');

    categorias.forEach(categoria => {
        const nombreCategoria = categoria.querySelector('h2').textContent.toLowerCase();
        const productos = categoria.querySelectorAll('.producto-item');
        let encontradosEnCategoria = 0;

        productos.forEach(producto => {
            const nombre = producto.querySelector('.producto-nombre').textContent.toLowerCase();
            const descripcion = producto.querySelector('.producto-descripcion')?.textContent.toLowerCase() || '';
            if (nombre.includes(termino) || descripcion.includes(termino) || nombreCategoria.startsWith(termino)) {
                producto.style.display = 'flex';
                encontradosEnCategoria++;
            } else {
                producto.style.display = 'none';
            }
        });

        if (encontradosEnCategoria > 0) {
            categoria.style.display = 'block';
            totalEncontradosGeneral += encontradosEnCategoria;
            if (!categoria.classList.contains('open')) {
                categoria.classList.add('open');
                categoria.querySelector('span').textContent = '-';
            }
        } else {
            categoria.style.display = 'none';
        }
    });

    noResultados.classList.toggle('hidden', totalEncontradosGeneral > 0 || termino === '');
    if (termino === '') {
        categorias.forEach(categoria => {
            categoria.style.display = 'block';
            const productos = categoria.querySelectorAll('.producto-item');
            productos.forEach(p => p.style.display = 'flex');
        });
    }
}

  // Slider - carga de la promo empanadas
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderPromoEmpanadas === 'function') {
      renderPromoEmpanadas();
    }
    if (typeof poblarOpcionesMitadMitad === 'function') {
      poblarOpcionesMitadMitad();
    }
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

    // --- INICIO BUSCADOR ---
    const buscador = document.getElementById('buscador');
    if (buscador) {
        buscador.addEventListener('input', filtrarProductos);
    }

    // Tarjetas
    const pagoRetiroSelect = document.getElementById('pagoRetiro');
    const opcionesTarjetaDiv = document.getElementById('opcionesTarjeta');
    const tipoTarjetaSelect = document.getElementById('tipoTarjeta');
    const avisoRecargoP = document.getElementById('avisoRecargo');

    pagoRetiroSelect?.addEventListener('change', () => {
      if (pagoRetiroSelect.value === 'Tarjeta') {
        opcionesTarjetaDiv.classList.remove('hidden');
        tipoTarjetaSelect.required = true;
      } else {
        opcionesTarjetaDiv.classList.add('hidden');
        tipoTarjetaSelect.required = false;
        tipoTarjetaSelect.value = '';
        avisoRecargoP.classList.add('hidden');
      }
    });

    tipoTarjetaSelect?.addEventListener('change', () => {
      avisoRecargoP.classList.toggle('hidden', tipoTarjetaSelect.value !== 'Credito');
    });

    // --- SLIDER PRODUCTOS ---
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const prevButton = document.getElementById('prevProduct');
      const nextButton = document.getElementById('nextProduct');
      let selectedIndex = 0;

      function rotateCarousel() {
        const cells = carousel.querySelectorAll('.carousel-cell');
        const cellCount = cells.length;
        if (cellCount === 0) return;
        
        const theta = 360 / cellCount;
        const radius = Math.round((250 / 2) / Math.tan(Math.PI / cellCount));
        
        cells.forEach((cell, i) => {
          const cellAngle = theta * i;
          cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
        });

        const rotation = Math.round(selectedIndex / cellCount * -360);
        carousel.style.transform = `translateZ(-${radius}px) rotateY(${rotation}deg)`;
      }

      prevButton.addEventListener('click', () => {
        selectedIndex--;
        rotateCarousel();
      });

      nextButton.addEventListener('click', () => {
        selectedIndex++;
        rotateCarousel();
      });

      rotateCarousel(); // Posición inicial
    }
  });

  function poblarOpcionesMitadMitad() {
    const pizzasParaMitades = productos.pizzas.filter(p => p.precios.some(precio => precio.tipo === 'Grande'));
    const select1 = document.getElementById('mitad1');
    const select2 = document.getElementById('mitad2');

    if (!select1 || !select2) return;

    let optionsHTML = '<option value="">Elige una pizza</option>';
    pizzasParaMitades.forEach(pizza => {
        const precioGrande = pizza.precios.find(p => p.tipo === 'Grande').precio;
        optionsHTML += `<option value="${pizza.nombre}" data-precio="${precioGrande}">${pizza.nombre}</option>`;
    });

    select1.innerHTML = optionsHTML;
    select2.innerHTML = optionsHTML;
  }

  function armarMitadMitad(e) {
    e.preventDefault();
    const selectMitad1 = document.getElementById('mitad1');
    const selectMitad2 = document.getElementById('mitad2');
    const mitad1 = selectMitad1.value;
    const mitad2 = selectMitad2.value;
    if (mitad1 && mitad2) {
      const precioMitad1 = parseFloat(selectMitad1.options[selectMitad1.selectedIndex].dataset.precio) / 2;
      const precioMitad2 = parseFloat(selectMitad2.options[selectMitad2.selectedIndex].dataset.precio) / 2;
      const precioTotal = precioMitad1 + precioMitad2;
      const nombre = `Pizza Mitad ${mitad1} / Mitad ${mitad2}`;
      agregarAlCarrito(nombre, precioTotal);
      showAlert(`Pizza mitad y mitad agregada al carrito con un precio de $${precioTotal}`, 'Producto Agregado');
      document.getElementById('formMitadMitad').reset();
    }
  }

  // Personalizacion promos

  function abrirModalPromo(nombre, precio, necesitaEmpanadas) {
    const modal = document.getElementById('modalPromo');
    const form = document.getElementById('formPromo');
    form.reset(); 

    document.getElementById('promoModalTitulo').textContent = `Personalizar ${nombre}`;
    document.getElementById('promoNombreBase').value = nombre;
    document.getElementById('promoPrecioBase').value = precio;
    document.getElementById('promoNecesitaEmpanadas').value = necesitaEmpanadas;

    // Empanadas 
    const seccionEmpanadas = document.getElementById('promoEmpanadasSeleccion');
    if (necesitaEmpanadas) {
      const lista = document.getElementById('promoEmpanadasLista');
      lista.innerHTML = '';
      productos.empanadas.forEach(emp => {
        const tipoEmpanada = emp.precios[0].tipo;
        const esEspecial = tipoEmpanada === 'Especial';
        const costoAdicionalTexto = esEspecial ? ' <span class="text-yellow-400 text-xs">(+ $200)</span>' : '';

        lista.innerHTML += `
          <div class="flex items-center justify-between">
            <label for="promo-emp-${emp.nombre.replace(/\s+/g, '-')}" class="text-sm">${emp.nombre}${costoAdicionalTexto}</label>
            <input type="number" id="promo-emp-${emp.nombre.replace(/\s+/g, '-')}" name="${emp.nombre}" data-tipo="${tipoEmpanada}" min="0" max="4" value="0" oninput="actualizarConteoPromoEmpanadas()" class="w-12 text-center bg-gray-700 rounded p-1">
          </div>`;
      });
      seccionEmpanadas.classList.remove('hidden');
    } else {
      seccionEmpanadas.classList.add('hidden');
    }
    actualizarConteoPromoEmpanadas(); 

    // Bebidas
    const selectBebida = document.getElementById('promoBebida');
    selectBebida.innerHTML = '<option value="">Selecciona una bebida</option>';
    productos.bebidas.forEach(beb => {
      selectBebida.innerHTML += `<option value="${beb.nombre}">${beb.nombre}</option>`;
    });

    modal.classList.remove('hidden');
  }

  function cerrarModalPromo() {
    document.getElementById('modalPromo').classList.add('hidden');
  }

  function actualizarConteoPromoEmpanadas() {
    const necesitaEmpanadas = document.getElementById('promoNecesitaEmpanadas').value === 'true';
    if (!necesitaEmpanadas) {
      document.getElementById('btnAgregarPromo').disabled = false;
      document.getElementById('btnAgregarPromo').classList.remove('opacity-50', 'cursor-not-allowed');
      return;
    }

    const inputs = document.querySelectorAll('#promoEmpanadasLista input[type="number"]');
    let total = 0;
    inputs.forEach(input => { total += parseInt(input.value) || 0; });
    document.getElementById('promoEmpanadasConteo').textContent = total;

    const btn = document.getElementById('btnAgregarPromo');
    if (total === 4) {
      btn.disabled = false;
      btn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
      btn.disabled = true;
      btn.classList.add('opacity-50', 'cursor-not-allowed');
    }
  }

  function agregarPromoPersonalizada(e) {
    e.preventDefault();
    const nombreBase = document.getElementById('promoNombreBase').value;
    let precioFinal = parseFloat(document.getElementById('promoPrecioBase').value);
    const necesitaEmpanadas = document.getElementById('promoNecesitaEmpanadas').value === 'true';
    
    let detalles = [];
    if (necesitaEmpanadas) {
      const inputs = document.querySelectorAll('#promoEmpanadasLista input[type="number"]');
      let costoExtraEmpanadas = 0;
      const detalleEmpanadas = Array.from(inputs).map(input => {
        const cantidad = parseInt(input.value) || 0;
        if (cantidad > 0 && input.dataset.tipo === 'Especial') {
          costoExtraEmpanadas += cantidad * 200;
        }
        return { cant: cantidad, nom: input.name };
      }).filter(item => item.cant > 0);

      precioFinal += costoExtraEmpanadas;
      detalles.push(`Empanadas: ${detalleEmpanadas.map(d => `${d.cant} ${d.nom}`).join(', ')}`);
    }

    const bebida = document.getElementById('promoBebida').value;
    detalles.push(`Bebida: ${bebida}`);

    const nombreFinal = `${nombreBase} (${detalles.join('. ')})`;
    agregarAlCarrito(nombreFinal, precioFinal);
    showAlert(`¡'${nombreBase}' se agregó al carrito!`, 'Promo Personalizada');
    cerrarModalPromo();
  }

  // Promo Docena

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
      showAlert('Debes seleccionar al menos 12 empanadas para acceder a la promoción.', 'Atención');
      return;
    }

    const nombreProducto = `Promo Empanadas (${detalleEmpanadas.join(', ')})`;
    agregarAlCarrito(nombreProducto, precioTotal);
    showAlert('¡Promoción de empanadas agregada al carrito!', 'Producto Agregado');
    document.getElementById('formDocenaEmpanadas').reset();
    actualizarConteoEmpanadas();
  }

  // Sandwichs y minutas

  function abrirModalOpciones(nombreBase, tipo, precioBase, opcionesCodificadas) {
    const modal = document.getElementById('modalOpciones');
    const form = modal.querySelector('form');
    form.reset();

    const opciones = JSON.parse(atob(opcionesCodificadas));

    document.getElementById('modalOpcionesTitulo').textContent = `Personalizar ${nombreBase} (${tipo})`;
    document.getElementById('opcionesNombreBase').value = nombreBase;
    document.getElementById('opcionesPrecioBase').value = precioBase;
    document.getElementById('opcionesTipoProducto').value = tipo;

    document.getElementById('modalOpcionesSubtitulo').textContent = `Elige tus ${opciones.titulo}es`;
    const lista = document.getElementById('modalOpcionesLista');
    lista.innerHTML = '';

    opciones.items.forEach((opt, index) => {
      const inputType = opciones.gratis ? 'radio' : 'checkbox';
      const inputName = opciones.gratis ? 'acompanamiento-gratis' : `opcion-${index}`;
      const precioTexto = opciones.gratis ? '(sin cargo)' : `(+ $${opt.precio})`;

      lista.innerHTML += `
        <div class="flex items-center justify-start gap-2 bg-gray-700 p-2 rounded">
          <input type="${inputType}" id="opcion-${index}" name="${inputName}" value="${opt.nombre}" data-precio="${opt.precio}" class="form-${inputType} h-4 w-4 text-yellow-400 bg-gray-600 border-gray-500 focus:ring-yellow-500">
          <label for="opcion-${index}" class="text-sm">${opt.nombre} <span class="text-yellow-400 text-xs">${precioTexto}</span></label>
        </div>
      `;
    });

    modal.classList.remove('hidden');
  }

  function cerrarModalOpciones() {
    document.getElementById('modalOpciones').classList.add('hidden');
  }

  function agregarProductoConOpciones(e) {
    e.preventDefault();
    
    const nombreBase = document.getElementById('opcionesNombreBase').value;
    const tipoProducto = document.getElementById('opcionesTipoProducto').value;
    let precioFinal = parseFloat(document.getElementById('opcionesPrecioBase').value);

    let nombreFinal = `${nombreBase} (${tipoProducto})`;
    const detalles = [];

    const opcionesSeleccionadas = document.querySelectorAll('#modalOpcionesLista input:checked');

    opcionesSeleccionadas.forEach(opcion => {
      const precioOpcion = parseFloat(opcion.dataset.precio);
      precioFinal += precioOpcion;
      detalles.push(opcion.value);
    });

    if (detalles.length > 0) {
      const subtitulo = document.getElementById('modalOpcionesSubtitulo').textContent.replace('Elige tus ', '').replace('s', '');
      nombreFinal += ` con ${subtitulo}: ${detalles.join(', ')}`;
    }

    agregarAlCarrito(nombreFinal, precioFinal);
    showAlert(`'${nombreBase}' se agregó al carrito!`, 'Producto Personalizado');
    cerrarModalOpciones();
  }

//  Modal de pago

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
      showAlert('No se pudo copiar el texto.', 'Error');
    });
  }

  function cerrarModalPago() {
    document.getElementById('modalPago').classList.add('hidden');
    productosCarrito = [];
    actualizarCarrito();
  }

  // Custom Alerts
  
  function showAlert(message, title = 'Aviso') {
    const modal = document.getElementById('customAlertModal');
    const modalTitle = document.getElementById('customAlertTitulo');
    const modalMessage = document.getElementById('customAlertMensaje');

    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
  }

  function closeAlert() {
    document.getElementById('customAlertModal').classList.add('hidden');
  }
