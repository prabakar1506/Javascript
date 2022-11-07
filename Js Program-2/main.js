// Print reverse of a number

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)



function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}
document.write("The Reversed Number Is ");
document.write(reverseNum(123456));
document.write("<br><br>");





//Calculate sum of a number

const num1 = parseInt(prompt('Enter the first number'));
const num2 = parseInt(prompt('Enter the second number'));

const num=num1+num2;

document.write("sum of a number  ");
document.write(num);
document.write("<br><br>");


//print table of number

const num3 = parseInt(prompt('Enter the first number'));
const num4 = parseInt(prompt('Enter the second number'));

const table=num3*num4;

document.write("table of number ");
document.write(table);
document.write("<br><br>");