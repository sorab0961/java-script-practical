let arr1 = [12,545,21,4542,245,41515,4515,1545,5]
let arr2 = [654,654,655,51,51,351,651,4,3,3,54,16]
let arr3 = [...arr1,...arr2]

let c= arr3.sort(function(a,b){
    return a-b;
})
let b=new Set(c)

console.log(b)