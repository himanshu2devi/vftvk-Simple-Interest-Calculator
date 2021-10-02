 function validation()
{
  if ( document.getElementById("principal").value <=0)
   {
    alert("Please enter positive number");
     document.getElementById(principal).focus();
   }

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{var principal = document.getElementById("principal").value;
 var rate = document.getElementById("rate").value;
 var years = document.getElementById("years").value;
 var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
 amount=interest+principal;
  
document.getElementById("result").innerText="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
    
}
