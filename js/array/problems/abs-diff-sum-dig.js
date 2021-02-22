var mat = [
    [5, 6, 9],
    [3, 4, 1],
    [2, 10, 14]
]

var dig1Sum = 0
var dig2Sum = 0

for(var row = 0; row < mat.length; row++){
    var cols = mat[row]
    for(var col = 0; col<cols.length; col++){
        if(row == col){
            dig1Sum += mat[row][col]
        }

        if(row+col == mat.length-1){
            dig2Sum += mat[row][col]
        }
    }
}

var res = Math.abs(dig2Sum-dig1Sum)
console.log(dig1Sum, dig2Sum, res)