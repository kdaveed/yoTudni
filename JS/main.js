$(document).on('click', 'a', function(event){
    event.preventDefault();
    
    if($.attr(this, 'href').indexOf("//") == -1 ){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    } else {
      window.location.href = $.attr(this, 'href')
    }
});

var smallMode = function(){
  $(".menuText").hide()
  $(".yoImg").show()
}

var largeMode = function(){
  $(".menuText").show()
  $(".yoImg").hide()
}

var setMode = function(){
    
  if($(document).width() < 990){
    smallMode()
  } else {
    largeMode()
  }
}

$(window).on('resize', setMode)


$(document).ready(function(){
  setMode()
  $('[data-toggle="popover1"]').popover();   
  $('[data-toggle="popover2"]').popover();   
})

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

		$scope.imgNum = []
		for(var i = 1; i <= 10; i++){
      $scope.imgNum.push(i)
    }

		$scope.color = "#FC5E5E"
		$scope.secSelector = false;
		$scope.current = "matek"
		
		//$scope.subjects = subjectData
		$scope.menu = menu
    $scope.teachers = teachers

		console.log($scope.menu)
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
			this.currentSubject = subject
			this.currentSubject.shown = true
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
			$("#" + this.subject.index).modal()
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
	
	app.component("biologyDescription", {
		bindings : {
			subjectName : "<",
		},
		templateUrl : "biologyDescription.html"
	})

	app.component("generalDescription", {
		bindings : {
			subjectName : "<",
		},
		templateUrl : "generalDescription.html"
	})

	app.filter('scrurl', function($sce) {
    return function(text) {
        text = text.replace("watch?v=", "embed/");
        return $sce.trustAsResourceUrl(text);
    	}
	});
	
	app.component("destination", {
	  bindings : {
	    name : "<"
	  },
	  templateUrl : "destination.html"
	})
	
	var NavController = function(){
	  
	}
	
	app.component("nav", {
    bindings : {
      name : "<",
    },
    controller : NavController,
    templateUrl : "destination.html"
  })
	

