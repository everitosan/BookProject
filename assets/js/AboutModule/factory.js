(function wrapper() {
    'use strict';

    angular.module('eveBook.services')
        .factory('aboutSrv', ['$http', '$q', function ($http, $q) {
            function getInfo() {
            	var defered = $q.defer();
            	$http.get('/about')
            		.success(function(data){
            			defered.resolve(data);
            		})
            		.error(function(data){
            			defered.reject(data);
            		});
            	return defered.promise;
            }

            var data = {
            	getInfo: getInfo
            };

            return data;
        }]);
})();