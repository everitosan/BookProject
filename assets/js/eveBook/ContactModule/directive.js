(function(){
	angular.module('eveBook.directives')
	.directive('contactDirective', ['animationSrv', function(animationSrv){
	
	function link () {
		animationSrv.enterSection();

    var tLine = new TimelineMax();
    tLine.to('#contact', 1, {opacity: 1, ease: Circ.easeOut})
    			.to('.diamondParent', 2, {opacity:1, 'transform': 'rotateY(0deg)', ease: Circ.easeOut});
	}

	var definitionObject = {
        restrict: 'E',
        link: link,
        scope: true,
        templateUrl:'templates/eveBook/ContactModule/template.html'
      };

      return definitionObject;

	}]);
})();