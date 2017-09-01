

var app = angular.module("yoTudni", [])

app.controller("ctrl", function($scope){

	
	
	$scope.initSubject = function(subjectName){
		
		$scope.hideIcons(subjectName)
		$scope.showContent(subjectName)
		
	}
	
	$scope.hideIcons = function(subjectName){
		
		//Fade out all the subjects
		
		
	}
	
	
})



