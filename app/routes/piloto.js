module.exports = function(app) {

    var controller = app.controllers.piloto;

    app.route('/pilotos')
        .post(verificaAutenticacao, controller.salvaPiloto);

}

function verificaAutenticacao(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}
