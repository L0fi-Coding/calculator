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
        int=add(num1,num2)
        return add(num1,num2);
    }
    else if(op==="-"){
        int=subtract(num1,num2)
        return subtract(num1,num2);
    }
    else if(op==="*"){
        int=multiply(num1,num2)
        return multiply(num1,num2);
    }
    else if(op==="/"){  
        counter+=1
        int=divide(num1,num2)
        return divide(num1,num2);
    }
    else if (op=="AC"){
        int=""
        int2=""
        oper="";}
}
let int="";
let int2="";
let oper="";
Array.from(num)
Array.from(op)





num.forEach(num=>num.addEventListener("click",()=>{
    if(oper!=""){
      
        int2+=num.textContent
    displayed.textContent+=num.textContent
               
    }
    
    else{
    int+=num.textContent
    displayed.textContent+=num.textContent
    }
    
     
}))
op.forEach(op=>op.addEventListener("click",()=>{
    if(oper!=""){
        one=parseInt(int)
        two=parseInt(int2)
        displayed.textContent=operate(one, two,oper);
        oper=op.textContent
        int2=""
        return;
    }
    oper=op.textContent
    displayed.textContent=""
    if(oper=='AC'){
        int=""
        int2=""
        oper="";
    }
}))

let equal= document.querySelector(".equal")
equal.addEventListener("click",()=>{
    one=parseInt(int)
    two=parseInt(int2)
    displayed.textContent=operate(one, two,oper);
    oper=""
    int2=""

})

display.appendChild(displayed)

