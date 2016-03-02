angular.module('contatooh').controller('PilotoController', function($scope, $routeParams, Piloto, Ufs, Municipios) {

    $scope.mensagem = {texto: ''}

    $scope.piloto = new Piloto();

    $scope.salva = function() {
        $scope.piloto.$save()
        .then(function() {
            $scope.mensagem = {texto: 'Salvo com sucesso'};
            $scope.piloto = new Piloto();
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        })
    };

    Ufs.query(function(ufs) {
        var _ufs = ufs.map(function(item) {
            return {id: item, descricao: item};
        });
        $scope.ufs = _ufs;
    });

    Municipios.get({uf: 'PR'},
        function(municipios) {
            console.log('O QUE VEM EOJFOEWFWJFUEIF --', municipios);
            $scope.municipios = municipios;
        },
        function(erro) {
            $scope.mensagem = {
                texto: 'Não foi possível obter o contato'
            };
            console.log('erro')
        }
    );

});
