

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
 if ( document.getElementById("principal").value <=0)
   {
    alert("Please enter positive number");
     document.getElementById(principal).focus();
   }
 var principal = document.getElementById("principal").value;
 var rate = document.getElementById("rate").value;
 var years = document.getElementById("years").value;
 var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
   var i = parseInt(interest);
    var c= parseInt(principal)
  var amount=  i + c;
 
  
document.getElementById("result").innerText="If you deposit  "+principal+",at an interest rate of "+rate+"%,You will receive an amount of "+amount+",in the year "+year+"";
    
}
