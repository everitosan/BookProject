(function wrapper() {
    'use strict';

    angular.module('eveBook.services')
        .factory('workSrv', ['$http', '$q', function ($http, $q) {
            
            function getWork(){
            	var defered= $q.defer();

            	$http.get('/work/')
            		.success(function(data, status){
            			defered.resolve(data);
            		})
            		.error(function(data, status){
            			defered.reject(data);
            		});

            	return defered.promise;
            }

            var data = {
            	getWork : getWork
            };

            return data;
        }]);
})();