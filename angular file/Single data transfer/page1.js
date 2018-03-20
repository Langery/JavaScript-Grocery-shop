angular.module('myApp')
.controller('pageOneCtrl', function ($scope, $state) {
	 $scope.abc = 11;
	 $scope.toPage2 = function () {
	  	$state.go('page2', {
			aa: $scope.abc
		});
	  };
});