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
}]);