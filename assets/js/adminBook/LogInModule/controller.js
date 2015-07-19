(function(){
	'use strict';

	angular.module('adminBook.controllers')
		.controller('signInController', 
			['$scope',function ($scope) {
				$scope.logged = false;
				var active = 1;

				var user = {};
				$scope.$on('event:google-plus-signin-success', function (event,authResult) {
				 	if(authResult['error'] === undefined )
				 	{
				 		gapi.auth.setToken(authResult);
				 		$scope.$apply(function(){
				 			$scope.logged = authResult.status.signed_in;
				 		});
				 		gapi.client.load('oauth2', 'v2', function() {
						var request = gapi.client.oauth2.userinfo.get();
							request.execute(function(obj){
								user = obj;
							});
        				});
				 	}
				});
				$scope.$on('event:google-plus-signin-failure', function (event,authResult) {
				});

				$scope.setActive = function(tab) {
					active = tab;
				};

				$scope.activeTab = function(tab) {
					return tab == active;
				};
			}]);
})();	