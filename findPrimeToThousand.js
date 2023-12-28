const findPrime = (number) => {
	let primeNumbersArray = [];
  
  for (let i = 0 ; i < number; i++){ 
  	let count = 0;
    if (i <= 1) {
    	count++;
    }
    for (let j = 2 ; j < i ; j++) {
    	if (i % j == 0) {
      	count++;
      }
    }
  	
    if (count == 0) {
    	primeNumbersArray.push(i);
    }
  }
  console.log("Asal sayılar: " + primeNumbersArray);
}

let thousand = 1000;

findPrime(thousand);
