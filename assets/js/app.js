(function(){
	'use strict';

	angular.module('eveBook', [
		'ngRoute',
		'ngAnimate',
		'eveBook.animations',
		'eveBook.controllers',
		'eveBook.directives',
		'eveBook.services'
		]);

	angular.module('eveBook.animations', []);
	angular.module('eveBook.controllers', []);
	angular.module('eveBook.directives', []);
	angular.module('eveBook.services', []);
})();