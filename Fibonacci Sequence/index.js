function fibo(){
    let number = document.getElementById('last').value
    let x = 0
    let y = 1
    let z
    
    for(let i=0;i<=number;i++)
    {
        
        console.log(z)
        document.getElementById('print').innerHTML = z
        z = x + y;
        x = y;
        y = z;
       
    }
}