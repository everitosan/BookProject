(function(){
	'use strict';

	angular.module('eveBook.directives')
		.directive('introDirective',function(){
			var audio;

			function link() {
				var s = Snap('#enter');
				audio = new Audio('media/incidentals/enter.ogg');

				Snap.load('images/enter2.svg', function(vector){
					s.append(vector.select('g'));
				});

				s.hover(hoverEnter);

				setTimeout(function(){
					s.attr({'opacity': 1});
				}, 1000);
				setTimeout(function(){
					$('#logo').toggleClass('show').toggleClass('hidden');
				}, 4000);
			}

			function hoverEnter(){
				audio.play();
			}

			var definitionObject = {
				templateUrl: "templates/IntroModule/template.html",
				restrict: 'E',
				link: link
			};


			return definitionObject;
		});
})();