angular.module('contatooh').controller('PilotoController', function($scope, $routeParams, Piloto, Ufs, Municipios) {

    $scope.mensagem = {texto: ''}

    $scope.piloto = new Piloto();

    if($routeParams.pilotoId) {
        Piloto.get({id: $routeParams.pilotoId},
            function(piloto) {
                $scope.piloto = piloto;
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
        console.log('chamou aqui no onchange', $scope.piloto.uf);
        Municipios.query({uf: $scope.piloto.uf},
            function(municipios) {
                console.log('O QUE VEM EOJFOEWFWJFUEIF --', municipios);
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



});
