var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function MyController($scope)
{
		$scope.artists = [
	{
		"name":"Miss Piggy",
		"species":"pig",
		"description":"Miss Piggy is employed as a star actress under Muppets Inc."
	},
	{
		"name":"KErmit de Frog",
		"species":"Green non-poisonous frog",
		"description":"Kermit works in the swamp for Muppets Inc."

	},
	{
		"name":"KErmit de Frog",
		"species":"Green non-poisonous frog",
		"description":"Kermit works in the swamp for Muppets Inc."

	}
	]
});