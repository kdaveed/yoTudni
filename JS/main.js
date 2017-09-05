$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$(window).on('resize', setPageWidth)

var setPageWidth = function(){
  
  var totalWidth = 0;
  $('.cont').each(function(index) {
    totalWidth += parseInt($(this).width(), 10);
   });
  //console.log("Total : " + totalWidth)
  $(".page").width(totalWidth)
}

$(document).ready(function(){
  setPageWidth()
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
	
  var MenuController = function($scope, $element, $attrs){
	  
	  $element.addClass('cont')
	  console.log('Data : ')
	  console.log(this)
	  console.log(this['data'])
	}
	
  app.component("menuItem", {
    controller : MenuController,
    bindings : { 
      data : "<",
      sg : "<"
    },
   	templateUrl : "menu.html",
    //controllerAs : "this"
  })
