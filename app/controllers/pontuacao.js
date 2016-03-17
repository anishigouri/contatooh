var moment = require('moment');
var sanitize = require('mongo-sanitize');


module.exports = function(app) {

    var Pontuacao = app.models.pontuacao;

    var controller = {};

    controller.salvaPontuacao = function(req, res) {

      var _id = req.body._id;

      var dados = {
          "posicao": req.body.posicao,
          "pontos": req.body.pontos
      }

      if(_id) {
          Pontuacao.findByIdAndUpdate(_id, dados).exec()
          .then(
              function(pontuacao) {
                  res.json(pontuacao);
              },
              function(erro) {
                  console.error(erro);
                  res.status(500).json(erro);
              }
          );
      } else {
          Pontuacao.create(dados)
          .then(
              function(pontuacao) {
                  res.status(201).json(pontuacao);
              },
              function(erro) {
                  console.log('erro', erro);
                  res.status(500).json(erro);
              }
          )
      }

    }

    controller.listaPontuacoes = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        var promise = Pontuacao.find().exec()
        .then(
            function(pontuacoes) {
                res.json(pontuacoes);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removePontuacao = function(req, res) {
        //Remove qualquer chave que contenha "$" evitando sql injection
        var _id = sanitize(req.params.id);
        Pontuacao.remove({"_id": _id}).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        )
    };

    return controller;

}
