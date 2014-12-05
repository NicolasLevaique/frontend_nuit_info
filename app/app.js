'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.version',
  'myApp.organisation',
  'myApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/organisation', {
          templateUrl: 'organisation/organisation.html',
          controller: 'organisationCtrl'
      })
      .otherwise({redirectTo: '/organisation.html'});
}]);
