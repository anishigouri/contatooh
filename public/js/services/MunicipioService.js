angular.module('contatooh').factory('Municipios', function($resource) {
    return $resource('/endereco/municipio/:uf');
});
