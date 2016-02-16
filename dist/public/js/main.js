angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });

    $routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });
    //Caso não exista a rota, direciona para contatos
    $routeProvider.otherwise({redirectTo: '/contatos'});
}]);
