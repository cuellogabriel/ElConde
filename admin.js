document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('order-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const printBtn = document.getElementById('print-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const incomingOrdersContainer = document.getElementById('incoming-orders');
    const printedOrdersContainer = document.getElementById('printed-orders');
    const createOrderCard = (orderId, orderData) => {
        const customerName = orderData.NOMBREDELCLIENTE || orderData['NOMBRE DEL CLIENTE'] || 'Cliente no especificado';
        const phone = orderData.TELEFONO || orderData.TELEFONODELCLIENTE || 'N/A';
        const deliveryType = orderData.TIPODEENTREGA || orderData['TIPO DE ENTREGA'] || 'No especificado';
        const paymentMethod = orderData.METODODEPAGO || 'N/A';
        const total = orderData.TOTALPEDIDO || orderData['TOTAL PEDIDO'] || 0;
        const address = orderData.DIRECCIONDELCLIENTE || '';
        const creationTimestamp = orderData.FECHACREACION || orderData.FECHADECREACION;
        const creationDate = creationTimestamp ? creationTimestamp.toDate() : new Date();

        const itemsSummary = (orderData.ITEMS || []).map(item => `${item.CANTIDAD}x ${item.IDPRODUCTO}`).join(', ');

        const itemsForModal = (orderData.ITEMS || []).map(item => {
            const price = item.PRECIOUNITARIO || item.PREICOUNITARIO || 0; 
            return `${item.CANTIDAD}x ${item.IDPRODUCTO} ($${price} c/u)`;
        });

        const modalDetails = [
            `Cliente: ${customerName}`,
            `Teléfono: ${phone}`,
            `Tipo de Entrega: ${deliveryType}`,
        ];
        if (deliveryType.toUpperCase() === 'ENVIO' && address) {
            modalDetails.push(`Dirección: ${address}`);
        }
        modalDetails.push(`Método de Pago: ${paymentMethod}`);
        modalDetails.push(`Total del Pedido: $${total}`);
        modalDetails.push('---');
        modalDetails.push('Items del Pedido:');
        modalDetails.push(...itemsForModal);

        const card = document.createElement('div');
        card.className = 'order-card bg-white p-4 rounded-lg shadow-md cursor-pointer mb-4';
        card.dataset.orderId = orderId;
        card.dataset.orderDetails = modalDetails.join(', ');

        card.innerHTML = `
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-bold">Pedido #${orderId.substring(0, 6)}...</h3>
                <span class="text-sm font-semibold ${deliveryType.toUpperCase() === 'ENVIO' ? 'text-blue-500' : 'text-green-500'}">${deliveryType}</span>
            </div>
            <p class="text-gray-600 mt-1">${customerName}</p>
            <p class="text-gray-800 font-semibold mt-2 truncate" title="${itemsSummary}">Items: ${itemsSummary}</p>
            <p class="text-xs text-gray-500 mt-2 time-element">Recibido: ${creationDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        `;

        incomingOrdersContainer.prepend(card); 
    };

    const openModal = (orderCard) => {
        const orderId = orderCard.dataset.orderId;
        const orderDetails = orderCard.dataset.orderDetails.split(', ').join('<br>');

        modalTitle.textContent = `Detalles del Pedido #${orderId}`;
        modalBody.innerHTML = orderDetails;
        modal.dataset.currentCardId = orderCard.dataset.orderId;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.dataset.currentCardId = '';
    };

    document.body.addEventListener('click', function(event) {
        const orderCard = event.target.closest('.order-card');
        if (orderCard) {
            openModal(orderCard);
        }
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    printBtn.addEventListener('click', () => {
        window.print();

        const orderIdToMove = modal.dataset.currentCardId;
        const cardToMove = document.querySelector(`.order-card[data-order-id='${orderIdToMove}']`);

        if (cardToMove && cardToMove.parentElement.id === 'incoming-orders') {
            cardToMove.classList.add('opacity-60');
            const timeElement = cardToMove.querySelector('.time-element');
            if (timeElement) {
                const now = new Date();
                timeElement.textContent = `Impreso: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
            }
            printedOrdersContainer.prepend(cardToMove); 
        }

        closeModal();
    });

    const listenForIncomingOrders = () => {
    
        db.collection('pedidos').orderBy('FECHACREACION', 'desc').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    const orderId = change.doc.id;
                    if (!document.querySelector(`.order-card[data-order-id='${orderId}']`)) {
                        createOrderCard(orderId, change.doc.data());
                    }
                }
            });
        }, error => {
            console.error("Error fetching orders: ", error);
            alert("Hubo un error al cargar los pedidos. Revisa la consola para más detalles.");
        });
    };

    document.getElementById('logout-btn').addEventListener('click', () => {
        alert('Cerrando sesión...');
        window.location.href = 'login.html';
    });
    listenForIncomingOrders();
});