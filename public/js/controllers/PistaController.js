angular.module('contatooh').controller('PistaController', function($scope, $routeParams, Ufs, Municipios, Pista) {

    $scope.mensagem = {texto: ''}

    $scope.pista = new Pista();

    if($routeParams.pistaId) {
        Pista.get({id: $routeParams.pistaId},
            function(pista) {
                $scope.pista = pista;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o pista'
                };
                console.log('erro')
            }
        );
    } else {
        $scope.contato = new Pista();
    }

    $scope.salva = function() {

        console.log('$scope$scope', $scope.$$childHead.endereco);

        $scope.pista.endereco = $scope.$$childHead.endereco;

        $scope.pista.$save()
        .then(function() {
            $scope.mensagem = {texto: 'Salvo com sucesso'};
            $scope.pista = new Pista();
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        })
    };

});
