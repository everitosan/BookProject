(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller("AboutController", ['$scope', 'aboutSrv', function($scope, aboutSrv){
			$scope.isActive =  function(i) {
				return $scope.$parent.isActive(i);
			};
			aboutSrv.getInfo().then(function(data){
				$scope.Info = data[0];
			});

		}]);
})();

