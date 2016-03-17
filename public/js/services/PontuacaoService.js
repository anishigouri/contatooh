angular.module('contatooh').factory('Pontuacao', function($resource) {
    return $resource('/pontuacoes/:id');
});
