const string = "Alphabet apples oranges"

function numberOfVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"] 
//   const stringCharArr = string.toLowerCase().split("")
//   const stringVowels = stringCharArr.filter((char) => {
//     return vowels.includes(char)
//   })
//  return stringVowels.length
  const stringVowels = string.toLowerCase().split("").filter((char) => vowels.includes(char))
  return stringVowels.length
} 

console.log(numberOfVowels(string))