let test = [1,5,9,7,6,8,4,6,3,7,4]
let newarry = [... new Set(test)];
newarry.sort()

console.log("with duplicate values==>"+test)
console.log("without duplicat values==>"+newarry)
