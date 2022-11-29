// Array Object

let length=parseInt(prompt("Enter The Array Length"))
let object=[]

let Person

for(i=0;i<length;i++){
	person={name:"",rollNo:"",Department:""}
	person.name=prompt("Enter the Name of The Student")
	person.rollNo=parseInt(prompt("Enter The Rollno Of The Student"))
	person.Department=prompt("Enter The Department Of The Student")
	
	object[i]=person
}
  console.log(object);
  
  
// Array 

// let length=parseInt(prompt("Enter The Main Array"))
// let array=[]

// let Persons

   // for(i=0;i<length;i++){
	   // persons={name:"",id:"",qualification:""}
	   
       // array[i]=persons
   // }
     // console.log(array)