function Palindrome(){
    let x = document.getElementById('input').value
    let y = x.split("").reverse("").join("")
    if(x == y){
        document.getElementById('show').innerHTML = "this element is Palindrome "
    }
    else{
        document.getElementById('show').innerHTML = "this element is not Palindrome "
    }
}