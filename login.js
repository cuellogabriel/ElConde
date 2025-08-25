document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/login', { // Envía la solicitud al servidor Node.js
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    // Si el login es exitoso, redirigimos a una página de "dashboard".
                    window.location.href = '/dashboard.html'; // Redirige a una página de éxito
                } else {
                    errorMessage.textContent = data.message || 'Error en el usuario o contraseña.';
                    errorMessage.classList.remove('hidden');
                }
            } catch (error) {
                errorMessage.textContent = 'No se pudo conectar con el servidor. Inténtalo de nuevo.';
                errorMessage.classList.remove('hidden');
            }
        });
    }
});