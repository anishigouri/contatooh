var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Municipio = app.models.municipio;

    var controller = {};

    controller.listaUfs = function(req, res) {
        console.log('ENTORU AQUIIIII')
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

    return controller;

}
