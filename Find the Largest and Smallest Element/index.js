// method 1

// let array1 = []
// function click(){
//     let array2 = document.getElementById('input').value
//     array1.push(array2)
//     console.log(array1)
//     console.log("this is new array")
// }

//method 2

// let myArr = ['12','25','15','29','18','5']

// console.log("this is the smallest in array",myArr.sort()[0])
// console.log("this is the smallest in array",myArr.sort()[myArr.length-1])

//method 3

// let train = [1,5,9,7,65,8,1,3,85,77]

// var min = train[0]
// var max = 0

// for(let i=0;i<=train.length;i++){
//     if( min > train[i])
//     { 
//         min=train[i];
//     }

//     if( max < train[i])
//     { 
//         max=train[i];
//     }
//     min;
//     max;
// }
// console.log("smallest value is "+min);
// console.log("largest value is "+max);

// method 4

const arry1 = []
function checking(){
let arry2 = document.getElementById('num').value
arry1.push(arry2)
let newarry = arry1.sort()


 
}
function printer(){
    let sorted = arry1.sort(function(a,b){
        return a-b;
    })
    let smallest = sorted[0],
largest = sorted[sorted.length-1];
console.log(smallest);
console.log(largest);
}


