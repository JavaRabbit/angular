var nameSpace = angular.module("GuitarApp", []);
 
nameSpace.controller("GuitarFunction", function GuitarFunction($scope, $http)
{    
	$http.get('js/data.json').success(function(data){
		$scope.guitarVariable = data;
	}) ;
}
);