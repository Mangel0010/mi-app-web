const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Mi app web en contenedores</h1><p>Versión 2.0</p>');
});
app.listen(3000, () => console.log('Servidor en puerto 3000'));
