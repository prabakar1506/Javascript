// Print N Numbers in Sequence 

     document.write("Print Numbers in order")
	 document.write("<br>");
    for(let i=0;i<=10;i++){
		document.write(i);
		document.write("<br>")
    }
	
// Print N Numbers In Reverse Order	

    document.write("Print Numbers In Reverse Order")
	document.write("<br>");
     for(let j=10;j>=0;j--){
		document.write(j);
		document.write("<br>");
    }
	
// Print Even Numbers

    let n=parseInt(prompt("Enter a number"));
    for(i=1;i<=10;i++){
        if(i%2==0){
            document.write(i);
        }
		document.write("<br>");
    }

// Print Odd Numbers

    let g=parseInt(prompt("Enter a number"));
    for(i=1;i<=g;i++){
        if(i%2!=0){
            document.write(i);
        }
		document.write("<br>");
    }

// Swap two numbers using function

        let a =parseInt(prompt("Enter The First Value"));
        let b =parseInt(prompt("Enter The Second Value"));
        function Swap(a,b){
            c=a-b;
            a=a-c;
            b=b+c;
            document.write(a,b);
        }
        Swap(a,b);