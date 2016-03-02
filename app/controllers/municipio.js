var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Municipio = app.models.municipio;

    var controller = {};

    controller.listaUfs = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Municipio.find({}).distinct('uf').exec()
        .then(
            function(ufs) {
                res.json(ufs);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.listaMunicipiosPorUf = function(req, res) {
        var uf = req.params.uf;
        console.log(uf)
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        Municipio.find({uf: uf}).exec()
        .then(
            function(municipios) {
                console.log('RETORNOUUUU', municipios);
                res.json(municipios);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;

}
