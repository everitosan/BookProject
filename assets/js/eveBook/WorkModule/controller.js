(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('workController', 
			['$scope', '$rootScope', function ($scope, $rootScope) {
				var showDetail = false;
				$scope.dataDetail = {};

				$scope.$on('showDetailProject', function(event, data){
					$scope.$apply(function() {
						showDetail = true;
						$scope.dataDetail = data;
					});
				});

				$scope.isDetail =  function() {
					return showDetail;
				}

				$scope.hideDetail = function () {
					$rootScope.$broadcast('closeDetail', {});
				};
			}]);
})();