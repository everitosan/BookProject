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

				TweenMax.to('#logo', 5,{ delay: 5, 'opacity':1, "-webkit-filter": "blur(0)" ,ease: Circ.easeInOut});
				
			}

			function step2(){
				var video = document.getElementById('videoBg');
				video.pause();
				audioClick.play();

				TweenMax.to('#sub-wrapper', 1, { width: '75%', ease: Power0.easeNone});
				TweenMax.to('#menu', 1, { width: '25%', ease: Power0.easeNone});
				TweenMax.to('#menu nav', 1, { opacity: 1, ease: Power0.easeNone});
		
			}
			
			function hoverEnter(){
				audio.play();
			}

			var definitionObject = {
				templateUrl: 'templates/eveBook/IntroModule/template.html',
				restrict: 'E',
				link: link
			};


			return definitionObject;
		});
})();