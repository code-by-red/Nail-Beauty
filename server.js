const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🌟 Nail Designer Site rodando em http://localhost:${PORT}`);
    console.log('📱 Pressione Ctrl+C para encerrar');
});
