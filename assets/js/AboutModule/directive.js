(function(){
	
	'use strict';

	angular.module('eveBook.directives')
		.directive("aboutDirective", function(){

			

			var definitionObject =  {
				restrict: 'E',
				templateUrl : "templates/AboutModule/template.html"
			};

			return definitionObject;
		});

})();