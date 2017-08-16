var app = angular.module("myApp", [ "ngAnimate" ])
	app.controller("simpleController", function($scope) {

		$scope.subjectState = 1
		$scope.secondState = function() {
			$scope.subjectState = 2
		}
		
		$scope.select = function(index) {
			console.log("selected index : " + index)
		}
		//Initialize 
		
		$scope.showDsc = false;
		$scope.subjectName = "matek";
		
		$scope.color = "#FC5E5E"
		$scope.secSelector = false;
		$scope.current = "matek"
		
		$scope.subjects = subjectData
		$scope.subjectList = calculateCoords(subjectList, Mosaik.config)
		console.log("SubjectList")
		console.log($scope.subjectList)
	});

	var MosaikListController = function($scope, $element, $attrs) {

		this.mosaik = true
		this.mosaik1 = true

		this.currentSubject = {
				name : "matek"
		}
		
		this.hideOnes = function(subject) {

			this.mosaik1 = false
			this.mosaik = false

			this.currentSubject = subject
			console.log("Subject")
			console.log(this.currentSubject)
			util.setValues(this.subjects, "shown", false, {
				inverse : true,
				key : "index",
				value : subject.index
			})
			this.select({subject : subject})
		}

		this.showSubject = function(subject){
			
			this.currentSubject.shown = false
			subject.shown = true;
			this.currentSubject = subject
			console.log("MosaikController")
			console.log(subject)
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

		this.click = function(value) {
			
			this.mosaik = false
			this.content = true
			//Old solution
			//this.subject.coords.left = 30;
			//this.subject.coords.top = 30;
			console.log("Subject")
			this.hideElements({
				subject : this.subject
			})
		}
	}
	
	app.component("mosaik", {
		//restrict : 'E',
		controller : MosaikController,
		bindings : {
			subject : "<",
			mosaik : "<",
			hideElements : "&"
		},
		templateUrl : 'mosaik.html'
	})

	//Selector
	var SelectorController = function(){
		
		this.click = function(){
			console.log("selectController")
			console.log(this.subject)
			this.select({subject : this.subject})
		}
	}

	app.component("selector", {
			
		controller : SelectorController,
		bindings : {
			subject : "<",
			select : "&",
		},
		templateUrl : "selector.html"
	})
	
	app.component("subjectDescription", {
		//controller : SubjectDescriptionController,
		bindings : {
			showContent : "<",
			currentSubject : "<",
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
