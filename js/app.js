var testApp = angular.module("testApp",['ngRoute']);

testApp.controller("testAppController",['$scope', '$http', '$anchorScroll', '$location', function($scope, $http, $anchorScroll, $location){
$scope.a = "1";

}]);

testApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'partials/home.html',
        controller: 'testAppController'
    }).when('/about',{
        templateUrl:'partials/about.html'
    })
    .when('/contact',{
        templateUrl:'partials/contact.html'
    })
    .when('/products',{
        templateUrl:'partials/products.html'
    });
}]);
