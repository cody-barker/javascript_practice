const array = [10, 2]

function sumOfArray(array) {
  const sum = array.reduce((acc, cv) => {
    return acc + cv
  })
  return sum
}

console.log(sumOfArray(array))