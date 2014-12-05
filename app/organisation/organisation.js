/**
 * Created by Thomas on 04/12/2014.
 */
'use strict';

angular.module('myApp.organisation', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/organisation', {
            templateUrl: 'organisation/organisation.html',
            controller: 'organisationCtrl'
        });
    }])

    .controller('organisationCtrl', function($scope, PostMissionService) {

        $scope.mission ={}
        var retrieveLocation = function(){
            var place = $scope.searchBox.getPlace();
            $scope.mission.location = [place.geometry.location.lng(),
                                 place.geometry.location.lat()];
            console.log($scope.mission);
        }

        $scope.test= "toto";
        console.log($scope.test);

        $scope.searchBox = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */(document.getElementById('autocomplete'))
        );
        //Listener calling a function when the user select one adress
        google.maps.event.addListener($scope.searchBox, 'place_changed', function() {
            retrieveLocation();
        });


        //Post the path to the backend
        $scope.publishMission = function () {
            var missionJSON = angular.toJson($scope.mission);
            console.log(missionJSON);
            PostMissionService.postMission(missionJSON).then(function (status) {
                console.log("Path posted successfully");
                //TODO : create new page
            });
         };
        console.log("end OK");

    });