(function(){
	angular.module('adminBook.directives')
	.directive('tabsDirective', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/adminBook/TabsModule/template.html'
      };

      return definitionObject;

	}]);
})();