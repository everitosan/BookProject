(function(){
	angular.module('eveBook.directives')
	.directive('iconDirective', [function(){
    function link (scope, element) {

      $('#menuMobile').on('click', toggleMenu);
      $(element).on('mouseenter', hover);
      $(element).on('mouseleave', unhover);
    }

    function hover () {
      $(this).children().addClass('active');
    }

    function unhover() {
      $(this).children().removeClass('active');
    }
    function toggleMenu() {
      TweenMax.to('#menu', 1, {right: 0,  ease: Circ.easeOut});
    }

	var definitionObject = {
        restrict: 'E',
        scope: {
        	src: '@'
        },
        link: link,
        templateUrl:'templates/eveBook/IconModule/template.html'
      };

      return definitionObject;

	}]);
})();