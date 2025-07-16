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
console.log(username); ITS THE 1ST ONE */

/*let username;

document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}ITS THE 2ND ONE*/

/*const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value; 
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference;
} ITS THE 3RD ONE*/

/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum); THE 4TH ONE */

/*const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
} THE 4.5TH ONE */

/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
  age = myText.value;
  age = Number(age);

  if (age >=100){
    resultElement.textContent = `1`;
  }
  else if(age == 0){
    resultElement.textContent = `2`;
  }
  else if(age >=18){
    resultElement.textContent = `3`;
  }
  else if(age < 0){
    resultElement.textContent = `4`;
  }
  else{
    resultElement.textContent = `5`;
  } THE 5TH ONE*/

  /*const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const masterCardBtn = document.getElementById("masterCardBtn");
  const payPalBtn = document.getElementById("payPalBtn");
  const mySubmit = document.getElementById("mySubmit");
  const subResult = document.getElementById("subResult");
  const paymentResult = document.getElementById("paymentResult");

  mySubmit.onclick = function(){

    if(myCheckBox.checked){
      subResult.textContent = `You are subscribed`;
    }
    else{
    subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked){
    paymentResult.textContent = `You are paying with visa`;  
    }
    else if(masterCardBtn.checked){
      paymentResult.textContent = `You are paying with mastercard`;  
    }
    else if(payPalBtn.checked){
      paymentResult.textContent = `You are paying with paypal`;  
    }
    else{
      paymentResult.textContent = `You must select a payment type`;  
    }
  } THE 6TH ONE */

  /*let username = "";
  if (username === ""){
    console.log(`You didnt enter your name`);
  }
  else{
    console.log(`Hello ${username}`);
  }

  let username = "";
  while (username === "" || username === null){
    username = window.prompt(`Enter your username`);
  }
  console.log(`Hello ${username}`); THE 7TH ONE*/

 /* let loggedIn = false;
  let username;
  let password;

  while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

      if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!")
    }
    else{
      console.log("Invalid credentials!");
    }
  } THE 8TH ONE*/

 /* const minNum = 1;
  const maxNum = 100;

  const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  let attempts = 0;
  let guess;
  let running = true;

  while(running){

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
      window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
      window.alert("Please enter a valid number");
    }
    else{
      attempts++;
      if(guess < answer){
        window.alert("Too low");
      }
      else if(guess >answer){
        window.alert("too high");
      }
      else{
        window.alert(`congrats, the answer ${answer} is correct. It took you ${attempts} turns to win`);
         running = false;
      }
    }
  } TTHE 9TH ONE WITH GUESSING GAME */

 /* const textBox = document.getElementById("textBox");
  const toFahrenheit = document.getElementById("toFahrenheit");
  const toCelsius = document.getElementById("toCelsius");
  const result = document.getElementById("result");
  let temp;

  function convert(){
    if(toFahrenheit.checked){
      temp = Number(textBox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "F";
    }
    else if(toCelsius.checked){
      temp = Number(textBox.value);
      temp = (temp - 32) * 5 / 9;
      result.textContent = temp.toFixed(1) + "C";
    }
    else{
      result.textContent = "Select a unit";
    }
  } THE 10TH ONE WITH TEMP CONVERTOR*/

  /*WE WILL PUT A NUMBER OF DICES INTO AN INPUT AND IT WILL GIVE US A RANDOM NUMBER AS MANY TIMES AS DICES WERE CHOSEN (ROLLED)*/

  function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
  }