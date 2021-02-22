var n = 50


var even = [0]
var odd = [0]

var mixed = []


i = 1;

while(i < n-1){
    if(i%2 == 0){
        even.push(i)
    }

    if(i%2 != 0){
        odd.push(i)
    }

    i++
}

for(var i=0; i<even.length; i++){
    mixed.push(even[i])
    mixed.push(odd[i])
}

console.log(mixed)