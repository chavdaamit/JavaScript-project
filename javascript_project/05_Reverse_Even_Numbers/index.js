document.getElementById("evenBtn").addEventListener("click", function(){

let output = "";

for(let i = 20; i >= 1; i--){


if(i % 2 === 0){
output += i + ", ";
}

}

document.getElementById("result").innerHTML = output;

});