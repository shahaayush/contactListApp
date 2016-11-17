var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	    console.log("Hello World from controller");

	    person1={
	    	name: 'Tim',
	    	email: 'fdf',
	    	number: '900095'
	    };
	    person2={
	    	name: 'Aayush SHah',
	    	email: 'fdfg',
	    	number: '9000953'
	    };
	    var contactList = [person1,person2];
	    $scope.contactList= contactList;
	    }]);