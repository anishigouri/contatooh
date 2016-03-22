module.exports = function(app) {

    var controller = app.controllers.resultado;

    app.route('/resultados')
        .get(verificaAutenticacao, controller.listaResultados)
        .post(verificaAutenticacao, controller.salvaResultado);

    app.route('/resultados/:id')
        .get(verificaAutenticacao, controller.obtemResultado)
        .delete(verificaAutenticacao, controller.removeResultado);
}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
