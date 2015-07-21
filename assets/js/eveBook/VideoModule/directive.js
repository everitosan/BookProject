(function(){
	angular.module('eveBook.directives')
	.directive('videoDirective', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/eveBook/VideoModule/template.html'
      };

      return definitionObject;

	}]);
})();