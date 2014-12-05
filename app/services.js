'use strict';

angular.module('myApp.services', [])

  .service('Environment', [function() {
    return {
      //if dev
      backend: 'http://localhost:10200/api/'
      // if prod
//      backend: 'http://3ma7.learning-socle.org/'
    }
  }])

  .service('VolunteerService', ['$http', '$q', 'Environment', function($http, $q, Environment) {
    return {
        getMissions: function () {
          var deferred = $q.defer();
          $http.get(Environment.backend + 'missions/').success(function (missions) {
            deferred.resolve(missions);
          }).error(function (err, status) {
            deferred.reject(status);
          });
          return deferred.promise;
        },
      getMission: function(id) {
        var deferred = $q.defer();
        $http.get(Environment.backend + 'missions/' + id).success(function (mission) {
          deferred.resolve(mission);
        }).error(function (err, status) {
          deferred.reject(status);
        });
        return deferred.promise;
      }
    }
  }]);
