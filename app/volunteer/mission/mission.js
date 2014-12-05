'use strict';

/*
describe('myApp.mission module', function() {

  beforeEach(module('myApp.mission'));

  describe('mission controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});*/

angular.module('myApp.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/mission/:id', {
        templateUrl: '/volunteer/mission/mission.html',
        controller: 'MissionCtrl'
      });
    }])

.controller('MissionCtrl', ['$scope', '$routeParams', 'VolunteerService', function($scope, $routeParams, VolunteerService) {
  VolunteerService.getMission($routeParams.id).then(function(mission) {
    $scope.mission = mission;
  });
}]);