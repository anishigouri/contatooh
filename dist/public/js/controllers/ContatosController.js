angular.module('contatooh').controller('ContatosController', function($scope, Contato) {

    $scope.contatos = [];

    $scope.filtro = '';

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
                $scope.mensagem = {}
            },
            function(erro){
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de contatos"
                }
            }
        );
    }

    $scope.mensagem = {texto: ''};

    $scope.remove = function(contato) {
        console.log('clicouuu para remover o contato ', contato);

        /*
        var promise = Contato.delete({id: contato._id}).$promise;

        promise
        .then(buscaContatos)
        .catch(function(erro) {
            console.log("Não foi possível remover o contato");
            console.log(erro);
        });*/


        //O CÓDIGO ABAIXO FAZ A MESMA COISA QUE O DE CIMA, PORÉM É MENOS VERBOSO
        Contato.delete({id: contato._id},
            buscaContatos,
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de contatos"
                }
            }
        );
    };


    buscaContatos();



});
