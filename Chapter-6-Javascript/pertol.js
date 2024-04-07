window.onload=()=>{const inputs=document.querySelectorAll("input");
inputs.forEach(input =>{
    input.addEventListener('change',calculate)
})
}
function calculate(){const Petrol_Price=document.querySelector("#Petrol_price").value;
const liters=document.querySelector("#liters").value;
if("!Petrol_Price||liters")returns;
document.querySelector("#totalAmount").innerHTML= Petrol_Price*liters;}

    


