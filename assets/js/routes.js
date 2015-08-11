angular.module('eveBook')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "templates/eveBook/IntroModule/templateRoute.html"
			})
			.when("/aboutme", {
				templateUrl: "templates/eveBook/AboutModule/templateRoute.html"
			})
			.when("/work", {
				templateUrl: "templates/eveBook/WorkModule/templateRoute.html"
			})
			.when("/contact", {
				templateUrl: "templates/eveBook/ContactModule/templateRoute.html"
			});
	}]);