'use strict';

angular.module('myApp.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/mission/:id', {
        templateUrl: '/volunteer/mission/mission.html',
        controller: 'MissionCtrl'
      });
    }])

.controller('MissionCtrl', ['$scope', '$routeParams', 'VolunteerService', function($scope, $routeParams, VolunteerService) {
  var loremipsum = "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.";

  VolunteerService.getMission($routeParams.id).then(function(mission) {
    $scope.mission = mission;
  });
}]);