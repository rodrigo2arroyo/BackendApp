const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola, Render!');
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'Prueba exitosa' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
