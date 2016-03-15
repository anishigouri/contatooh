angular.module('contatooh').factory('Calendario', function($resource) {
    return $resource('/calendarios/:id');
});
