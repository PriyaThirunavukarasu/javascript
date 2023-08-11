/*let name ="Priya";
alert("HELLO " + name);
console.log("welcome!")
let amount = 1000;
console.log("Your bill amount is Rs." + amount);*/


let message=document.getElementById("message")
message.innerHTML="WELCOME TO OUR WEBSITE"; 
function convert(){
  const cmval = Number(document.getElementById("input").value)
  const inchval = cmval/2.54
  const result = document.getElementById("result")
  result.innerHTML=inchval.toFixed(2)+" inches"}