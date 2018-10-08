var app = angular.module('myApp',['ui.router']);
app.controller("myCtrl",function($scope){
	$scope.showye = "首页信息";
});
app.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('page1', { 
		 url: '/page1', 
		 templateUrl: 'page/page1.html', 
		 controller: 'pageOneCtrl' 
	}) 
	.state('page2', { 
		 url: '/page2',
		 templateUrl: 'page/page2.html',
		 params:{'aa':{}},
     controller: 'pageTwoCtrl'
	})
}]);