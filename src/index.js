const express = require('express');

const app = express();

const connection = require('./database/index');

const routes = require('./routes/routes');

app.use(express.json());

connection.authenticate().then(() => {
    console.log('Sucesso ao se conectado com o banco de dados');
}).catch((error) => {
    console.log('Erro ao se conectar ao banco de dados');
});

app.use(routes);

const port = 3333
app.listen(port, function(){
    console.log('Servidor rodando: http://localhost:'+port);
});