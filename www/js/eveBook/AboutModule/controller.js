(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller("AboutController", ['$scope', 'apiSrv', function($scope, apiSrv){
			$scope.isActive =  function(i) {
				return $scope.$parent.isActive(i);
			};
			apiSrv.get('/about').then(function(data){
				$scope.Info = data[0];
			});

		}]);
})();

