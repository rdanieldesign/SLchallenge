;(function(){
	'use strict';

	angular
		.module('app')
		.controller('HeaderController', ['$scope', '$rootScope', function($scope, $rootScope){

			$scope.closed = true;

			$scope.toggleNav = function(){
				$rootScope.$broadcast('toggleNav');
				$scope.closed = !$scope.closed;
			};

		}]);
})();