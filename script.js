window.onload = function(){
    var cube = document.querySelector("#cube");
var btn = document.querySelectorAll(".btn");
var arr = ["um", "dois", "tres", "quatro", "cinco", "seis"];

for(let i=0;i<arr.length;i++){
  btn[i].addEventListener("click", function(e){
    let l = btn[i].innerHTML.slice(5) - 1;
    cube.className = "";
    cube.classList.add(arr[l]);
  });
}


console.log()
}

