// array using for method


let fruits=["Apple","Orange","Pineapple","Banana"];

    fruits[6]="Mango"
	
	console.log(fruits.length);
	
// Using For Of Method

      for(let fruit of fruits){
		  
		  console.log(fruit);
	  }
	  
//Using For In Method

	for(let fruit in fruits){
		
		console.log(fruit,fruits[fruit]);
	}	
	
//Using forEach Method	

    fruits.forEach(function(fruit,index){
	
	console.log(index,fruit);
	})



// object 

 let employee={
	 
	           name:"Prabakar",
			   id:9527,
			   salary:25000,
			   qualification:"Mechanical",
			   department:"Paintshop",
			   place:"tenkasi",
			   contact:{
				        Phone1:7305249183,
						Phone2:8248585540,
			   },
			   mail:"Ranjithprabakar78@gmail.com"
 }
  console.log(employee.contact.Phone1);
  
  
// Function set of statements

function add(num1,num2){
	
	console.log(num1*num2)
	
	
}
    add(10,10)
	
	
function message(firstName,lastName){
	
	let msg= "hello i'm " + firstName + lastName + " Learning Javascript";
	
	console.log(msg)
}	
  message("ranjith","prabakar")
  
  
  // if else
	  
  let hrs=new Date()
  let hour=hrs.getHours()
  
  if(hour >= 0 && hour <= 13){
	  
	  console.log("good morning");
  }
  else if(hour >= 13 && hour <= 17){
	  
	  console.log("good afternoon");
  }
  else{
	  console.log("good evening");
  }
  
  
  
  // Switch case
  
  
  let savingAmount=3000;
  
  switch(true){
	  
	  case(savingAmount > 60000):
	  console.log("Buy Iphone");
	  break;
	  
	  case(savingAmount >= 10000 ):
	  console.log("Buy Android Phone");
	  break;
	  
	  case(savingAmount >= 5000 && savingAmount < 9000):
	  console.log("Buy Basic Mobile Phone");
	  break;
	  
	  default:
	  console.log("You Cannot Buy Mobile Phone");
  }
  
  
  // for loop to print odd numbers
  
  
  for(let i=0; i<=10 ; i++){
	  if(i%2 !==0){
		  console.log("Print Odd Numbers"+ i);
	  }
  }
  
    for(let i=0; i<10 ; i++){
	
		 console.log(i); 
  }
  
  
//array object
  
   
  
  
 