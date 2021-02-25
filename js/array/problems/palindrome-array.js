var arr = [ 10, 3, 1, 10,  3, 10]

var isPalindrome = true


if(arr.length % 2 == 0){
    //even terms
    console.log("for even length")
    var centerInd1 = arr.length/2 //plus
    var centerInd2 = centerInd1-1 //minus
    var count = 0
    while(centerInd1+count < arr.length){
        if(arr[centerInd1+count] != arr[centerInd2-count]){
            isPalindrome = false
            break
        }
        count++
    }
}else{
    //odd terms
    console.log("for odd length")

    var centerInd = (arr.length-1)/2
    var count = 1
    while(count+centerInd < arr.length){
        var el1 = arr[centerInd+count]
        var el2 = arr[centerInd-count]
        if(el1 != el2){
            isPalindrome = false
            break;
        }
    }
    count++
}

console.log("palindrome : ", isPalindrome)

// var revArr = []

// for(var i= arr.length-1; i >= 0; i--){
//     revArr.push(arr[i])
// }



// function isSimilar(arr1, arr2){
//    if(arr1.length != arr2.length){
//        return false
//    }

//   for(var i=0; i<arr1.length; i++){
//       if(arr1[i] != arr2[i]){
//           return false
//       }
//   }

//   return true
// }

// console.log("palindrome : ", isSimilar(arr, revArr))