var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Piloto = app.models.piloto;

    var controller = {};

    controller.salvaPiloto = function(req, res) {
        var _id = req.body._id;

        var dados = {
            "nomeCompleto": req.body.nomeCompleto,
            "dataNascimento": moment(req.body.dataNascimento, 'DD/MM/YYYY').valueOf(),
            "cpf": req.body.cpf,
            "naturalidade": req.body.naturalidade,
            "nacionalidade": req.body.nacionalidade,
            "rg": req.body.rg,
            "dataEmissao": moment(req.body.dataEmissao, 'DD/MM/YYYY').valueOf(),
            "orgaoExpedidor": req.body.orgaoExpedidor,
            "altura": req.body.altura,
            "peso": req.body.peso,
            "tipoSanguineo": req.body.tipoSanguineo,
            "email": req.body.email,
            "telefone": req.body.telefone,
            "cep": req.body.cep,
            "endereco": req.body.endereco,
            "numero": req.body.numero,
            "uf": req.body.uf,
            "municipio": req.body.municipio,
            "bairro": req.body.bairro
        }

        console.log('TA SALVANUUUUUUUUUUUUUUUUUUUUUUUUUUU', dados);

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

    //ficaria nesse controller mesmo???
    //ou eu criaria um só para endereco?
    controller.listaMunicipios = function(req, res) {
        var promise = {};
    }

    return controller;

}
