;(function(){
	'use strict';

	angular
		.module('app')
		.factory('ContentFactory', ['$http', function($http){

			var getEntries = function(){
				return $http.get('entries.json');
			};

			return {
				getEntries: getEntries
			};
		}]);
})();