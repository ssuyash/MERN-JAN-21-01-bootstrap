var n = 10

for(var i=1; i<=10; i++){
    var tblStr = ""
    for(var j = 1; j<=n; j++){
        tblStr += j+"x"+i+" = "+i*j+" "
    }
    console.log(tblStr)
}