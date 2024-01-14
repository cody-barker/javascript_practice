const array = [-1, 2, -3, 5, 6, -10]

function removeNegatives(array) {
  const positiveArray = array.filter((number) => {
    return number >= 0
  })

  return positiveArray
}

console.log(removeNegatives(array))