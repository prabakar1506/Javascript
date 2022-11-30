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
	  // console.log(object)
   
  
  
// Array 

// let length=parseInt(prompt("Enter The Main Array"))
// let array=[]

// let Persons

   // for(i=0;i<length;i++){
	   // persons={name:"",id:"",qualification:""}
	   
       // array[i]=persons
   // }
     // console.log(array)
	 
// function pel(z){
            // let b=[];
            // for(i=0;i<z;i++){
                // d=prompt("enter inner length");
                // if(d==0){
                    // d=parseInt(prompt("enter the number"))
                // }
                // else{
                    // c=[];
                    // for(j=0;j<d;j++){
                        // var e=prompt("enter the value");
                        // c[j]=e;
                    // }
                // }
				// b[i]=c;
            // }
            // return b;
        // }

        // function go(no1,no2){
            // if (x<g.length){
                // var vv=(g[no1][no2]);
            // }
            // else{
                // console.log("not this value")
            // }
            // return vv;
        // }

        // let a=prompt("enter the main index");
        // let g=pel(a);

        // console.log(g);

        // let x=prompt("enter the big index");
        // let y=prompt("enter the index");
        // let s= go(x,y);
       
        // console.log(s);
		
		
// Array of Array		
		
// function doit(a,z){
				// if(z==0){
					// b=parseInt(prompt("enter a value"));
					// a[i]=b;
					// }
				// else{
					// b=[];
					// for(j=0;j<z;j++){
							// b[j]=parseInt(prompt("enter  values"));
						// }
					// a[i]=b;
				// }
				// }


				// function read(a,main){	
				// if(a.length-1< main){
					// alert("enter vaild index");
				
				// }
				// else{
					// if(a[main]!=[]){
						// console.log(a[main]);
					// }
					// else{
					// var sub=parseInt(prompt("enter element index"));
				    // console.log(a[main][sub]);
					// }
				  
				// }
		    // }


		// var a=[];
		// let x=parseInt(prompt("enter  main array length"));
			// var b ;
			// for(i=0;i<x;i++){
			// let y =parseInt(prompt("enter  sub array length"));
			// doit(a,y);
		    // } 
			// console.log(a);	
		 // var main=parseInt(prompt("enter array index"));
		 // read(a,main);	


let mymodel= prompt("enter select your object");
            let array={};
            let k;

            let  student=new Object(array);
            function value(mymodel){
            for(i=0;i<mymodel;i++){
            k={
                name:"",
                id:"",
                number:"",
            }
             var p1=prompt("enter your Name");
             k.name=p1;
             var p2=prompt("enter your id");
             k.id=p2;
             var p3=prompt("enter your number");
             k.number=p3;

             array[i]=k;
            }
            return(array);
        }
            console.log(value(mymodel));		 