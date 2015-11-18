;(function(){
	'use strict';

	angular
		.module('app')
		.controller('NavigationController', ['$scope', function($scope){

			$scope.$on('toggleNav', function() {
				$scope.isHidden = !$scope.isHidden;
			});

		}]);
})();