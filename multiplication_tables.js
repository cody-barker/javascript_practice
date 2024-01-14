var multTable = [];
for (var v = 0; v < 13; v++) {
  multTable.push([]);
  for (var i = 0; i < 13; i++) {
    multTable[v].push(i * v);
  }
}

console.log(multTable); //25
