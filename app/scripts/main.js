(function(){
	'use strict';

	angular
		.module('app', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider.state('state1', {
				url: '/',
				templateUrl: 'templates/cadence.html',
				controller: 'CadenceController'
			});
		}]);

}());