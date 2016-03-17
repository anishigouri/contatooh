module.exports = function(app) {

    var controller = app.controllers.pontuacao;

    app.route('/pontuacoes')
        .get(verificaAutenticacao, controller.listaPontuacoes)
        .post(verificaAutenticacao, controller.salvaPontuacao);

    app.route('/pontuacoes/:id')
        .delete(verificaAutenticacao, controller.removePontuacao);

}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
