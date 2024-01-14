const array = [-1,5.2,2,9,10,22,6,23]

function sortArray(array) {
  return array.sort((a,b) => {
    return b - a
  })
}

console.log(sortArray(array))