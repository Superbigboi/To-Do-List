var delBtn = document.getElementsByTagName("li");
var i;
for (i =0; i < delBtn.length; i++){
    var span = document.createElement("span");
    var txt  = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    delBtn[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list =  document.querySelector("ul")
list.addEventListener("click", function(event){
   if(event.target.tagName === "li"){
        event.target.classList.toggle("checked");
   }
},false);

function newItem(){
    var li = document.getCreateElement("li")
    var inputValue = document.getElementById("itemadd").value;
    var t = document.createTextNode(inputValue)
    li.appendChild(t);
    if(inputValue===""){
        alert("You MUST write something in that box before pressing that button");
    }
    else{
        document.getElementById("myUl").append("li");
    }
    document.getElementById(itemadd).value="";
    var span = document.createElement("span");
    var text = document.createTextNode("x");
    span.classNode="close";
    span.appendChild(text);
    li.appendChild(span);
    for(i = 0; i < close.length; i++){

    }
}