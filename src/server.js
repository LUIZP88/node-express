const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Persistência
mongoose.connect('mongodb+srv://luizpaulo:lu15p4ul0@cluster0-nijdq.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
// Configurar a aplicação para usar o Body-Parser
app.use(bodyParser.urlencoded([{extended:false}]));
app.use(bodyParser.json());

// Porta da aplicação
const PORT = process.env.port || 3002;

// Rotas
var productRoute = require('./routes/product-routes');
var userRoute = require('./routes/user-routes');
var indexRoute = require('./routes/index-routes');
var regRoute = require('./routes/register-route');
var authRoute = require('./routes/authenticate-route');

// Rota para Index
app.use('/api', indexRoute);


// Rotas para Usuarios
app.use('/api/users', userRoute);

// Rotas para Produtos
app.use('/api/products', productRoute);

// Rota para Registro
app.use('/api/register', regRoute);

// Rota para Autenticação
app.use('/api/authenticate', authRoute);

app.listen(PORT, () => console.log("Server on-line!"));