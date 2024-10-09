let input=document.querySelector("#input");
let btns=document.querySelectorAll(".btns");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
       let element= e.target.innerText
       if(element=="AC"){
        input.value="";
       }else if(element=="DEL"){
        input.value=input.value.substring(0,input.value.length-1)
       }else if(element=="="){
        input.value=eval(input.value)
       }else{
        input.value+= element;
       }
    })
})
