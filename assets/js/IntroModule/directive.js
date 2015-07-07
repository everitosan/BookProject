(function(){
	'use strict';

	angular.module('eveBook.directives')
		.directive('introDirective',function(){
			var audio,
				audioClick;

			function link() {
				var s = Snap('#enter');
				audio = new Audio('media/incidentals/enter.ogg');
				audioClick = $('#clicked')[0];

				Snap.load('images/enter2.svg', function(vector){
					s.append(vector.select('g'));
				});

				s.hover(hoverEnter);
				s.click(step2);

				setTimeout(function(){
					s.attr({'opacity': 1});
				}, 1000);
				setTimeout(function(){
					$('#logo').toggleClass('show').toggleClass('hidden');
				}, 4000);
			}

			function step2(){
				audioClick.play();
				$('#menu').animate(
					{'flex-grow': '1.4'},
					1000,
					'linear'
				);
				
				setTimeout(function(){
					$('#menu nav').css('opacity', 1);
				},1000);
		
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