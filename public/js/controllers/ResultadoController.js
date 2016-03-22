angular.module('contatooh').controller('ResultadoController', function($scope, $routeParams, Resultado, Calendario, Piloto) {

    $scope.mensagem = {texto: ''}

    $scope.resultado = new Resultado();

    $scope.salva = function() {

        $scope.resultado.pilotos = $scope.models.lists["2 - Classificação"].map(function(item) {
            return {voltaRapida: item.voltaRapida, piloto: item};
        });

        $scope.resultado.$save()
        .then(function() {
            alert('Salvo com sucesso', 'Filhos da Pista', 'success');
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        });
    };

    Calendario.query(function(calendarios) {

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
        carregarDrag(pilotos);
    },
    function(erro) {
        alert('Não foi possível obter os pilotos', 'Filhos da Pista', 'error');
    });

    function carregarDrag(pilotos) {
        $scope.models = {
            selected: null,
            lists: {"1 - Pilotos": pilotos, "2 - Classificação": []}
        };

        // Model to JSON for demo purpose
        $scope.$watch('models', function(model) {
          $scope.modelAsJson = angular.toJson(model, true);
        }, true);
    }

});
