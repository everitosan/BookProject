(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('navController', 
			['$scope',function ($scope) {
				$scope.isMobile = isMobile();
			}]);
})();