/*document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`;

let fullName = "Alix";
let age = 25;
let student = false;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;

let username;
username = prompt("What's your name?");
console.log(username);*/

/*let username;

document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}*/

const PI = 3.14159;
let radius;
let circumference;



document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value; 
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference;

}