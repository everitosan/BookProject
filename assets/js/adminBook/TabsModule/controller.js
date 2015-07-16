(function(){
	'use strict';

	angular.module('adminBook.controllers')
		.controller('tabsController', 
			['$scope', 'apiSrv', '$modal',function ($scope, apiSrv, $modal) {
				$scope.about = [];
				$scope.work = [];
				$scope.contact = [];
				$scope.hasAbout = false;


				function initData() {
					apiSrv.get('/about').then(function(data){
						$scope.about = data;
						$scope.hasAbout = true;
					});

					apiSrv.get('/work').then(function(data){
						$scope.work = data;
					});

					apiSrv.get('/contact').then(function(data){
						$scope.contact = data;
					});
				}

				$scope.aboutModal= function(){
					var modalIntsance = $modal.open({
						templateUrl: 'templates/adminBook/AboutModule/modalTmpl.html',
						size: 'lg'
					});
				};


				initData();
			}]);
})();