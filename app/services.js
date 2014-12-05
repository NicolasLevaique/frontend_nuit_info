'use strict';

angular.module('myApp.services', [])

  .service('Environment', [function() {
    return {
      //if dev
      backend: 'http://localhost:8300/api/'
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
        getMissionsByLocation: function (position) {
            var deferred = $q.defer();
            console.log(position.lat());
            console.log(position.lng());
            $http.get(Environment.backend + 'missions?lat='+position.lat()+'&long='+position.lng()).success(function (missions) {
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
    .service('MapService', ['$http', '$q', function() {
        return {
            traceRoute: function (directionsDisplay, originJSON, destinationJSON) {
                var origin = new google.maps.LatLng(originJSON.latitude, originJSON.longitude);
                var destination = new google.maps.LatLng(destinationJSON.latitude, destinationJSON.longitude);
                var directionsService = new google.maps.DirectionsService();
                var request = {
                    origin:origin,
                    destination:destination,
                    travelMode: google.maps.TravelMode.WALKING
                };
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            },
            initMap : function(id,centerPos) {
                var directionsDisplay;

                directionsDisplay = new google.maps.DirectionsRenderer();
                var mapOptions = {
                    center: centerPos,
                    zoom: 15
                };
                var map = new google.maps.Map(document.getElementById(id),
                    mapOptions);
                return map;
            }
        }
    }])

  .service('UserService', ['$http', '$q', 'Environment', function($http, $q, Environment) {
    return {
      getUser: function(id) {
        var deferred = $q.defer();
        $http.get(Environment.backend + 'users/' + id).success(function (user) {
          deferred.resolve(user);
        }).error(function (err, status) {
          deferred.reject(status);
        });
        return deferred.promise;
      }
    }
  }]);
