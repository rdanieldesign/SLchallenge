(function(){
	'use strict';

	angular
		.module('app', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home',{
					url: '/',
					views: {
						'content': {
							templateUrl: 'templates/content.html',
							controller: 'ContentController'
						},
						'navigation': {
							templateUrl: 'templates/navigation.html',
							controller: 'NavigationController'
						},
						'header': {
							templateUrl: 'templates/header.html',
							controller: 'HeaderController'
						}
					}
				})
				.state('home.addModal', {
					views: {
						'modal': {
							templateUrl: 'templates/addModal.html',
							controller: 'ModalController'
						}
					}
				})
				.state('home.removeModal', {
					views: {
						'modal': {
							templateUrl: 'templates/removeModal.html',
							controller: 'ModalController'
						}
					}
				});
		}]);
}());