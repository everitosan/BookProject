(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('contactController', 
			['$scope', 'apiSrv',function ($scope,apiSrv) {
				$scope.contact = {};

				apiSrv.get('/contact').then(function(data){
					$scope.contact = data[0];
				});

			}]);
})();