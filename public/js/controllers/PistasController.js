angular.module('contatooh').controller('PistasController', function($scope, Pista) {

    $scope.pistas = [];

    $scope.filtro = '';

    function buscaPistas() {
        Pista.query(
            function(pistas) {
                $scope.pistas = pistas;
                $scope.mensagem = {}
            },
            function(erro){
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de pistas"
                }
            }
        );
    }

    $scope.mensagem = {texto: ''};

    $scope.remove = function(pista) {
        console.log('clicouuu para remover o pista ', pista);

        //O CÓDIGO ABAIXO FAZ A MESMA COISA QUE O DE CIMA, PORÉM É MENOS VERBOSO
        Pista.delete({id: pista._id},
            buscaPistas,
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de pistas"
                }
            }
        );
    };


    buscaPistas();



});
