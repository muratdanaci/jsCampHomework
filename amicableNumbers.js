const amicableNumbers = (a, b) => {
  let aDivisors = 0;
  let bDivisors = 0;
	
  for (let i = 1 ; i < a ; i++) {
  	if (a % i == 0) {
    	aDivisors += i;
    }
  }
  for (let j = 1 ; j < b ; j++) {
  	if (b % j == 0) {
    	bDivisors += j;
    }
  }
  if (a == bDivisors && b == aDivisors) {
  	console.log(a + " ve " + b + " sayıları arkadaş sayılardır.")
  } else {
  	console.log(a + " ve " + b + " sayıları arkadaş sayılar değillerdir.")
  }
}

amicableNumbers(220, 284);
