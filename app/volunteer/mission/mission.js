'use strict';

angular.module('myApp.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/missions/:id', {
        templateUrl: '/volunteer/mission/mission.html',
        controller: 'MissionCtrl'
      });
    }])

.controller('MissionCtrl', ['$scope', '$routeParams', 'VolunteerService', function($scope, $routeParams, VolunteerService) {
  VolunteerService.getMission($routeParams.id).then(function(mission) {
    console.dir(mission);
    $scope.mission = mission;
  });
}]);