'use strict';

angular.module('myApp.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/missions/:id', {
        templateUrl: '/volunteer/mission/mission.html',
        controller: 'MissionCtrl'
      });
    }])

.controller('MissionCtrl', ['$scope', '$routeParams', 'MapService', 'VolunteerService', function($scope, $routeParams, MapService, VolunteerService) {
  VolunteerService.getMission($routeParams.id).then(function(mission) {
    console.dir(mission);
    $scope.mission = mission;
  });

  var directionDisplay = null;
  var init = function() {
            var geoMarker = new GeolocationMarker();
            geoMarker.setCircleOptions({fillColor: '#808080'});

            var centerPos = { lat: 12.7699298, lng: -122.4469157};
            var map = MapService.initMap('map', centerPos);
      var directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);
      console.log("map init");
            google.maps.event.addListener(geoMarker, 'position_changed', function () {
                var position = geoMarker.getPosition();
                console.dir(position);
                //map.setCenter(position);
                //map.fitBounds(this.getBounds());

                var destination={};
                $scope.mission.location[0];//destination.latitude= 43.5856618;
                $scope.mission.location[1];// destination.longitude= 1.444253;
                var origin = {'latitude': position.lat(), 'longitude': position.lng()};
                    MapService.traceRoute(directionsDisplay, origin, destination);
            });
            geoMarker.setMap(map);

//      console.log('position geomarker');
//      console.dir(geoMarker.getPosition());
        };
  init();
}]);