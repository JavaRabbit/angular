var nameSpace = angular.module("GuitarApp", []);
 
nameSpace.controller("GuitarFunction", function GuitarFunction($scope)
{    
	$scope.guitarVariable = [
{
	"name" 	 : "Miss Piggy",
	"description": "Miss Piggy is employed as a star actress under Muppets Inc.",
	"image"	 :  "misspiggy"
},
{
	"name" 	: "KErmit de Frog",
	"description": "Kermit works in the swamp for Muppets Inc.",
	"image"	:  "kermit"
},
{
	"name" 	: "Big Bird",
	"description": "Big Bird works for Muppets Enterprises in Accounts Payable",
	"image"	:  "bigbird"
}
    ]
}
);