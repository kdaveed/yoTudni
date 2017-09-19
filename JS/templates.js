
app.component("divider", {
	templateUrl : "divider.html"
})

app.component("colorDivider", {
	templateUrl : "colorDivider.html"
})

var ImgComController = function($scope, $element, $attrs){
  
  $element.addClass('cont')
}


app.component("imgComp", {
	bindings : {
		name : "<"
	},
	templateUrl : "img.html",
	controller : ImgComController,
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

var PopupController = function(){
  
  this.changeModal = function(){
    
    console.log("changeModal")
    $('html, body').animate({
      scrollTop: $('#teachers').offset().top
    }, 500, function(){
      $('#tegla').modal('show');
    });
  }
}


app.component("popup", {
   bindings : {
     id : "<",
     content : "<",
     config : "<",
     subject : "<",
   },
   templateUrl : "popup.html",
   controller : PopupController,
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

var GalleryController = function($timeout){
  
  this.prev = function(){
    this.showSlides(this.slideIndex -= 1);
  }
  
  this.next = function(){
  	  this.showSlides(this.slideIndex += 1);
  }

  this.$postLink = function(){
	
	this.slideIndex = 1;
  	$timeout((function(){
		this.showSlides(1)
  	}).bind(this), 100)
  }

  this.currentSlide = function (n) {
    this.showSlides(this.slideIndex = n);
  }
  
  this.showSlides = function(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
  }
}


app.component("gallery", {
  bindings : {
    num : "<",
  },
  templateUrl : "gallery.html",
  controller : GalleryController,
})
