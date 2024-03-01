function halo(){
    let userdata = [
        {name:"darshan",email:"darshan123@gmail.com" , age:'15'},
        {name:"mihir",email:"mihir123@gmail.com" , age:'16'},
        {name:"jay",email:"jay123@gmail.com" , age:'15'}
    ];
    
    let userinfo = userdata.filter(function (item){
       let inputname = document.getElementById('inputname').value ;
        return item.name == inputname;
    });
    document.getElementById('bhoda'). innerHTML = JSON.stringify(userinfo) ;
};
