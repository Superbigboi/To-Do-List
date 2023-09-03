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
list.addEventListener("click", function(ev){
   if(ev.target.tagName === "li"){
        ev.target.classList.toggle("checked");
   }
},false);

function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("itemadd").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("itemadd").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  } 
// function newItem() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("itemadd").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUl").appendChild(li);
//     }
//     document.getElementById("itemadd").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   } 