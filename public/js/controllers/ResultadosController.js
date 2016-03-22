angular.module('contatooh').controller('ResultadosController', function($scope, Resultado) {

    $scope.resultados = [];

    $scope.filtro = '';

    function buscaResultados() {
        Resultado.query(
            function(resultados) {
                $scope.resultados = resultados;
                $scope.mensagem = {}
            },
            function(erro){
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de resultados"
                }
            }
        );
    }

    $scope.mensagem = {texto: ''};

    $scope.remove = function(resultado) {
        console.log('clicouuu para remover o resultado ', resultado);

        Resultado.delete({id: resultado._id},
            buscaResultados,
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de resultados"
                }
            }
        );
    };


    buscaResultados();

});
