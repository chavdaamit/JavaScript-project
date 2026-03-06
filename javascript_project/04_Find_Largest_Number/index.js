document.getElementById("numberForm").addEventListener("submit", function(e){

e.preventDefault();

let numbers = [
Number(document.getElementById("num1").value),
Number(document.getElementById("num2").value),
Number(document.getElementById("num3").value),
Number(document.getElementById("num4").value),
Number(document.getElementById("num5").value)
];

let largest = numbers[0];

for(let i = 1; i < numbers.length; i++){

if(numbers[i] > largest){
largest = numbers[i];
}

}

document.getElementById("result").innerHTML =
`Entered Numbers: ${numbers.join(", ")} <br>
Largest Number: ${largest}`;

});