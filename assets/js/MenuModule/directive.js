(function(){
	angular.module('eveBook.directives')
	.directive('menuDirective', [function(){
		var audio, audioClick;

		function link (scope, element) {
			audio = new  Audio('/media/incidentals/2138.ogg');
			audioClick = $('#clicked')[0];
			$(element).find('li').hover(playSound, stopSound).click(playClick);
			$(element).mouseleave(selectActive);
			selectFirst();

			$('#aboutLink').click(animateAbout);
		}

		function selectActive() {
			var top = parseInt($('.menuActive').position().top) + (parseInt($('.menuActive').parent().css('height'))*.12);
			$('#selectedImg').css('top', top);
		}

		function selectFirst() {
			var $el = $('#menu nav ul li:first')
			var top = parseInt($el.position().top) + (parseInt($el.parent().css('height'))*.08 );

			$el.addClass('menuActive');
			$('#selectedImg').css('top', top);
		}

		function playSound(){
			audio.play();
			moveRect(this);
		}

		function stopSound() {
			audio.pause();
			audio.currentTime = 0;
		}

		function playClick() {
			audioClick.play();
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

		
		function animateAbout() {
			
			
		}

	var definitionObject = {
        restrict: 'E',
        link: link,
        scope: true,
        templateUrl:'templates/MenuModule/template.html'
      };

      return definitionObject;

	}]);
})();