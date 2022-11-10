// Array foreach method


const Fruits=["Apple","Orange","Pineapple","Grapes","Banana"];

    Fruits.forEach(function(fruit,index,array){
		
		console.log(fruit);
		console.log(index);
		console.log(array);
	});
	
	
	
// Array Map Method	


let Colors=["Red","Green","Blue","Yellow","Pink","Black"];
	 
	 let newarr=Colors.map(function(color){
		 
		 return color.toUpperCase();
		 
	 });
	      	 console.log(newarr);