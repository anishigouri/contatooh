angular.module('contatooh').controller('PistaController', function($scope, $routeParams, Ufs, Municipios, Pista) {

    $scope.mensagem = {texto: ''}

    $scope.pista = new Pista();

    if($routeParams.pistaId) {
        Pista.get({id: $routeParams.pistaId},
            function(pista) {
                $scope.pista = pista;
                $scope.buscaMunicipios();
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
        $scope.pista.$save()
        .then(function() {
            alert('Salvo com sucesso', 'Filhos da Pista', 'success');
            $scope.pista = new Pista();
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        })
    };

    $scope.buscaMunicipios = function() {
        Municipios.query({uf: $scope.pista.uf},
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

});
