var module = angular.module('fiapIOT', []);
module.controller('MainCtrl', function($scope, $http){

    $scope.ligar = function(){
        $http.get('http://localhost:3000/on').
            success(function(data) {
                $scope.status = data;
                $scope.erro = '';
            })
            .error(function(error) {
                $scope.status = error;
                $scope.erro = 'error';
            })
    };

    $scope.desligar = function(){
        $http.get('http://localhost:3000/off').
            success(function(data) {
                $scope.status = data;
                $scope.erro = '';
            })
            .error(function(error) {
                $scope.status = error;
                $scope.erro = 'error';
            })
    };


    $scope.temperatura = function(){
        $http.get('http://localhost:3000/tmp').
            success(function(data) {
                $scope.status = data;
                $scope.erro = '';
                alert(data);
            })
            .error(function(error) {
                $scope.status = error;
                $scope.erro = 'error';
                console.log(error);
            })
    };
});