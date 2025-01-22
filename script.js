function findLargest(a, b, c) {
  //your code here
	let arr = [a, b, c];
	arr.sort((a,b)=> b - a);   
	return arr[0];
	
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
