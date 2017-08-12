


var Mosaik = {

	config : {
		rows : 2,
		cols : 3,
		dist : 30,
		width : 150,
		height : 70,
	}
			

}

//Writing the algorithms to generate the


//The task is to calculate for each element 

var preCalculation = function(config){
	
	var cols = config.cols
	var rows = config.rows
	var object = new Object() 
	for(var i = 0; i < (rows*cols); i++){
		var x = (i + cols) % cols
		var y = Math.floor(i / cols )
		console.log("x : " + x + " y : " + y)
		object[i] = new Object()
		object[i].top = y   
		object[i].right = cols - x
		object[i].bottom = rows - y
		object[i].left = x
	}
	console.log(object)	
}

var getX = function(cols, i){
	return (i + cols) % cols
}


preCalculation(Mosaik.config)
