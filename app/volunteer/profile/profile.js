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

angular.module('myApp.profile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/profile', {
        templateUrl: '/volunteer/profile/profile.html',
        controller: 'View3Ctrl'
      });
    }])

.controller('View3Ctrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.user = {"id": "1", "lastName": "Walsh", "firstName": "Paul", "experience": "300"};
  var loremipsum = "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.";


var getNextMissions = function() {

  //$scope.user.missions =
  // [
  //      {"id": 1, "title": "Mission restos du coeur", "description": loremipsum, "nbVolunteers": 5, "maxVolunteers": 10, "date": "12/06/2014 12:00"},
  //      {"id": 2, "title": "Mission restos du coeur", "description": loremipsum, "nbVolunteers": 5, "maxVolunteers": 10, "date": "12/04/2014 12:00"}
  // ];
  $scope.nextMissions = new Array();

  for (var i = 0; i < $scope.user.missions.length; i++) {

    var missionDate = new Date($scope.user.missions[i].date);
    var presentDate = new Date();

    if (missionDate > presentDate) {
      $scope.nextMissions.push($scope.user.missions[i]);
    }
  }
};

getNextMissions();

}]);