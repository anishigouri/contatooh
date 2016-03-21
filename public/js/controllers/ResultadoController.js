angular.module('contatooh').controller('ResultadoController', function($scope, $routeParams, Resultado, Calendario, Piloto) {

    $scope.mensagem = {texto: ''}

    $scope.resultado = new Resultado();

    $scope.salva = function() {
        $scope.resultado.$save()
        .then(function() {
            alert('Salvo com sucesso', 'Filhos da Pista', 'success');
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        })
    };

    Calendario.query(function(calendarios) {
      console.log('calendarios', calendarios);

            var listCalendario = calendarios.map(function(item, idx) {
                return {descricao: moment(item.dataHora).format('DD/MM/YYYY HH:mm') + ' - ' + item.pista.nome, _id: item._id};
            });
            $scope.calendarios = listCalendario;
        },
        function(erro) {
            alert('Não foi possível obter os calendários', 'Filhos da Pista', 'error');
        }
    );

    Piloto.query(function(pilotos) {
        $scope.pilotos = pilotos;
    },
    function(erro) {
        alert('Não foi possível obter os pilotos', 'Filhos da Pista', 'error');
    });


});
