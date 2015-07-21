(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('videoController', 
			['$scope',function ($scope) {
				$scope.isMobile = isMobile();
			}]);
})();