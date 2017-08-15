'use strict';

angular.module('authentication',[]);
angular.module('home',[]);
angular.module('basicHttpAuthentication',[
    'authentication',
    'home',
    'ngRoute'
])

.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/login',{
            controller:'loginController',
            templateUrl:'modules/authentication/views/login.html' 
    })
    
    .when('/home',{
        controller: 'homeController',
        templateUrl: 'modules/home/views/home.html'
    })
    .otherwise({redirectTo:'/login'});
}])

