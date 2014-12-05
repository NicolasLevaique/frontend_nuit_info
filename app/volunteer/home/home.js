'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/app/volunteer/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'VolunteerService', 'MapService', function($scope, VolunteerService, MapService) {
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
                map.fitBounds(this.getBounds());

            });
            console.log("map init");
            geoMarker.setMap(map);

//      console.log('position geomarker');
//      console.dir(geoMarker.getPosition());
        };

     VolunteerService.getMissions().then(function(missions) {
    $scope.missions = missions.paths;
    console.dir(missions);
    init();
  });
        init();


}]);