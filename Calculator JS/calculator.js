let div=document.querySelector(".main");
for(let i=1;i<11;i++){
    let button=document.createElement("button");
    if( i ==4 || i== 7 ||i==10){
        if(i==4){
            let button2=document.createElement("button");
            div.appendChild(button2);
            button2.innerHTML=  "+";
            button2.value="+";
        }
        if(i==7){
            let button2=document.createElement("button");
            div.appendChild(button2);
            button2.innerHTML=  "-";
            button2.value="-";
        }if(i==10){
            let button2=document.createElement("button");
            div.appendChild(button2);
            button2.innerHTML=  "*";
            button2.value="*";
            break;
        }

        let br=document.createElement("br");
        div.appendChild(br);
    }
    button.innerHTML=  ""+i;
    button.value=i;
    div.appendChild(button);

}
let TextField=document.getElementById("TextField");
br=document.createElement("br");
div.appendChild(br);
button=document.createElement("button");
div.appendChild(button);
button.innerHTML=  "0";
button.value="0";

button=document.createElement("button");
div.appendChild(button);
button.innerHTML=  "=";
button.value="=";
button=document.createElement("button");
div.appendChild(button);
button.innerHTML=  "C";
button.value="C";
button.id="C";
button=document.createElement("button");
div.appendChild(button);
button.innerHTML=  "/";
button.value="/";


br=document.createElement("br");
div.appendChild(br);
button=document.createElement("button");
div.appendChild(button);
button.innerHTML=  ".";
button.value=".";
button.id="V"


let currentNumber="";
let btns=document.querySelectorAll("button");
btns.forEach(btn=>btn.addEventListener("click",function (event)
{
if(event.target.tagName === "BUTTON"){
    if(btn.value == "C"){
        currentNumber="";
        TextField.value = currentNumber;
    }
    else if(btn.value == "="){
    let result =eval(currentNumber);
    currentNumber=result;
    TextField.value = currentNumber;
    }else {
        currentNumber = currentNumber + btn.value;
        TextField.value = currentNumber;
    }
}
}))
