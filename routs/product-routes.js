const express = require('express');
var router = express.Router(); // intercepta as rotas


var Produto = require("../app/model/product");

router
    .post("/", function(req, res) {
        var produto = new Produto();
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao

        produto.save(function(error) {
            if (error)
                res.send("erro ao tentar salvar um produto" + error);
            res.status(201).json({ message: 'produto inserido com sucesso' });

        });


    });

module.exports = router;