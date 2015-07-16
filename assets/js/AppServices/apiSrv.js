(function wrapper() {
    'use strict';

    angular.module('genBook.services')
        .factory('apiSrv', ['$http', '$q', function ($http, $q) {
            function get(url) {
            	var defered= $q.defer();

            	$http.get(url)
            		.success(function(data, status){
            			defered.resolve(data);
            		})
            		.error(function(data, status){
            			defered.reject(data);
            		});

            	return defered.promise;
            }

            function post(url, data) {
            	var defered= $q.defer();
            	
            	$http.post(url, data)
            		.success(function(data, status){
            			defered.resolve(data);
            		})
            		.error(function(data, status){
            			defered.reject(data);
            		});

            	return defered.promise;
            }

            var data = {
            	get: get,
            	post: post
            };

            return data;
        }]);
})();