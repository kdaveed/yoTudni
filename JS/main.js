var app = angular.module("myApp", [ "ngAnimate" ])
	app.controller("simpleController", function($scope) {

		$scope.subjectState = 1
		$scope.secondState = function() {
			$scope.subjectState = 2
		}
		
		$scope.select = function(index) {
			alert(index)
		}
		
		$scope.secSelector = false;
		
		$scope.current = "matek"
		$scope.subjects = subjectData
		$scope.subjectList = calculateCoords(subjectList, Mosaik.config)
		console.log("SubjectList")
		console.log($scope.subjectList)
	});

	var MosaikListController = function($scope, $element, $attrs) {

		this.hideOnes = function(index) {

			util.setValues(this.subjects, "shown", false, {
				inverse : true,
				key : "index",
				value : index
			})
			$scope.secSelector = false;
			console.log(this.subjects)
			this.select({index : index})
		}
	}

	app.component("mosaikList", {

		controller : MosaikListController,
		templateUrl : "mosaikList.html",
		bindings : {
			subjects : "<",
			select : "&",
		}
	})

	function MosaikController($scope, $element, $attrs) {

		//var ctrl = this
		this.hideContent = true
		this.expand = false
		this.click = function(value) {
			this.hideContent = false
			this.expand = true
			this.subject.coords.left = 30;
			this.subject.coords.top = 30;
			this.hideElements({
				index : this.subject.index
			})
		}
	}
	
	app.component("mosaik", {
		//restrict : 'E',
		controller : MosaikController,
		bindings : {
			subject : "<",
			hideElements : "&"
		},
		templateUrl : 'mosaik.html'
	})

	var SecSelectorController = function(){
		
	}
	
	app.component("secondarySelector", {
			
		controller : SecSelectorController,
		bindings : {
			subject : "<",
			
		}
		
	})
	
	app.component("subjectDescription", {
		//controller : SubjectDescriptionController,
		bindings : {
			subjectName : "<",
		},
		templateUrl : "subjectDescription.html"
	})

	app.component("mathDescription", {
		bindings : {
			subjectName : "<",
		},
		templateUrl : "mathDescription.html"
	})

	app.component("generalDescription", {
		bindings : {
			subjectName : "<",
		},
		templateUrl : "generalDescription.html"
	})
