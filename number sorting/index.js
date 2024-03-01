// let array = [];
// function shortarray(){
//   let  name = document.getElementById('num').value
//     array.push(name)
//     let newarray = array.sort();
//   document.getElementById('show').innerHTML = JSON.stringify(newarray)

// }

let blank =[]
function enter(){
    let ref = document.getElementById('num').value
    blank.push(ref)
    let filled = blank.sort()
    document.getElementById('print').innerHTML = filled
}
