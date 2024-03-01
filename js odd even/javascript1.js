function arykamara(){
    let num = document.getElementById('en').value
    if(num%2==0)
    {
        console.log(num)
        console.log("this number is even")
        document.getElementById('foruser').innerHTML = "the number is even"

    }
    else{
        console.log(num)
        console.log("the number is odd")
        document.getElementById('foruser').innerHTML = "the number is odd"
    
    }
    
}
