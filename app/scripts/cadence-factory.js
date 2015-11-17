;(function(){
	'use strict';

	angular
		.module('app')
		.factory('CadenceFactory', ['$http', function($http){

			var getEntries = function(){
				return $http.get('entries.json');
			};

			return {
				getEntries: getEntries
			};
		}]);
})();