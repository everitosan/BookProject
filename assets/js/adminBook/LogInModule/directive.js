(function(){
	angular.module('adminBook.directives')
	.directive('loginDirective', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/adminBook/LogInModule/template.html'
      };

      return definitionObject;

	}]);
})();