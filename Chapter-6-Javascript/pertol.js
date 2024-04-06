window.onload=()=>{const inputs=document.querySelectorAll("input");
inputs.forEach(input =>{
    input.addEventListener('change',calculate)
})
}
function calculate(){const Petrol_Price=document.querySelector("#petrol-price").Value;
const liters=document.querySelector("#liters").value;
if("!Petrol_Price||liters")returns;
document.querySelector("#totalAmount").innerText= 
Petrol_Price+liters;}

    


