angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login, {
            templateUrl: 'login.html',
            controller: 'login_ctrl'
        });
    }])

    
    .controller('login_ctrl', function($scope, $routeParams, ManageMissionService) {
        
        $scope.login = function(email, password){
            console.log("Login email :" + email);
            $scope.email = email;
            
            LoginService.login(email, password).then(function (token) {
                console.log("My token is:" + token);
                $scope.token = token;
                $scope.connected = true;
            });
        }

        $scope.logout = function(email, token){
            console.log("Logout email :" + email);
            LoginService.login(email, password).then(function (status) {
                console.log("Disconnected");
                $scope.token = "";
                $scope.connected = false;
            });
        }

        console.log("end OK");

    });