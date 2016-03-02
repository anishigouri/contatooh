angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $httpProvider) {

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

    $routeProvider.when('/piloto/:pilotoId', {
        templateUrl: 'partials/piloto/piloto.html',
        controller: 'PilotoController'
    });

    $routeProvider.when('/pilotos', {
        templateUrl: 'partials/piloto/pilotos.html',
        controller: 'PilotosController'
    })

    $routeProvider.when('/piloto', {
        templateUrl: 'partials/piloto/piloto.html',
        controller: 'PilotoController'
    });

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });
    //Caso não exista a rota, direciona para contatos
    $routeProvider.otherwise({redirectTo: '/contatos'});
});
