;(function(){
	'use strict';

	angular
		.module('app')
		.controller('CadenceController', ['$scope', '$rootScope', 'CadenceFactory', function($scope, $rootScope, CadenceFactory){

			CadenceFactory.getEntries().success(function(data){
				$scope.list =  data
			});

			$scope.checkedCount = 0;

			$scope.checkItem = function(item){
				if(item.isChecked){
					$scope.checkedCount++
				} else {
					$scope.checkedCount--
				}
			};

			$scope.checkAll = function(allChecked){
				$scope.list.forEach(function(item){
					item.isChecked = allChecked;
				});
				if(allChecked){
					$scope.checkedCount = $scope.list.length;
				} else {
					$scope.checkedCount = 0;
				}
			};


		}]);
})();