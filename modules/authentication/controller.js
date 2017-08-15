'use strict';

angular.module('authentication')
.controller('loginController',
            ['$scope','$rootScope','$location','authenticationService',
            function($scope,$rootScope,$location,authenticationService){
                $scope.login = function(){
                    console.log($scope.username);
                    console.log($scope.password);
                authenticationService.loginService($scope.username,$scope.password,function(response){
                    if(response.flag){
                        $location.path('/');
                    }
                    else{
                    $scope.error = "Username and Password is incorrect";
                    }
                });
                };
            
            }]);