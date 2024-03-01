let arry1 = [12,5141,5454,547,41,25516,4]
let arry2 = [12,5146,5454,546,41,25516,4]

function oddione(){
    let arry3 = []
    for(let i=0;i<=arry1.length;i++){
        for(let j=0;j<=arry2.length;j++){
            if(arry1[i]==arry2[j]){
             arry3.push(arry1[i])
            }
        }
    }
    return arry3;
}
console.log(oddione(arry1,arry2));
