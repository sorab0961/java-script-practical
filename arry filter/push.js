let userData = [

    { name: 'Chirag', email: 'chirag@gmail.com', password:"as73h"},

    {name: 'Rahul', email: 'rahul@gmail.com' ,password:"oeiori"},

{name:' Neha', email: 'neharoy@gmail.com' ,password:"nm3zc45"},

{name: 'Riya', email: 'riyakapoor@gmail.com' ,password:"csha@yy"},

];
let matchData = userData.filter(function (e) {

    return e.name == inputName;

});

console.log(matchData);