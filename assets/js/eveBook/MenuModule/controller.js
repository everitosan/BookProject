(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('MenuController', 
			['$scope', '$location', function ($scope, $location) {
				
				$scope.redirect = function(path){
					$location.path(path);
				};
				
			}]);
})();