
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newarr = [];
  if (matrix == undefined || matrix == "") {
    return [];
  }
 
  for(let i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) {
      matrix[i].reverse();
    } 
  }
 
 for (let item of matrix) {
   newarr += (","+item);
  }
 
 return newarr.split(",").map(Number).slice(1);
 }