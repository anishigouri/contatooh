var sanitize = require('mongo-sanitize');

module.exports = function(app) {

    var Contato = app.models.contato;

    var controller = {};

    controller.salvaContato = function(req, res) {
        var _id = req.body._id;
        req.body.emergencia = req.body.emergencia || null;

        //Cria um objecto com apenas os dados que utilizaremos evitando assim query injections
        var dados = {
            "nome" : req.body.nome,
            "email" : req.body.email,
            "emergencia" : req.body.emergencia || null
        };

        if(_id) {
            Contato.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(contato) {
                    res.json(contato);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Contato.create(req.body)
            .then(
                function(contato) {
                    res.status(201).json(contato);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            )
        }
    }

    controller.listaContatos = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Contato.find().populate('emergencia').exec()
        .then(
            function(contatos) {
                console.log('contatos', contatos);
                res.json(contatos);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemContato = function(req, res) {
        var _id = req.params.id;
        Contato.findById(_id).exec()
        .then(
            function(contato) {
                if(!contato) throw new Error("Contato não encontrado");
                res.json(contato);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        )
    }

    controller.removeContato = function(req, res) {
        //Remove qualquer chave que contenha "$" evitando sql injection
        var _id = sanitize(req.params.id);
        Contato.remove({"_id": _id}).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        )
    };

    return controller;
}
