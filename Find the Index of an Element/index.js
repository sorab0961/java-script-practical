let arry = ['1','2','3','4','5'];

// document.getElementById('arryy').innerHTML = JSON.stringify(arry)
console.log(arry)

function checker(){
   
    let num = document.getElementById('num').value
    let print = arry.indexOf(num)
    document.getElementById('show').innerHTML = print
    console.log(print)
}



