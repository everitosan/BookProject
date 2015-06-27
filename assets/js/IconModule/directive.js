(function(){
	'use strict';

	angular.module('eveBook.directives')
		.directive("iconDirective",function(){

			var $element, loadAudio, filter, filterChild;

			function link(scope, element) {
				loadAudio = new  Audio('/media/incidentals/Zing 03.mp3');
				$element = $(element);
				var arrIzq = ['facebook', 'github', 'behance'];
				var arrDer = ['share', 'sound'];

				loadSvgIcons(arrIzq, '.left');
				loadSvgIcons(arrDer, '.right');

				setTimeout(function(){
					$('#icons').css('opacity', 1);
				}, 500);
			}

			function shutUpVideo() {
				var video = document.getElementById('videoBg');
				video.volume = !video.volume;
			}

			function iconBlured () {
				this.attr({ filter: filter });
				Snap.animate( 0, 10, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, 1000 );
				loadAudio.play();
			}

			function iconNotBlured () {
				this.attr({ filter: null });
				loadAudio.pause();
				loadAudio.currentTime=0;
			}

			function iconColored() {
				this.toggleClass('active');
				this.attr({ filter: null });
			}

			function loadSvgIcons (arr, context) {
				arr.forEach(function(icon, index, arr){
					var svg = $('<svg id ="'+icon+'" ></svg>');
					$($element.find(context)).append(svg);

	
					var Icon = Snap('#'+icon);
					filter = Icon.filter(Snap.filter.blur(1, 1)); //filter for blur click
					filterChild = filter.node.firstChild;

					Snap.load("images/icons/"+icon+".svg", function(vector){
						var iconLoaded = vector.select('g');

						var myMatrix = new Snap.Matrix();
						myMatrix.scale(.7,.7);
						
						var initialState = {
							'transform': myMatrix
						};	

						Icon.click(iconColored);
						
						Icon.hover(iconBlured, iconNotBlured);

						iconLoaded.attr(initialState);
						Icon.append(iconLoaded);

						$('#sound').attr('class', 'active');
						$('#sound').on('click', shutUpVideo);
					});
				});
			}



			var definitionObject = {
				templateUrl: "templates/IconModule/template.html",
				restrict: 'E',
				link: link
			};
			return definitionObject;
		});
})();