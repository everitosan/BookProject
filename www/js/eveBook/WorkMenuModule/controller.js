(function(){
	'use strict';

	angular.module('eveBook.controllers')
		.controller('WorkMenuController', 
			['$scope', 'apiSrv', '$rootScope', function ($scope, apiSrv, $rootScope) {
				$scope.categories = [];
				$scope.projects = [];
				$scope.catActive = 0;
				$scope.showAllCats = false;

				$scope.isCatActive = function(index) {
					index++;
					return (index === $scope.catActive);
				};

				$scope.toggleX = function() {
					$scope.showAllCats = !$scope.showAllCats; //hideAllcats
					$rootScope.$broadcast('toggleXClass', {});
				};

				$scope.getProjects = function(index){
					$('#clicked')[0].play();

					index++;
					if(index === $scope.catActive) {
						return false;
					}
					
					$scope.catActive = index;
					$scope.showAllCats = !$scope.showAllCats;
					$rootScope.$broadcast('toggleXClass', {});
					apiSrv.get('/work/'+index+'/projects')
						.then(function(data) {
							$rootScope.$broadcast('dataObtained', data);
						});
				};

				var getCategories = function() {
					apiSrv.get('/work')
						.then(function(data){
							$scope.categories = data;
							setTimeout(function(){
								document.querySelector('.toogler').click();
							}, 2000);
						});
				};

				getCategories();

			}]);
})();