angular.module('contatooh').controller('CalendarioController', function($scope, $routeParams, Pista, Calendario) {

    $scope.mensagem = {texto: ''}

    $scope.calendario = new Calendario();

    Pista.query(function(pistas) {
        $scope.pistas = pistas;
    });

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
