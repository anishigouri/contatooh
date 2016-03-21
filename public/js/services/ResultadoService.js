angular.module('contatooh').factory('Resultado', function($resource) {
    return $resource('/resultados/:id');
});
