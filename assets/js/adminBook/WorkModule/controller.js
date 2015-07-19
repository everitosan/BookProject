(function(){
	'use strict';

	angular.module('adminBook.controllers')
		.controller('workModalController', 
			['$scope', '$modalInstance', 'Model', 'apiSrv', function ($scope, $modalInstance, Model, apiSrv) {
				$scope.Model = Model;
				var _csrf = '';

				getToken();

				$scope.post = function () {
					$scope.Model._csrf=_csrf;
					apiSrv.post('/work/create/', $scope.Model).then(function(data){
						$scope.Model.mod = null;	
						$scope.Model = data;
						$modalInstance.close($scope.Model);
						removeModal();
					});
				};

				$scope.put = function() {
					$scope.Model._csrf=_csrf;
					apiSrv.post('/work/update/'+ Model.id , $scope.Model).then(function(data){
						$scope.Model = data;
						$scope.Model.mod = "U";
						$modalInstance.close($scope.Model);
						removeModal();
					});
				};

				$scope.delete = function() {
					$scope.Model._csrf=_csrf;
					apiSrv.post('/work/destroy/'+ Model.id, $scope.Model).then(function(data){
						$scope.Model = data;
						$scope.Model.mod = "D";
						$modalInstance.close($scope.Model);
						removeModal();
					});
				};

				$scope.close = function () {
					$modalInstance.dismiss('cancel');
					removeModal();
				};

				$scope.isMode = function (par) {
					return (par == Model.mode);
				};

				function removeModal() {
					var m = document.querySelector('.modal');
					m.parentNode.removeChild(m);
				}

				function getToken (){
					apiSrv.get('csrfToken').then(function(data){
						_csrf = data._csrf;
					});
				}
			}]);
})();