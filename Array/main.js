// Array In Javascript

let student=["Rajan","Dinesh","Karthi","Subash","Kavi","Sathish"];

student.push("Parthi");                // Array End Position

student.unshift("Dinesh Raja");       //  Array First Position

student.splice(2,0,"Manoj");         //   Array Specific Position

console.log(student);


// Multiple Array 

let Product=[["One","Two","Three"],["Pen","Pencil","Eraser"]];

console.log(Product.length);
console.log(Product);

for(i=0;i<Product.length;i++){
	for(j=0;j<Product[i].length;j++){

      document.write(Product[i][j]);
	  document.write("<br>");
	}
}	