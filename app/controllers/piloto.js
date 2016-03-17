var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Piloto = app.models.piloto;

    var controller = {};

    controller.listaPilotos = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Piloto.find().exec()
        .then(
            function(pilotos) {
                console.log('pilotos', pilotos);
                res.json(pilotos);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemPiloto = function(req, res) {
        var _id = req.params.id;
        Piloto.findById(_id).exec()
        .then(
            function(piloto) {
                if(!piloto) throw new Error("Piloto não encontrado");
                console.log('OBTEVE MEU PILOTO', piloto);
                res.json(piloto);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        )
    }

    controller.removePiloto = function(req, res) {
        //Remove qualquer chave que contenha "$" evitando sql injection
        var _id = sanitize(req.params.id);
        Piloto.remove({"_id": _id}).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        )
    };

    controller.salvaPiloto = function(req, res) {
        var _id = req.body._id;

        var dados = {
            "nomeCompleto": req.body.nomeCompleto,
            "dataNascimento": req.body.dataNascimento,
            "cpf": req.body.cpf,
            "naturalidade": req.body.naturalidade,
            "nacionalidade": req.body.nacionalidade,
            "rg": req.body.rg,
            "dataEmissao": req.body.dataEmissao,
            "orgaoExpedidor": req.body.orgaoExpedidor,
            "altura": req.body.altura,
            "peso": req.body.peso,
            "tipoSanguineo": req.body.tipoSanguineo,
            "email": req.body.email,
            "telefone": req.body.telefone,
            "celular": req.body.celular,
            "cep": req.body.cep,
            "endereco": req.body.endereco,
            "numero": req.body.numero,
            "uf": req.body.uf,
            "municipio": req.body.municipio,
            "bairro": req.body.bairro
        }

        if(_id) {
            Piloto.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(piloto) {
                    res.json(piloto);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Piloto.create(dados)
            .then(
                function(piloto) {
                    res.status(201).json(piloto);
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
