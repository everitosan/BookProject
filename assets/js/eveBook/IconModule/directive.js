(function(){
	angular.module('eveBook.directives')
	.directive('iconDirective', [function(){
    function link (scope, element) {
      $(element).hover(hover, unhover);
    }

    function hover () {
      $(this).children().addClass('active');
    }

    function unhover() {
      $(this).children().removeClass('active');
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