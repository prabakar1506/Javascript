// Obeject

const event= new Date('November 10, 2022 6:56:50 GMT+00:00');

  console.log(event.toLocaleString('en-US'));
  
  
// Personal Data 

const personone={

             name:'Prabakar',
			 age :25,
			 phone:7305249183,
			 qualification:'Mechanical Engineering',
			 
}
  console.log(personone);
  console.log(personone['name']);
  
  
  
// Array Object 

const fruits=[{name:'orange',price:100},{name:'Apple',price:100},{name:'Mango',price:100}]
	
	// for(let per in fruits){
		// console.log(fruits[per]);
// }
    
	// fruits.forEach(function(fruit){
		
		// for(let per in fruit){
			
			// console.log(per+ " : " +fruit[per]);
		// }
	// })
	
		fruits.forEach(fruit=>{
		
		for(let per in fruit){
			
			console.log(per+ " : " +fruit[per]);
		}
	})
	