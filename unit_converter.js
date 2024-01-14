function kmToMi(kilometers) {
  return Math.round(kilometers * 0.621371 * 10)/ 10;
}

function miToKm(miles) {
  return Math.round(miles * 1.60934 * 10)/10
}

function cToF(celcius) {
  return Math.floor(((celcius * 9/5) + 32) * 10)/10
}

function fToC(fahrenheit) {
  return Math.floor((fahrenheit - 32) * 5/9 * 10)/10
}

console.log(miToKm(7))