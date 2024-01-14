const string = "This is my string."

function removeSpaces(string) {
  return string.split(" ").join("")
}

console.log(removeSpaces(string))