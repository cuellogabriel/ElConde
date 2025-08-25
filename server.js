require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'a-default-secret-for-dev',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(express.static(path.join(__dirname)));


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const ADMIN_USER = process.env.ADMIN_USER || 'elconde';
    const ADMIN_PASS = process.env.ADMIN_PASS || 'Jeyula34835*';

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        console.log(`Login exitoso para el usuario: ${username}`);
        req.session.isAuthenticated = true;
        req.session.user = username;
        // Redirigir al dashboard en un login exitoso
        return res.redirect('/dashboard.html');
    } else {
        console.log(`Intento de login fallido para el usuario: ${username}`);
        return res.redirect('/login.html?error=1');
    }
});

// Middleware para proteger rutas
function ensureAuthenticated(req, res, next) {
    if (req.session.isAuthenticated) {
        return next();
    }
    res.redirect('/login.html');
}

app.get('/dashboard.html', ensureAuthenticated, (req, res) => {
    res.send(`
        <!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Dashboard</title><script src="https://cdn.tailwindcss.com"></script></head>
        <body class="bg-gray-900 text-white flex items-center justify-center h-screen">
            <div class="text-center">
                <h1 class="text-4xl text-green-400">¡Bienvenido, Administrador!</h1>
                <a href="/logout" class="mt-4 inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cerrar Sesión</a>
            </div>
        </body></html>
    `);
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
            return res.redirect('/dashboard.html');
        }
        res.redirect('/login.html');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Abre http://localhost:${PORT}/login.html en tu navegador.`);
});