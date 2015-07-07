(function wrapper() {
    'use strict';

    angular.module('eveBook.services')
        .factory('loadIconSrv', ['$http', '$q', function ($http, $q) {

        	function getIcon(iconName){     
            	var defered = $q.defer();
	        	$http.get('/images/'+iconName+'.svg')
	        		.success(function(data, status){
		        				defered.resolve(data);
		        	})
		        	.error(function(data, status){
		        				defered.resolve(data);
		        	});

		        return defered.promise;
        	}
            
            var data = {
            	getIcon: getIcon
            };

            return data;
        }]);
})();	