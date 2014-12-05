'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/volunteer/home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$scope', 'VolunteerService', function($scope, VolunteerService) {
    VolunteerService.getMissions().then(function(missions) {
      $scope.missions = missions.paths;
      console.dir(missions);
    });

    var init = function() {
      var geoMarker = new GeolocationMarker();
      geoMarker.setCircleOptions({fillColor: '#808080'});


      var centerPos = { lat: 12.7699298, lng: -122.4469157};
      var map = MapService.initMap('map', centerPos);
      var directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);

      google.maps.event.addListenerOnce(geoMarker, 'position_changed', function () {
        var position = geoMarker.getPosition();
        console.dir(position);
        map.setCenter(position);

        VolunteerService.getMissionsByLocation(position).then(function(missions) {
          $scope.missions = missions.paths;
          console.dir(missions);
          var infowindow = new google.maps.InfoWindow();

          var marker, i;

          for (i = 0; i < missions.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(missions[i][0], missions[i][1]),
              map: map
            });
          }
          map.fitBounds(this.getBounds());
        });
      });
      console.log("map init");
      geoMarker.setMap(map);

//      console.log('position geomarker');
//      console.dir(geoMarker.getPosition());
    };
    init();




  });
}]);