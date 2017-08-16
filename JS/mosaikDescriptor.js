
var Mosaik = {

	config : {
		rows : 2,
		cols : 2,
		dist : 30,
		width : 200,
		height : 100,
	}
}

var calculateCoords = function(array, config){
	
	if((config.rows*config.cols) != array.length ){
		console.error("Mosaic configuration and input array are not compatible")
	}
	var cols = config.cols
	var rows = config.rows
	for(var i = 0; i < (rows*cols); i++){
		var x = (i + cols) % cols
		var y = Math.floor(i / cols )
		array[i].coords = {
			left : config.dist + x * (config.width + config.dist),
			top :  config.dist + y * (config.height + config.dist)
		}
	}
	return array
}

calculateCoords(subjectList, Mosaik.config)
console.log(subjectList)
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
		object[i].top
		/* This is currently not needed ...
		object[i].top = y   
		object[i].right = cols - x
		object[i].bottom = rows - y
		object[i].left = x  */
	}
	console.log(object)		
}

var getX = function(cols, i){
	return (i + cols) % cols
}

//preCalculation(Mosaik.config)
