// Array Object

// let length=parseInt(prompt("Enter The Array Length"))
// let object=[]

// let Person

// for(i=0;i<length;i++){
	// person={name:"",rollNo:"",Department:""}
	// person.name=prompt("Enter the Name of The Student")
	// person.rollNo=parseInt(prompt("Enter The Rollno Of The Student"))
	// person.Department=prompt("Enter The Department Of The Student")
	
	// object[i]=person
// }
  // console.log(object);
  
  
// Array 

// let length=parseInt(prompt("Enter The Main Array"))
// let array=[]

// let Persons

   // for(i=0;i<length;i++){
	   // persons={name:"",id:"",qualification:""}
	   
       // array[i]=persons
   // }
     // console.log(array)
	 
function pel(z){
            let b=[];
            for(i=0;i<z;i++){
                d=prompt("enter inner length");
                if(d==0){
                    d=parseInt(prompt("enter the number"))
                }
                else{
                    c=[];
                    for(j=0;j<d;j++){
                        var e=prompt("enter the value");
                        c[j]=e;
                    }
                }
				b[i]=c;
            }
            return b;
        }

        function go(no1,no2){
            if (x<g.length){
                var vv=(g[no1][no2]);
            }
            else{
                console.log("not this value")
            }
            return vv;
        }

        let a=prompt("enter the main index");
        let g=pel(a);

        console.log(g);

        let x=prompt("enter the big index");
        let y=prompt("enter the index");
        let s= go(x,y);
       
        console.log(s);