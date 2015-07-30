(function(){
	'use strict';

	angular.module('eveBook.directives')
		.directive("navDirective",function(){

			var $element, loadAudio, filter, filterChild;

			function link(scope, element) {
				setTimeout(function(){
					$('#icons').css('opacity', 1);
				}, 500);
			}
			

			var definitionObject = {
				templateUrl: 'templates/eveBook/NavModule/template.html',
				restrict: 'E',
				link: link
			};
			return definitionObject;
		});
})();