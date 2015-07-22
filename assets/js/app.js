(function(){
	'use strict';

	angular.module('eveBook', [
		'ngRoute',
		'ngAnimate',
		'eveBook.animations',
		'eveBook.controllers',
		'eveBook.directives',
		'eveBook.services',
		'genBook.services',
		'yaru22.md'
		]);

	angular.module('eveBook.animations', []);
	angular.module('eveBook.controllers', []);
	angular.module('eveBook.directives', []);
	angular.module('eveBook.services', []);


	angular.module('adminBook', [
		'ngRoute',
		'ngAnimate',
		'directive.g+signin',
		'adminBook.animations',
		'adminBook.controllers',
		'adminBook.directives',
		'adminBook.services',
		'genBook.services',
		'ui.bootstrap',
		'yaru22.md'
		]);

	angular.module('adminBook.animations', []);
	angular.module('adminBook.controllers', []);
	angular.module('adminBook.directives', []);
	angular.module('adminBook.services', []);


	angular.module('genBook.services', []);
})();