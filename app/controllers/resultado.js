var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Resultado = app.models.resultado;

    var controller = {};

    controller.listaResultados = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Resultado.find().exec()
        .then(
            function(resultados) {
                console.log('resultados', resultados);
                res.json(resultados);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemResultado = function(req, res) {
        var _id = req.params.id;
        Resultado.findById(_id).exec()
        .then(
            function(resultado) {
                if(!resultado) throw new Error("Resultado não encontrada");
                res.json(resultado);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        )
    }

    controller.removeResultado = function(req, res) {
        //Remove qualquer chave que contenha "$" evitando sql injection
        var _id = sanitize(req.params.id);
        Resultado.remove({"_id": _id}).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        )
    };

    controller.salvaResultado = function(req, res) {
        var _id = req.body._id;


        var dados = {
            "calendario": req.body.calendario,
            "pilotos": req.body.pilotos
        }
        console.log('Salvando resultado', dados);

        if(_id) {
            Resultado.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(resultado) {
                    res.json(resultado);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Resultado.create(dados)
            .then(
                function(resultado) {
                    res.status(201).json(resultado);
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
