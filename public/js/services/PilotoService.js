angular.module('contatooh').factory('Piloto', function($resource) {
    return $resource('/pilotos/:id');
});
