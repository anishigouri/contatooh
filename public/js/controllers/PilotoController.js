angular.module('contatooh').controller('PilotoController', function($scope, $routeParams, Piloto, Ufs, Municipios) {

    $scope.mensagem = {texto: ''}

    $scope.piloto = new Piloto();

    if($routeParams.pilotoId) {
        Piloto.get({id: $routeParams.pilotoId},
            function(piloto) {
                $scope.piloto = piloto;
                $scope.buscaMunicipios();
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o piloto'
                };
                console.log('erro')
            }
        );
    } else {
        $scope.contato = new Piloto();
    }

    $scope.buscaMunicipios = function() {
        Municipios.query({uf: $scope.piloto.uf},
            function(municipios) {
                $scope.municipios = municipios;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter os municípios'
                };
                console.log('erro')
            }
        );
    };

    $scope.salva = function() {

        if(!$scope.piloto.cpf) {
            $scope.mensagem = {
                texto: 'CPF Inválido'
            };
            return;
        }

        $scope.piloto.$save()
        .then(function() {
            $scope.mensagem = {texto: 'Salvo com sucesso'};
            $scope.piloto = new Piloto();
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        })
    };


    $scope.ufs = [
        {_id: 'AC', descricao: 'AC'},
        {_id: 'AL', descricao: 'AL'},
        {_id: 'AM', descricao: 'AM'},
        {_id: 'AP', descricao: 'AP'},
        {_id: 'BA', descricao: 'BA'},
        {_id: 'CE', descricao: 'CE'},
        {_id: 'DF', descricao: 'DF'},
        {_id: 'ES', descricao: 'ES'},
        {_id: 'GO', descricao: 'GO'},
        {_id: 'MA', descricao: 'MA'},
        {_id: 'MG', descricao: 'MG'},
        {_id: 'MS', descricao: 'MS'},
        {_id: 'MT', descricao: 'MT'},
        {_id: 'PA', descricao: 'PA'},
        {_id: 'PB', descricao: 'PB'},
        {_id: 'PE', descricao: 'PE'},
        {_id: 'PI', descricao: 'PI'},
        {_id: 'PR', descricao: 'PR'},
        {_id: 'RJ', descricao: 'RJ'},
        {_id: 'RN', descricao: 'RN'},
        {_id: 'RO', descricao: 'RO'},
        {_id: 'RR', descricao: 'RR'},
        {_id: 'RS', descricao: 'RS'},
        {_id: 'SC', descricao: 'SC'},
        {_id: 'SE', descricao: 'SE'},
        {_id: 'SP', descricao: 'SP'},
        {_id: 'TO', descricao: 'TO'}
    ];

    $scope.date = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0'
    };

});
