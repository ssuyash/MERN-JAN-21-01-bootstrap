var arr = [9, 3, 6, 15, 3, 7, 1, 8, 4]
var key = 3
var chunkSize = 3
var chunks = []

var startInd = 0
var endInd = chunkSize-1

while(endInd <= arr.length-1){
    chunks.push(arr.slice(startInd, endInd+1))
    startInd = endInd+1
    endInd = endInd+chunkSize
}

var keyPresentInAllChunks = true
chunks.forEach((el)=>{
    if(el.indexOf(key) == -1){
        keyPresentInAllChunks = false
    }
})
console.log(keyPresentInAllChunks)