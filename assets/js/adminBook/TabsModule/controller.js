(function(){
	'use strict';

	angular.module('adminBook.controllers')
		.controller('tabsController', 
			['$scope', 'apiSrv', '$modal',function ($scope, apiSrv, $modal) {
				$scope.models = [
					[],//about
					[],//works
					[],//prjects
					[]//contact
				];

				$scope.hasAbout = false;
				$scope.projectArea = {};

				var Model = {};
				var genIndex = 0,
					genPar = 0;

				var map = [
						{tmp: 'aboutModal.html', ctrl: 'aboutModalController', model: $scope.about },
						{tmp: 'workModal.html', ctrl: 'workModalController', model: $scope.works },
						{tmp: 'projectModal.html', ctrl: 'projectModalController', model: $scope.projects },
						{tmp: 'contactModal.html', ctrl: 'contactModalController', model: $scope.contact }
					];

				function initData() {
					apiSrv.get('/about').then(function(data){
						$scope.models[0] = data;
						if(data.length > 0) {
							$scope.hasAbout = true;
						}
					});

					apiSrv.get('/work').then(function(data){
						$scope.models[1] = data;
					});

					apiSrv.get('/contact').then(function(data){
						$scope.models[3] = data;
					});
				}

				$scope.getProjects =  function() {
					apiSrv.get('/work/'+$scope.projectArea.id+'/projects').then(function(data){
						$scope.models[2] = data;
					});
				}

				$scope.postModal= function(par){
					Model = {};
					if(par == 2){
						Model.works=$scope.models[1];
					}
					genPar = par;
					var postM =  new modalClass(map[par].tmp, map[par].ctrl, 'new');
					postM.open();

				};

				$scope.updateModal= function(index, par){
					genIndex = index;
					genPar = par;
					Model = $scope.models[par][index];
					if(par == 2){
						Model.works=$scope.models[1];
					}
					var postM =  new modalClass(map[par].tmp, map[par].ctrl, 'update');
					postM.open();
				};

				$scope.deleteModal= function(index, par){
					genIndex = index;
					genPar = par;
					Model = $scope.models[par][index];
					var postM =  new modalClass(map[par].tmp, map[par].ctrl, 'delete');
					postM.open();
				};


				function modalClass (tmplName, controller, mode) {
					this.tmplName = tmplName;

					this.modalConf = {
						templateUrl: 'templates/adminBook/Modals/' + this.tmplName,
						controller: controller,
						backdrop: false,
						resolve: {
							Model : function () {
								Model.mode = mode;
								return Model;
							}
						},
						size: 'lg'
					};

					this.modalIntsance = $modal.open(this.modalConf);

					this.open = function(){ return this.modalIntsance; };

					this.modalIntsance.result.then(function(ModelRet){
						if(ModelRet.mod === "D") {  //Delete return
							if (ModelRet.description) {
								$scope.hasAbout = false;
							}
							
							$scope.models[genPar].splice(genIndex, 1);
						}
						else if(ModelRet.mod === "U") {  //Update return
							$scope.models[genPar][genIndex] = ModelRet;
						}
						else {					//Create return
							$scope.models[genPar].push(ModelRet);
							if (ModelRet.description) {
								$scope.hasAbout = true;
							}
						}
						
					}, function(){
					});
				}


				initData();
			}]);
})();