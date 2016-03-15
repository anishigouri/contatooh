angular.module('contatooh').controller('CalendariosController', function($scope, Calendario) {

    $scope.calendarios = [];

    $scope.filtro = '';

    function buscaCalendarios() {
        Calendario.query(
            function(calendarios) {
                $scope.calendarios = calendarios.map(function(item) {
                  return {_id: item._id, pista: item.pista, dataHora: moment(item.dataHora).format('DD/MM/YYYY')};
                });
                $scope.mensagem = {}
            },
            function(erro){
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de calendarios"
                }
            }
        );
    }

    $scope.mensagem = {texto: ''};

    $scope.remove = function(calendario) {
        console.log('clicouuu para remover o calendario ', calendario);

        /*
        var promise = Contato.delete({id: contato._id}).$promise;

        promise
        .then(buscaContatos)
        .catch(function(erro) {
            console.log("Não foi possível remover o contato");
            console.log(erro);
        });*/


        //O CÓDIGO ABAIXO FAZ A MESMA COISA QUE O DE CIMA, PORÉM É MENOS VERBOSO
        Calendario.delete({id: calendario._id},
            buscaCalendarios,
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: "Não foi possível obter a lista de calendarios"
                }
            }
        );
    };


    buscaCalendarios();



});
