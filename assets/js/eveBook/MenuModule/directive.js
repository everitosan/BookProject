(function(){
	angular.module('eveBook.directives')
	.directive('menuDirective', [function(){

		function link (scope, element) {
			
			$(element).find('li').hover(playSoundHover, stopSoundHover).click(Click);
			$(element).mouseleave(selectActive);

			if($('#menu nav').css('opacity') == 1) {
				$(element).find('li').click(hideMenu);
			}

		}

		function selectActive() {
			var top = parseInt($('.menuActive').position().top) + (parseInt($('.menuActive').parent().css('height'))*.12);
			$('#selectedImg').css('top', top);
		}

		function playSoundHover(){
			playSound('hoverMenu');
			moveRect(this);
		}

		function stopSoundHover() {
			resetSound('hoverMenu');
		}

		function hideMenu() {
      TweenMax.to('#menu', 1, {right: '100%',  ease: Circ.easeOut});
		}

		function Click() {
			colorBG(this);
		}

		function colorBG(el) {
			$('.menuActive').removeClass('menuActive');
			$(el).addClass('menuActive');
		}

		function moveRect(el) {
			var top = parseInt($(el).position().top) + (parseInt($(el).parent().css('height'))*.12 );
			$('#selectedImg').css('top', top);
		}


	var definitionObject = {
        restrict: 'E',
        link: link,
        scope: true,
        templateUrl:'templates/eveBook/MenuModule/template.html'
      };

      return definitionObject;

	}]);
})();