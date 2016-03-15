var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Calendario = app.models.calendario;

    var controller = {};

    controller.listaCalendarios = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Calendario.find().populate('pista').exec()
        .then(
            function(calendarios) {
                res.json(calendarios);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemCalendario = function(req, res) {
        var _id = req.params.id;
        Calendario.findById(_id).exec()
        .then(
            function(calendario) {
                if(!calendario) throw new Error("Calendário não encontrada");
                res.json(calendario);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        )
    }

    controller.removeCalendario = function(req, res) {
        //Remove qualquer chave que contenha "$" evitando sql injection
        var _id = sanitize(req.params.id);
        Calendario.remove({"_id": _id}).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        )
    };

    controller.salvaCalendario = function(req, res) {
        var _id = req.body._id;

        var dados = {
            "pista": req.body.pista,
            "dataHora": moment(req.body.dataHora, 'DD/MM/YYYY').valueOf()
        }

        if(_id) {
            Calendario.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(calendario) {
                    res.json(calendario);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Calendario.create(dados)
            .then(
                function(calendario) {
                    res.status(201).json(calendario);
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
