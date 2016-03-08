angular.module('contatooh').factory('Pista', function($resource) {
    return $resource('/pistas/:id');
});
