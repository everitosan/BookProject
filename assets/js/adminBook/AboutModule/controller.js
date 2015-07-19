(function(){
	'use strict';

	angular.module('adminBook.controllers')
		.controller('aboutModalController', 
			['$scope', '$modalInstance', 'Model', 'apiSrv', function ($scope, $modalInstance, Model, apiSrv) {
				$scope.Model = Model;
				var _csrf = '';

				getToken();

				console.log($scope.Model);

				$scope.post = function () {
					$scope.Model._csrf=_csrf;
					apiSrv.post('/about/create/', $scope.Model).then(function(){
						$scope.Model.mod = null;	
						$modalInstance.close($scope.Model);
						removeModal();
					});
				};

				$scope.put = function() {
					$scope.Model._csrf=_csrf;
					apiSrv.post('/about/update/'+ Model.id , $scope.Model).then(function(){
						$modalInstance.close();
						removeModal();
					});
				};

				$scope.delete = function() {
					$scope.Model._csrf=_csrf;
					apiSrv.post('/about/destroy/'+ Model.id, $scope.Model).then(function(){
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