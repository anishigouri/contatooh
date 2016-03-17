angular.module('contatooh').controller('PontuacaoController', function($scope, $routeParams, Pontuacao) {

    $scope.pontuacao = new Pontuacao();

    $scope.pontuacoes = [];

    $scope.adicionaPontuacao = function() {
      var pontuacao = new Pontuacao();
      pontuacao.posicao = $scope.pontuacoes.length + 1;
      $scope.pontuacoes.push(pontuacao);
    }

    $scope.salva = function() {
        console.log('Salvando a pontuacao', $scope.pontuacoes)

        $scope.pontuacoes.forEach(function(pontuacao) {
          pontuacao.$save()
          .then(function() {
            alert('Salvo com sucesso', 'Filhos da Pista', 'success');
          })
          .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
          })
        });
        buscaPontuacao();
    };

    function buscaPontuacao() {
        Pontuacao.query(
            function(pontuacoes) {
                $scope.pontuacoes = pontuacoes;
                $scope.mensagem = {}
            },
            function(erro){
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de pontuacões"
                }
            }
        );
    };

    $scope.remove = function(pontuacao) {

        //O CÓDIGO ABAIXO FAZ A MESMA COISA QUE O DE CIMA, PORÉM É MENOS VERBOSO
        Pontuacao.delete({id: pontuacao._id},
            buscaPontuacao,
            function(erro) {
                console.log(erro);
                alert('Não foi possível obter a lista de pistas', 'Filhos da Pista', 'error');
            }
        );
    };

    buscaPontuacao();

});
