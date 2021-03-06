module.exports = function(app) {

    var controller = app.controllers.municipio;

    app.route('/endereco/ufs')
        .get(controller.listaUfs)

    app.route('/endereco/municipio/:uf')
        .get(controller.listaMunicipiosPorUf);

}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
