const perfectNumbers = (number) => {
  for (let i = 0 ; i < number ; i++) {
  	let divisor = 0;
    for (let j = 1 ; j < i ; j++) {
    	if (i % j == 0) {
    		divisor += j;
   	 }
    }
    if (i != 0 && divisor == i) {
    	console.log(i + " mükemmel sayıdır.");
    }
  }
}

let thousand = 1000;

perfectNumbers(thousand)
