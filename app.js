const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* Servidor */

app.listen(port, () => 'puerto levantado exitosamente')

/* recursos estaticos */

app.use(express.static(path.resolve(__dirname, 'public')));

/* rutas */

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));
app.get('/registro', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'registro.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')));



