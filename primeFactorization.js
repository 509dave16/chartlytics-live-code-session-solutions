/**
 * 1,2,3,5,7,11
 * A prime is a number that can only be divided by itself and 1.
 * I literally does not have any factors
 * a. No evens except 2
 * b. Only odds except for those that have a factor
 * c. some sort of division needs to happen
 * 
 * Start with number above 2. We won't be using 1.
 * 1. 9
 * 9 / 2 = 4.5. Does not cleanly divide. Next number.
 * 9 / 3 = 3. Does work.
 * 3 / 2 = 1.5. Doesn't work. Next factor.
 * 3/ 3 = 1. Does work. 1 is the break condition
 * 
 * 2. 12
 * 12 / 2 = 6. Does work.
 * 6 / 2 = 3. Does work.
 * 3 / 2 = 1.5. Doesn't work.
 * 3 / 3 = 1. Does work.
 * 
 * Compute the collection of prime numbers whose product eqauls the original number passed in
 * Algorithm Summary: In essence we need to reduce the number by factors that are prime.
 * 1. Iterate over numbers till you need to break, which means the reducer is 1. While loop would be preferred.
 * 2. Check if the number is a prime number. Start with hard coded then detect if a number is a prime.
 * 3. Don't iterate over potential prime factors if they are larger than the current reducer
 *  {Number} number
 */

const primeFactorization = (number) => {
  if(number === 0) { return -1; }

  let reducer = number;
  const limit = number;
  const primeFactors = [];
  while (reducer !== 1) {
    for (let primeCandidate = 2; primeCandidate <= number; primeCandidate++) {
      if (!isPrime(primeCandidate)) { continue; }

      if (isCleanDivision(reducer, primeCandidate)) {
        reducer = reducer / primeCandidate;
        if (primeCandidate === 1) { break; }
        primeFactors.push(primeCandidate);
        break;
      }
    }
  }
  return primeFactors;
};

const isCleanDivision = (numerator, divisor) => numerator % divisor === 0;

const isPrime = (primeCandidate) => {
  const limit = primeCandidate - 1;
  for (let number = 2; number <= limit; number += 2) {
    if(isCleanDivision(primeCandidate, number)) {
      return false;
    }
  }
  return true;
};

console.log(primeFactorization(9));
console.log(primeFactorization(12));
console.log(primeFactorization(262));
