/**
 * Created by Thomas on 04/12/2014.
 */
'use strict';

angular.module('myApp.organisation', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/organisation', {
            templateUrl: 'organisation/organisation.html',
            controller: 'organisation1Ctrl'
        });
    }])

    .controller('organisationCtrl', [function() {

    }]);