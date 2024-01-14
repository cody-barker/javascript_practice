
const array = ["hello", "cruel", "world"]

function reverseArray(array) {
  let reversedArray = [];
  array.forEach(element => {
    reversedArray.unshift(element)
  });
  // for (const element of array) {
  //   reversedArray.unshift(element)
  // }
  return reversedArray
}

console.log(reverseArray(array))