module.exports = function(app) {

    var controller = app.controllers.piloto;

    app.route('/pilotos')
        .get(verificaAutenticacao, controller.listaPilotos)
        .post(verificaAutenticacao, controller.salvaPiloto);

    app.route('/pilotos/:id')
        .get(verificaAutenticacao, controller.obtemPiloto)
        .delete(verificaAutenticacao, controller.removePiloto);
}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
