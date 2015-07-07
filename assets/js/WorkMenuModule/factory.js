(function wrapper() {
    'use strict';

    angular.module('eveBook.services')
        .factory('WorkMenuSrv', ['$http', '$q', function ($http, $q) {
            
            var getWorks = function() {
            	return generalGet('/work');
            };

            var getProjects = function(cat) {
            	return generalGet('/work/'+cat+'/projects');
            };

            var generalGet = function(url) {
               var defered = $q.defer();
               
                $http.get(url)
                    .success(function(data, status){
                        defered.resolve(data);
                    })
                    .error(function(data, status){
                        defered.reject(data);
                    });
                
                return defered.promise;
            };


            var data = {
            	getWorks : getWorks,
            	getProjects : getProjects
            };

            return data;
        }]);
})();	