var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Pista = app.models.pista;

    var controller = {};

    controller.listaPistas = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Pista.find().exec()
        .then(
            function(pistas) {
                console.log('pistas', pistas);
                res.json(pistas);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemPista = function(req, res) {
        var _id = req.params.id;
        Pista.findById(_id).exec()
        .then(
            function(pista) {
                if(!pista) throw new Error("Pista não encontrada");
                res.json(pista);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        )
    }

    controller.removePista = function(req, res) {
        //Remove qualquer chave que contenha "$" evitando sql injection
        var _id = sanitize(req.params.id);
        Pista.remove({"_id": _id}).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        )
    };

    controller.salvaPista = function(req, res) {
        var _id = req.body._id;

        var dados = {
            "nome": req.body.nome,
            "email": req.body.email,
            "telefone": req.body.telefone,
            "celular": req.body.celular,
            "cep": req.body.cep,
            "endereco": req.body.endereco,
            "numero": req.body.numero,
            "uf": req.body.uf,
            "municipio": req.body.municipio,
            "bairro": req.body.bairro,
            "imagem": req.body.imagem
        }

        if(_id) {
            Pista.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(pista) {
                    res.json(pista);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Pista.create(dados)
            .then(
                function(pista) {
                    res.status(201).json(pista);
                },
                function(erro) {
                    console.log('erro', erro);
                    res.status(500).json(erro);
                }
            )
        }


    }

    return controller;

}
