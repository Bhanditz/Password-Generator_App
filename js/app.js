var app=angular.module('PwdGenApp',['ngRoute','generateApp']);
app.config(function($routeProvider) {
	 $routeProvider
	 .when('/', {
        templateUrl: 'generate.html',
        controller: 'generateCtrl'
    })
	 .when('/custPwd', {
        templateUrl: 'custPwd.html',
        //controller: 'generateCtrl'
    })
	.otherwise({
       templateUrl: 'generate.html',
        controller: 'generateCtrl'
    });
})