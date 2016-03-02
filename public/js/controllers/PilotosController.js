angular.module('contatooh').controller('PilotosController', function($scope, Piloto) {

    $scope.pilotos = [];

    $scope.filtro = '';

    function buscaPilotos() {
        Piloto.query(
            function(pilotos) {
                $scope.pilotos = pilotos;
                $scope.mensagem = {}
            },
            function(erro){
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de pilotos"
                }
            }
        );
    }

    $scope.mensagem = {texto: ''};

    $scope.remove = function(piloto) {
        console.log('clicouuu para remover o piloto ', piloto);

        /*
        var promise = Contato.delete({id: contato._id}).$promise;

        promise
        .then(buscaContatos)
        .catch(function(erro) {
            console.log("Não foi possível remover o contato");
            console.log(erro);
        });*/


        //O CÓDIGO ABAIXO FAZ A MESMA COISA QUE O DE CIMA, PORÉM É MENOS VERBOSO
        Piloto.delete({id: piloto._id},
            buscaPilotos,
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de pilotos"
                }
            }
        );
    };


    buscaPilotos();



});
