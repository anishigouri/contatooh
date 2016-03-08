module.exports = function(app) {

    var controller = app.controllers.pista;

    app.route('/pistas')
        .get(verificaAutenticacao, controller.listaPistas)
        .post(verificaAutenticacao, controller.salvaPista);

    app.route('/pistas/:id')
        .get(verificaAutenticacao, controller.obtemPista)
        .delete(verificaAutenticacao, controller.removePista);
}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
