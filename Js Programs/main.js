//Program To Check Number Is Positive Or Negative

   let x = prompt("enter a number");
		
   if(x>=1){
           document.write("number is positive");
           }
           
		   else if(x==0){
                document.write("number is zero");
           }
		   else{
                document.write("number is negative");
           }
		   {
	        document.write("<br>");
			document.write("<br>");
	       }
		   
//Program To Check Number Is Greater Than 10

   if(x>10){
	        document.write("number is greater than 10");
   }
   else{
	    document.write("number is less than 10");
   }
   {
	document.write("<br>");
	document.write("<br>");
   }
   
   
//number is even or odd

  if(x%2==0){
	        document.write("number is Even");
   }
   else{
	    document.write("number is Odd");
   }
    {
	document.write("<br>");
	document.write("<br>");
   }
   
//Program to check whether number is divisible by 5

     if(x%5==0){
	        document.write("number is divisible by 5");
   }
   else{
	    document.write("number is not divisible by 5");
   }
    {
	document.write("<br>");
	document.write("<br>");
   }

//to check whether number is multiple of 7

  
   if(x%7==0){
	        document.write("number is multiplication of 7");
   }
   else{
	    document.write("number is not multiplication of 7");
   }
    {
	document.write("<br>");
	document.write("<br>");
   }
   
//program to find marriage eligiblity

   let y= prompt ("Enter Male Age")
   let z= prompt ("Enter Female Age")

// marriage eligiblity for male

   if(y>=18){
	        document.write("Eligible For Marriage - Male");
   }
   else{
	    document.write("Not Eligible For Marriage - Male");
   }
   {
	document.write("<br>");
	document.write("<br>");
   }
   
// marriage eligiblity for female 
   
   if(z>=21){
	        document.write("Eligible For Marriage - Female");
   }
   else{
	    document.write("Not Eligible For Marriage - Female");
   }
    {
	document.write("<br>");
	document.write("<br>");
   }

   
//print grade based on marks of a student

   if(x<60){
	        document.write("Grade E");
   }
   else if(x<70){
	    document.write("Grade D");
   }
    else if(x<80){
	    document.write("Grade C");
   }
    else if(x<90){
	    document.write("Grade B");
   }
    else if(x<=100){
	    document.write("Grade A");
   }
    {
	document.write("<br>");
	document.write("<br>");
   }
   

//pattern triangle Shape

for(i=65;i<=73;i++){
	for(k=72;k>=i;k--){
		document.write("&nbsp");
		
	}
     for(j=65;j<=i;j++){
		 if(i%2==0){
			 continue;
		 }
		 document.write(j);
	 }
		 document.write("<br>");
		 
	 }
		