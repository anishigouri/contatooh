angular.module('minhasDiretivas', [])
	.directive('itemPontuacao', function() {
        return {

					templateUrl: 'js/directives/item-pontuacao.html',
	        restrict: "AE",
					replace: true,

	        scope: {
	            pontuacao: '=pontuacao',
							acao : '&'
	        }

				}
    });
