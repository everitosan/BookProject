(function(){
	angular.module('eveBook.directives')
	.directive('workMenuDirective', [function(){

	function link($scope, element) {
		$scope.$on('toggleXClass', function(event, data){
			$('.toogler').toggleClass('toogled');
		});
	}

	var definitionObject = {
		restrict: 'E',
		link: link,
		templateUrl:'templates/WorkMenuModule/template.html'
	  };

	  return definitionObject;

	}]);
})();