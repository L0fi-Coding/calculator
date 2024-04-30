function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
let num=document.querySelectorAll(".integer");
let displayed=document.createElement("div")
let display=document.querySelector(".display")
let op=document.querySelectorAll(".operator");

function operate(num1,num2,op){
    if(op==="+"){
        return add(num1,num2);
    }
    else if(op==="-"){
        return subtract(num1,num2);
    }
    else if(op==="*"){
        return multiply(num1,num2);
    }
    else if(op==="/"){
        return divide(num1,num2);
    }
    else return "error";
}
let counter=[];
let int=0;
let int2=0;
let oper="something";
Array.from(num)
Array.from(op)


num.forEach(num=>num.addEventListener("click",()=>{
    int+=num.textContent
    displayed.textContent+=num.textContent
            
}))
op.forEach(op=>op.addEventListener("click",()=>{
    oper=op.textContent
    displayed.textContent=op.textContent
}))
if(oper!=="boo"){
    num.forEach(num=>num.addEventListener("click",()=>{
        display.textContent="0"
        int2+=num.textContent
        displayed.textContent+=num.textContent
                
    }))
}

display.appendChild(displayed)
console.log(int)
