function findLargest(a, b, c) {
  //your code here
	// let arr = [a, b, c];
	// for(i=arr.length-1; i>=0 ; i--){
		
	// }

	let largestNumber = a;

	if(b>largestNumber){
		largestNumber = b
	}else if(c>largestNumber){
		largestNumber = c
	}
	return largestNumber;   
	
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
