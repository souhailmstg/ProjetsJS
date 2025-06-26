let inputText=document.getElementById("inputBox");
let add=document.getElementById("btn");
let ul=document.querySelector("ul");

add.onclick=function(){
let li=document.createElement("li");
ul.appendChild(li);
li.innerHTML=inputText.value +"<span>x</span>";
inputText.value = "";
saveData();
}
ul.addEventListener('click',function(event){
    if(event.target.tagName==='SPAN'){
        let li=event.target.closest('li');
        li.remove();
        saveData();
    }else if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
        saveData();
    }
    });
    function saveData(){
        localStorage.setItem("data",ul.innerHTML);
    }
    function displayData(){
        ul.innerHTML=localStorage.getItem("data");
    }
    displayData();