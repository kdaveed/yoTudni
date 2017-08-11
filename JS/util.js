

class util {
	
	
	 /*
	  * This function iterates through a list of objects
	  * i.e condition
	  * { inverse : true, key : "index", value : "1" }
	  * 
	  */
	static setValues(array, key, value, condition){
		
		$.each(array, function(index, object){
			if(util.checkCondition(object, condition)) object[key] = value
		})
	}
	
	static checkCondition(object, condition){
		
		var value = object[condition.key] == condition.value
		return condition.inverse ? !value : value
	}
}



var condition1 = { index : 1, shown : true }


var condition2 = { inverse : true, key : "index", value : 1 }

var array = [
	{
		index : 1,
		shown : true
	},{
		index : 2,
		shown : true
	}
]
/*
util.setValues(array, "shown", false, condition2)
console.log("Test array output")
console.log(array)
*/

