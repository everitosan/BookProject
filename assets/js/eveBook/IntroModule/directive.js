(function(){
	'use strict';

	angular.module('eveBook.directives')
		.directive('introDirective', ['$location', function($location){

			function link() {
				var s = Snap('#enter');

				Snap.load('images/enter2.svg', function(vector){
					s.append(vector.select('g'));
				});

				s.hover(hoverEnter);

				setTimeout(function(){
					s.attr({'opacity': 1});
				}, 1000);

				TweenMax.to('#logo', 5,{ delay: 7, css: {className: 'visible'} ,ease: Circ.easeInOut});
				playVideo('vide0');
				
			}
			
			function hoverEnter(){
				playSound('hoverEnter');
			}

			var definitionObject = {
				templateUrl: 'templates/eveBook/IntroModule/template.html',
				restrict: 'E',
				link: link
			};


			return definitionObject;
		}]);
})();