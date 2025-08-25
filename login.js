document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

   
    if (sessionStorage.getItem('isAuthenticated') === 'true') {
        window.location.href = 'admin.html';
        return;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;
        const correctUsername = 'elconde';
        const correctPassword = 'jeyula34835';

        if (username === correctUsername && password === correctPassword) {
            sessionStorage.setItem('isAuthenticated', 'true');
            window.location.href = 'admin.html';
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
            errorMessage.classList.remove('hidden');
        }
    });
});