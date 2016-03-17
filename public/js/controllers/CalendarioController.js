angular.module('contatooh').controller('CalendarioController', function($scope, $routeParams, Pista, Calendario) {

    $scope.mensagem = {texto: ''};

    $scope.calendario = new Calendario();

    Pista.query(function(pistas) {
        $scope.pistas = pistas;
    });

    if($routeParams.calendarioId) {
        Calendario.get({id: $routeParams.calendarioId},
            function(calendario) {
                $scope.calendario = calendario;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o calendario'
                };
                console.log('erro')
            }
        );
    } else {
        $scope.calendario = new Calendario();
    }

    $scope.salva = function() {
      $scope.calendario.$save()
      .then(function() {
          $scope.mensagem = {texto: 'Salvo com sucesso'};
          $scope.calendario = new Calendario();
      })
      .catch(function(erro) {
          $scope.mensagem = {texto: 'Não foi possível salvar'};
      })
    }
});
