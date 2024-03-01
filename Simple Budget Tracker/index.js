function addtrasection() {
  let balance = document.getElementById("balance").value;
  let income = document.getElementById("money-plus").value;
  let expense = document.getElementById("money-minus").value;
  let text = document.getElementById("description").value;
  let amount = document.getElementById("amount").value;

  let transections = JSON.parse(sessionStorage.getItem("items"));
  if (transections == null) {
    transections = [];
  }
  let type = "";
  if (amount >= 0) {
    type = "i";
  } else {
    type = "e";
  }
  transections.push({ transection: text, amount: amount, type: type });
  sessionStorage.setItem("items", JSON.stringify(transections));
  console.log(JSON.parse(sessionStorage.getItem("items")));

  let sum = 0;
  transections.forEach((x) => {
    sum += parseInt(x.amount);
  });

  document.getElementById("balance").innerHTML = sum;

  let histo = document.createElement("li");
  if(type==="i"){
    histo.classList.add("styledElement");
  }else if(type==="e"){
    histo.classList.add("styledElement1");
  }

  let dta = document.createTextNode(text + " " + amount);
  
  histo.appendChild(dta);
  document.getElementById("mylist").appendChild(histo);
  let money_plus = 0;
  let money_minus = 0;
  transections.forEach((x) => {
    if (x.type === "i") {
      money_plus += parseInt(x.amount);
    } else {
      money_minus += parseInt(x.amount);
    }
  });
  document.getElementById("money-plus").innerHTML = money_plus;
  document.getElementById("money-minus").innerHTML = money_minus;

 
}
