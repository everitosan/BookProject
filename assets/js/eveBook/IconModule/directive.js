(function(){
	angular.module('eveBook.directives')
	.directive('iconDirective', [function(){
    function link (scope, element) {

      $('#menuMobile').on('click', toggleMenu);
      if(!isMobile()) {
        document.getElementById('soundMobile').addEventListener('click', toggleBGAudio);
      }

      $(element).on('mouseenter', hover);
      $(element).on('mouseleave', unhover);
      $(element).on('click', function(){playSound('clicked')});
    }

    function hover () {
      $(this).children().addClass('active');
      playSound('hoverIcon');
    }

    function unhover() {
      resetSound('hoverIcon');
      $(this).children().removeClass('active');
    }
    function toggleMenu() {
      TweenMax.to('#menu', 1, {right: 0,  ease: Circ.easeOut});
    }

    function toggleBGAudio(event) {
      var bars = document.getElementById('sound').contentDocument.getElementById('sSs');
      if(bars.getAttribute('class') == 'colored') {
        bars.setAttribute('class','notColored');
      }
      else {
        bars.setAttribute('class','colored');
      }
      
      toggleVolume('myste');
      toggleVolume('vide0');
    }

	var definitionObject = {
        restrict: 'E',
        scope: {
        	src: '@',
          link: '@',
          target: '@'
        },
        link: link,
        templateUrl:'templates/eveBook/IconModule/template.html'
      };

      return definitionObject;

	}]);
})();