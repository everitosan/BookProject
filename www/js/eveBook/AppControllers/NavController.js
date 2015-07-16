(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('NavController', 
			['$scope',function ($scope) {
				
				$scope.activeSection = 0;

				$scope.setActive= function(sectNumber) {
					$scope.activeSection = sectNumber;
				};

				$scope.isActive = function(sectNumber){
					return (sectNumber === 	$scope.activeSection);
				};

			}]);
})();	