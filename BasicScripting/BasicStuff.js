function fizzBuzz (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } 
    else if (i % 3 === 0) {
      console.log('Fizz')
    } 
    else if (i % 5 === 0) {
      console.log('Buzz')
    }
    else {
      console.log(i)
    }
  }
}

function showProperties(obj) {
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          console.log(key + ' : ' + obj[key])
      }
  }
}

const movie = {
  name: 'a',
  year: 2012,
  rating: 3.5,
  director: 'b'
};

// showProperties(movie) 

function countTruthly(arr) {
  let count = 0;

  for (const things of arr) {
    if (things) {
      count++
    }
  }

  return count
}

const arr = [null, 0, '', false, NaN, undefined, 2, 3];

// console.log(countTruthly(arr))

function checkSpeed (speed) {
  if (speed <= 70) {
      console.log('Ok')
  }
  else {
      let points = Math.floor((speed - 70) / 5)
      if (points > 12) {
          console.log('license suspended')
      }
      else {
          console.log('Points:', points)
      }
  }
}


function sumFizzBuzz(limit) {
  let sum = 0;

  for (let i = 3; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }

  return sum
}

// console.log(sumFizzBuzz(10))
// console.log(sumFizzBuzz(20))

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function printPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      process.stdout.write(i + ', ');
    }
  }
}

// printPrime(100);

