function prime(){
    let number = document.getElementById('input').value
    let isprime = true
    for(let i=2;i<number;i++)
    {
        if( number % i ==0)
    {
        isprime=false
        }
    
    }
    if(isprime)
    {
        console.log("this is prime")
        document.getElementById('show').innerHTML = "This is prime"
    }
    else{
        console.log("this is not prime")
        document.getElementById('show').innerHTML = "This is not prime"
    }
}