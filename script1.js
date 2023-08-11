
      
    let message=document.getElementById("message")
    message.innerHTML="WELCOME TO OUR WEBSITE"; 
    function convert(){
      const celsval = Number(document.getElementById("input").value)
      const fval = celsval* 9/5 +32
      const result = document.getElementById("result")
      result.innerHTML=fval + " &degF"}