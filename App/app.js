/**
 * Created by John on 2017/10/19.
 */
var app = angular.module("app",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/carSever",{
            templateUrl:"./App/Views/carServer.html",
            controller:"serverCotroller"
        })
        .when("/carFinace",{

        })
        .otherwise({
            redirectTo:"/carSever"
        });
});