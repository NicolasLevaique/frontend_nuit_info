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
    
    .service('ManageMissionService', ['$http', '$q', 'Environment', function($http, $q, Environment) {
        return {
            volunteerArrived: function (idMission, idVolunteer) {
               var deferred = $q.defer();
                $http.post(Environment.backend + "volunteer/present/?idMission=" + idMission + "&idVolunteer=" + idVolunteer)
                    .success(function (status) {
                        deferred.resolve();
                    }).error(function (err, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
            
            getVolunteers: function (idMission) {
               var deferred = $q.defer();
                $http.get(Environment.backend + "missions/volunteers/" + idMission)
                    .success(function (status) {
                        deferred.resolve();
                    }).error(function (err, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
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
  }])
    
    .service('LoginService', ['$http', '$q', 'Environment', function($http, $q, Environment) {
    return {
        login: function (id, token) {
          var deferred = $q.defer();
          $http.post(Environment.backend + 'login/', id, password).success(function (token) {
            deferred.resolve(token);
          }).error(function (err, status) {
            deferred.reject(status);
          });
          return deferred.promise;
        },
      getMission: function(id, token) {
        var deferred = $q.defer();
        $http.post(Environment.backend + 'logout/',id, token).success(function (status) {
          deferred.resolve(status);
        }).error(function (err, status) {
          deferred.reject(status);
        });
        return deferred.promise;
      }
    }
  }])