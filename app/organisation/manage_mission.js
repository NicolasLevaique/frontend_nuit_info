angular.module('myApp.manage_mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/organisation/manage_mission/{id}, {
            templateUrl: 'organisation/manage_mission.html',
            controller: 'manage_missionCtrl'
        });
    }])

    .controller('manage_missionCtrl', function($scope, $routeParams, ManageMissionService) {
        
        loadMission($routeParams.id);
        
        $scope.volunteerArrived = function(idVol){
            console.log("Volunteer Arrived :" + idVol);
            var missionJSON = angular.toJson($scope.mission);
            ManageMissionService.passengerArrived(missionJSON, idVol).then(function (status) {
                console.log("Volunteer arrived notification made");
                $scope.mission.volunteers.present = true;
            });
        }

        $scope.loadMission = function(idMiss){
            console.log("Load mission :" + idMiss);
            VolunteerService.getMission(idMiss).then(function (mission) {
                console.log("Mission loaded, getting volunteers...");
                ManageMissionService.getVolunteers(idMiss).then(function (volunteers) {
                	console.log("Volunteers loaded");
                	$scope.mission.volunteers = volunteers;
           		});
            });
        }

        console.log("end OK");

    });