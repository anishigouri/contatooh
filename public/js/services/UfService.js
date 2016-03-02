angular.module('contatooh').factory('Ufs', function($resource) {
    return $resource('/endereco/ufs');
});
