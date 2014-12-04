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
        controller: 'View2Ctrl'
      });
    }])

.controller('View2Ctrl', ['$scope', '$stateParams', function($scope, $stateParams) {
  var loremipsum = "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.";

  $scope.mission =
    {"id": stateParams.id, "name": "toto", "description": loremipsum}
}]);