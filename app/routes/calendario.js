module.exports = function(app) {

    var controller = app.controllers.calendario;

    app.route('/calendarios')
        .get(verificaAutenticacao, controller.listaCalendarios)
        .post(verificaAutenticacao, controller.salvaCalendario);

    app.route('/calendarios/:id')
        .get(verificaAutenticacao, controller.obtemCalendario)
        .delete(verificaAutenticacao, controller.removeCalendario);
}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
