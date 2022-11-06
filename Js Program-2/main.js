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
prompt(reverseNum(123456));