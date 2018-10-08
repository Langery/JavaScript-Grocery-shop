angular.module('myApp')
.controller('pageOneCtrl', function ($scope, $state) {
	 $scope.abc = 11;
	 $scope.aa = $scope.abc;
	 $scope.def = 'Tom';
	 $scope.toPage2 = function (name,number) {
	  	$state.go('page2', {
			aa:{
				name: $scope.def,
				number: $scope.abc
			}
		});
	 };
});
