//Print all even numbers from 0 – 10

function printEvenNumbers(min, max) {
  const evenNumbers = [];

  for (let i = min; i < max; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}

console.log(printEvenNumbers(1, 300));
