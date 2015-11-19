;(function(){
	'use strict';

	angular
		.module('app')
		.controller('ModalController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){

			$scope.addNew = function(){
				var newContact = {
					starred: false,
					name: $scope.newName,
					company: $scope.newCompany,
					stage: 'New',
					step: 1,
					views: 0,
					clicks: 0,
					replies: 0,
					calls: 0,
					due: $scope.newDue,
					lastContacted: 'Never'
				};
				$rootScope.$broadcast('addNew', newContact);
				$state.go('home');
			};

			$scope.removeSelected = function(){
				$rootScope.$broadcast('removeSelected');
				$state.go('home');
			};

			$scope.toggleNav = function(){
				$rootScope.$broadcast('toggleNav');
				$scope.closed = !$scope.closed;
			};

		}]);
})();