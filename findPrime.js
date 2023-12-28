const findPrime = (...numbers) => {
	let primeNumbersArray = [];
  
  for (let i = 0 ; i < numbers.length ; i++){ 
  	let count = 0;
    if (numbers[i] <= 1) {
    	count++;
    }
    for (let j = 2 ; j < numbers[i] ; j++) {
    	if (numbers[i] % j == 0) {
      	count++;
      }
    }
  	
    if (count == 0) {
    	primeNumbersArray.push(numbers[i]);
    }
  }
  console.log("Asal sayılar: " + primeNumbersArray);
}

findPrime(1, 2, -2, -3, -4, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
