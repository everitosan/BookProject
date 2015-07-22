(function(){
	angular.module('eveBook.directives')
	.directive('incidentalDirective', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/eveBook/IncidentalModule/template.html'
      };

      return definitionObject;

	}]);
})();