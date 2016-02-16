var sanitize = require('mongo-sanitize');

module.exports = function(app) {

    var Piloto = app.models.piloto;

    var controller = {};

    controller.salvaPiloto = function(req, res) {
        var _id = req.body._id;

        var dados = {
            "nomeCompleto": req.body.nomeCompleto
        }

        console.log('TA SALVANUUUUUUUUUUUUUUUUUUUUUUUUUUU', dados);

        Piloto.create(dados)
        .then(
            function(piloto) {
                res.status(201).json(piloto);
            },
            function(erro) {
                console.log('erro');
                res.status(500).json(erro);
            }
        )
    }

    return controller;

}
