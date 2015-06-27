(function(){
	angular.module('eveBook.directives')
	.directive('menuDirective', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/MenuModule/template.html'
      };

      return definitionObject;

	}]);
})();