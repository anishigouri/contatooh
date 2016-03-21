angular.module('contatooh', ['ngRoute', 'ngResource', 'ui.mask', 'ngCpfCnpj', 'minhasDiretivas', 'ImageCropper'])
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

    $routeProvider.when('/pista', {
        templateUrl: 'partials/pista/pista.html',
        controller: 'PistaController'
    });

    $routeProvider.when('/pista/:pistaId', {
        templateUrl: 'partials/pista/pista.html',
        controller: 'PistaController'
    });

    $routeProvider.when('/pistas', {
        templateUrl: 'partials/pista/pistas.html',
        controller: 'PistasController'
    })

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

    $routeProvider.when('/pontuacao', {
        templateUrl: 'partials/pontuacao/pontuacao.html',
        controller: 'PontuacaoController'
    });

    $routeProvider.when('/pontuacao/:pontuacaoId', {
        templateUrl: 'partials/pontuacao/pontuacao.html',
        controller: 'PontuacaoController'
    });

    $routeProvider.when('/calendario', {
        templateUrl: 'partials/calendario/calendario.html',
        controller: 'CalendarioController'
    });

    $routeProvider.when('/calendarios', {
        templateUrl: 'partials/calendario/calendarios.html',
        controller: 'CalendariosController'
    })

    $routeProvider.when('/calendario/:calendarioId', {
        templateUrl: 'partials/calendario/calendario.html',
        controller: 'CalendarioController'
    });

    $routeProvider.when('/resultados', {
        templateUrl: 'partials/resultado/resultados.html',
        controller: 'ResultadosController'
    })

    $routeProvider.when('/resultado', {
        templateUrl: 'partials/resultado/resultado.html',
        controller: 'ResultadoController'
    });

    $routeProvider.when('/resultado/:resultadoId', {
        templateUrl: 'partials/resultado/resultado.html',
        controller: 'ResultadoController'
    });

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });
    //Caso não exista a rota, direciona para contatos
    $routeProvider.otherwise({redirectTo: '/pilotos'});
});
