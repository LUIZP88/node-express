const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//PERSISTENCIA
mongoose.connect('mongodb://localhost/bdCrud', { useNewUrlParser: true });

//configutar app para usar o body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Port = process.env.Port || 3000;

//definindo rotas
const router = express.Router(); // intercept de todas as rotas

//middleware
router.use(function(req, res, next) {
    console.log("intercept by Middleware");
    next(); // faz  a continuacao para a proxima api
});


// caminho padrao para as APIs
router.get('/', (req, res) => {
    res.json({ "message": "Rota teste OK" });
});
app.use('/api', router);

app.listen(Port, () => {
    console.log(" server is up and running");
});