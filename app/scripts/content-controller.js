;(function(){
	'use strict';

	angular
		.module('app')
		.controller('ContentController', ['$scope', '$rootScope', '$filter', 'ContentFactory', function($scope, $rootScope, $filter, ContentFactory){

			var originalData;
			var orderBy = $filter('orderBy');
			var filter = $filter('filter');
			$scope.checkedCount = 0;
			$scope.allStarred = false;
			$scope.reverse = true;

			ContentFactory.getEntries().success(function(data){
				$scope.list = originalData = data;
			});

			$scope.checkItem = function(item){
				if(item.isChecked){
					$scope.checkedCount++;
				} else {
					$scope.checkedCount--;
				}
				$scope.allChecked = false;
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

			$scope.starItem = function(item){
				item.starred = !item.starred;
			};

			$scope.starAll = function(allStarred){
				$scope.allStarred = !allStarred;
				$scope.list.forEach(function(item){
					item.starred = !allStarred;
				});
			};

			$scope.sortBy = function(predicate, reverse){
				$scope.list = orderBy($scope.list, predicate, reverse);
			};

			$scope.filterSteps = function(step){
				if(!step){
					$scope.list = originalData;
				} else {
					$scope.list = filter(originalData, {step: step});
				}
			};

			$scope.$on('addNew', function(event, newContact){
				originalData.push(newContact);
				$scope.list = originalData;
			});

			$scope.$on('removeSelected', function(){

				var deleted = [], kept = [];

				$scope.list.forEach(function(item){
					if(item.isChecked){
						deleted.push(item);
					} else {
						kept.push(item);
					}
				});

				$scope.list = kept;

				deleted.forEach(function(x){
					originalData.forEach(function(y, index){
						if(y['name'] === x['name']){
							originalData.splice(index, 1);
						}
					});
				});

				$scope.checkedCount = 0;
				$scope.allChecked = false;
			});
		}]);
})();