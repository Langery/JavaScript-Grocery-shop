angular.module('myApp')
.controller('pageTwoCtrl', function ($scope, $state, $stateParams) {

    $scope.aa = $stateParams.aa.name;
    $scope.cc = $stateParams.aa.number;
});