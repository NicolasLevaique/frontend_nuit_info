/**
 * Created by Thomas on 04/12/2014.
 */

angular.module('myApp.services', [])

    .service('Environment', [function() {
        return {
            //if dev
            //backend: 'http://localhost:8200/api/'
            //if prod
            backend: 'http://localhost:8300/api/'
        }
    }])


    .service('PostMissionService', ['$http', '$q', 'Environment', function($http, $q, Environment) {
        return {
            postMission: function (jsonMission) {
               var deferred = $q.defer();
                $http.post(Environment.backend + "orga/missions", jsonMission)
                    .success(function (status) {
                        deferred.resolve();
                    }).error(function (err, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
        }
    }])