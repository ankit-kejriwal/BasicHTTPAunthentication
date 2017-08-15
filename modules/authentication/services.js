'use strict';
angular.module('authentication')

.factory('authenticationService',
        ['$timeout','$rootScope',
         function($timeout,$rootScope){
        var service = {};
             
             service.loginService= function(username,password,callback){
                 var response ={};
                $timeout(function(){
                    if(username === 'test' && password ==='test')
                        response.flag = true;
                    else
                        response.flag = false;
                    callback(response);
                },1000)
             }
             return service;
         
    }]);