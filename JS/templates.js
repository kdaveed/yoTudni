
app.component("divider", {
	templateUrl : "divider.html"
})

app.component("colorDivider", {
	templateUrl : "colorDivider.html"
})

app.component("imgComp", {
	bindings : {
		name : "<"
	},
	templateUrl : "img.html",
})


var TeacherController = function(){
   
}

app.component("teacherProfile", {
   bindings : {
     teacher : "<",
   },
   templateUrl : "teacherProfile.html",
   controller : TeacherController,
})


app.component("popup", {
   bindings : {
     id : "<",
     content : "<",
     config : "<",
     subject : "<",
   },
   templateUrl : "popup.html"
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


