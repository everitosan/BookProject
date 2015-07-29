(function(){
	'use strict';

	angular.module('eveBook.directives')
		.directive('introDirective',function(){

			function link() {
				var s = Snap('#enter');

				Snap.load('images/enter2.svg', function(vector){
					s.append(vector.select('g'));
				});

				s.hover(hoverEnter);
				s.click(step2);

				setTimeout(function(){
					s.attr({'opacity': 1});
				}, 1000);

				TweenMax.to('#logo', 5,{ delay: 7, css: {className: 'visible'} ,ease: Circ.easeInOut});
				
			}

			function step2(){
				if(!isMobile()) {
					playSound('myste');
					pauseVideo('vide0');
				}

				playSound('clicked');

				TweenMax.to('#sub-wrapper', 1, { width: '75%', ease: Power0.easeNone});
				TweenMax.to('#menu', 1, { width: '25%', ease: Power0.easeNone});
				TweenMax.to('#menu nav', 1, { opacity: 1, ease: Power0.easeNone});
		
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
		});
})();