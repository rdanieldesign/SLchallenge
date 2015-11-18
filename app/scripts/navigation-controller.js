;(function(){
	'use strict';

	angular
		.module('app')
		.controller('NavigationController', ['$scope', function($scope){

			$scope.isHidden = true;

			$scope.$on('toggleNav', function() {
				$scope.isHidden = !$scope.isHidden;
			});

		}]);
})();