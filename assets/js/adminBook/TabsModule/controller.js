(function(){
	'use strict';

	angular.module('adminBook.controllers')
		.controller('tabsController', 
			['$scope', 'apiSrv', '$modal',function ($scope, apiSrv, $modal) {
				$scope.about = [];
				$scope.work = [];
				$scope.contact = [];
				$scope.hasAbout = false;

				var Model = {};
				var genIndex = 0;

				function initData() {
					apiSrv.get('/about').then(function(data){
						$scope.about = data;
						if(data.length > 0) {
							$scope.hasAbout = true;
						}
					});

					apiSrv.get('/work').then(function(data){
						$scope.work = data;
					});

					apiSrv.get('/contact').then(function(data){
						$scope.contact = data;
					});
				}

				$scope.postModal= function(){
					var postM =  new modalClass('postTmpl.html', 'aboutModalController');
					postM.open();	
				};

				$scope.updateModal= function(index){
					Model = $scope.about[index];

					var postM =  new modalClass('updateTmpl.html', 'aboutModalController');
					postM.open();
				};

				$scope.deleteModal= function(index){
					genIndex = index;
					Model = $scope.about[index];
					var postM =  new modalClass('deleteTmpl.html', 'aboutModalController');
					postM.open();
				};


				function modalClass (tmplName, controller) {
					this.tmplName = tmplName;

					this.modalConf = {
						templateUrl: 'templates/adminBook/AboutModule/' + this.tmplName,
						controller: controller,
						backdrop: false,
						resolve: {
							Model : function () {
								return Model;
							}
						},
						size: 'lg'
					};

					this.modalIntsance = $modal.open(this.modalConf);

					this.open = function(){ return this.modalIntsance; };

					this.modalIntsance.result.then(function(Model){
						if(Model.mod === "D") {
							$scope.about[genIndex] = null;
						}
						else {
							$scope.about[genIndex] = Model;
						}
					}, function(){
						console.log('dismissed');
					});
				}


				initData();
			}]);
})();