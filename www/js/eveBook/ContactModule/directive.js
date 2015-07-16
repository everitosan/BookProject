(function(){
	angular.module('eveBook.directives')
	.directive('contactDirective', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/eveBook/ContactModule/template.html'
      };

      return definitionObject;

	}]);
})();