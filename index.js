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

  /*WE WILL PUT A NUMBER OF DICES INTO AN INPUT AND IT WILL GIVE US A RANDOM NUMBER AS MANY TIMES AS DICES WERE CHOSEN (ROLLED)

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
    THE 11TH ONE WITH A DICE GAME*/

    /*function generatePassword(length, includeLowercase, includeUppercase, includeNumbers,includeSymbols){     
      
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const symbolChars = "!@#$^&*()_-+=";

      let allowedChars = "";
      let password = "";

      allowedChars += includeLowercase ? lowercaseChars : "";
      allowedChars += includeUppercase ? uppercaseChars : "";
      allowedChars += includeNumbers ? numberChars : "";
      allowedChars += includeSymbols ? symbolChars : "";

      if (length <= 0){
        return `(password length must be at least 1)`
      }
      if (allowedChars.length === 0){
        return `(at least 1 set of chars needs to be selected)`
      }

      for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
      }
      return password;
    }

    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers,includeSymbols);
    console.log(`Generated password: ${password}`); 
    THE 12TH ONE WITH A  RANDOM PASSWORD GENERATOR*/


    /*function createCounter(){

      let count = 0;

        function increment(){
          count++;
          console.log(`Count increased to ${count}`);
        }

        function getCount(){ 
          return count;
        }

        return {increment, getCount};
      }

      const counter = createCounter();

      increment() -> if we call this function again, it will show the same result (1), its resetting it every time we call a function, with closure we can maintain the state of the variable

        counter.increment();
        counter.increment();

        console.log(`The current count is ${counter.getCount()}`);

      функия ceateCounter вызывается, внутри нее переменная count. СОздается функция Increment, которая увеличивает count на 1 и выводит в консоль.Переменная count локальна для createCounter, но из-за того, что Increment использует count, они замыкаются.*/
  
      /*We had to add  function getCount because properties are private and we cant get the exact counter since its hidden, so we create a function that has access to it and envoke this function. 
      Возвращаем именно объект, потому что в него можно положить другие штуки (сколько угодно) (decriment, reset, get value atd -> not builtins, just different types of methods used for one function) 
      THE 13TH*/

/*function updateClock(){
  const now = new Date();
  const hours=now.getHours().toString().padStart(2,0); // getHours, getMinutes etc - builtins of the Date method //
  const minutes = now.getMinutes().toString().padStart(2,0); // padStart - a builtin that works ONLY WITH STRINGS, it will add numbers in the start(thats why padSTART). In this case it will see if the number has 2 digits(2, 0), if not it will add digits to the beginning until the number has two digits, and the digit it will be adding is 0 (2,0) //
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;}      
updateClock();
setInterval(updateClock, 1000); //a builtin function, it works like setTimeout, but it will call the function repeatedly. We need a callback and time of the interval in ms //
      THE 14TH LESSON
      */

 /* const display = document.getElementById("display");
  let timer = null;
  let startTime = 0;
  let elapsedTime = 0;
  let isRunning = false;

  function start(){
    if(!isRunning){
      startTime = Date.now() - elapsedTime; // elapsedTime вычитается, чтобы при повторном нажатии старт таймер продолжался, а не начинался заново//
      timer = setInterval(update, 10);
      isRunning = true;
    }
  }
  function stop(){
    if(isRunning){
      clearInterval(timer);
      elapsedTime = Date.now() - startTime;
      isRunning = false;
    }
    
  }
  function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
  }
function update(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime; //Считаем, сколько миллисекунд прошло с момента нажатия "Start".//

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); //Делим на 60, чтобы минуты и секунды обнулялись после 59.//
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
} THE 15TH WITH STOPWATCH PROGRAM */

/*import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
console.log(circumference.toFixed(2));

const volume = getVolume(10);
console.log(volume); HE 15TH WITH STOPWATCH PROGRAM*/

/*const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try {display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}
  THE 16TH WITH CALCULATOR */

 /* const myBox = document.getElementById("myBox");
  const myBtn = document.getElementById("myBtn");

  /*function changeColor(event){
    event.target.style.backgroundColor = "white"; event.target - это элемент, на который кликнули, в данном случае это myBox.
    event.target.textContent = "Love you!"
    event.target.style.color = "pink";
    event.target.style.border = "2px solid pink";
  } ->> we can also do anarrow function

  myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "white";
    myBox.textContent = "Love you!"
    myBox.style.color = "pink";
    myBox.style.border = "2px solid pink";});

  myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "lightpink";
    myBox.style.color = "white";
    myBox.textContent = "Do you know...";
    });

    myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "rgb(235, 113, 192)"; 
    myBox.style.color = "white";
    myBox.textContent = "    Wait!";
    }); ---> THE 17TH*/

   /*  const myBox = document.getElementById("myBox");

    //document.addEventListener("keydown", event => {
     // myBox.textContent = "no hihik";
      //myBox.style.fontSize = "3rem";
      //myBox.style.backgroundColor = "tomato";
    //}); 

     //document.addEventListener("keyup", event => {
     // myBox.textContent = "hihik";
      //myBox.style.backgroundColor = "rgb(135, 178, 135)";
   // }); 

  const moveAmount = 10;
   let x = 0;
   let y = 0;

   document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

      event.preventDefault();
      switch(event.key){
        case "ArrowUp":
          y -= moveAmount;
          break;

        case "ArrowDown":
          y += moveAmount;
          break;

        case "ArrowLeft":
          x -= moveAmount;
          break;  

        case "ArrowRight":
          x += moveAmount;
          break;
      }

      myBox.style.top = `${y}px`;
      myBox.style.left = `${x}px`;
    }
   }) THE 18TH*/
  
    /*const myBtn = document.getElementById("myBtn");
    const myImage = document.getElementById("myImage");

    myBtn.addEventListener("click", event => {
      //if(myImage.style.display === "none"){ //the display property will most likely remove the (in the case from the lesson, i have a pretty css here) image and move the button somehow so it won't reserve the space for theimage when we want it to be shown again. Instead of "display" we can use "visibility" (with visible/hidden properties) so the button will prolly remain at its initial position, see below
        //myImage.style.display = ""; //here we can write "" instead of suggested "block", it will do the same the same thing but the 1st option will less likely crash the flow
        //myBtn.textContent = "HIDE ME";
      //}

        if(myImage.style.visibility === "hidden"){ 
        myImage.style.visibility = "visible"; 
        myBtn.textContent = "HIDE ME";
      }

      //else{
      //myImage.style.display = "none"; 
     // myBtn.textContent = "SHOW ME";
     // document.body.style.backgroundColor = " rgb(103, 26, 155)";
      //}

      else{
      myImage.style.visibility = "hidden"; 
      myBtn.textContent = "SHOW ME";
      document.body.style.backgroundColor = " rgb(103, 26, 155)";
      } 

    });THE 19TH HIDE/SHOW */
    

    /*let buttons = document.querySelectorAll(".myButtons"); //if we want to select all the buttons (not only with that class), we can replace it with just "button"
    
   //buttons.forEach(button =>{
    //button.style.backgroundColor = "tomato";
    //button.textContent += " hihik";
   //}); //how we can change/add html and css to the entire nodelist -> we can use forEach() to iterate through all the elements

   //buttons.forEach(button => {
    //button.addEventListener("click", event => {
      //event.target.style.backgroundColor = "darkred"; //click event listener that changes the TARGETED element
   // })
   //})

  // buttons.forEach(button => {
    //button.addEventListener("mouseover", event => {
      //event.target.style.backgroundColor = "rgba(8, 40, 8, 1)";
    //});
   //});

   
   //buttons.forEach(button => {
    //button.addEventListener("mouseout", event => {
      //event.target.style.backgroundColor = "rgb(10, 57, 10)"; //MOUSEOVER/MOUSEOUT EVENT LISTENERS
    //});
   //});

 //  const newButton = document.createElement("button"); // while creating an appending html elements, there are 3 steps. <- it's the 1st STEP = create an element first
   //newButton.textContent = "Button 5";//the 2nd STEP ->add properties or attributes
  //newButton.classList = "myButtons"; //we assigned a new class to a button via classlist
  //document.body.appendChild(newButton);//THE 3RD STEP -> We append the element to the DOM, since the parent element for buttons is body in this case, we append the element to it

 // console.log(buttons); //if we were to console buttons as they are now, it would return the nodelist of 4 elements (even tho we added the 5th button), cuz nodelist is a static collection and it's not updating automatically

 //buttons = document.querySelectorAll(".myButtons"); //so we will have to update it manually like this by just updating the class list from the beginning 
 //console.log(buttons); HOW TO ADD AN ELEMENT

 buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove();
    //console.log(buttons); // if we were to console it, even after removing all the elelements, the nodelist in console will show the initial number of elelements (in our case - 4), cuz its not updating automatically
    buttons = document.querySelectorAll(".myButtons"); // so we will update it manually like we did when added a new element
    console.log(buttons);
  });
 }); THE 20TH WITH NODELISTS */

 //const myBtn = document.getElementById("myBtn");
 //myBtn.classList.add("enabled"); //we didnt add this class via css or html, we changed it dynamically w/ js
 //myBtn.classList.remove("enabled"); //the same as above
 
// myBtn.classList.add("hover"); //likethis it wont work, cuz it will just take the declared in css properties and apply it permanently, instead of only applying during the hover action

//myBtn.addEventListener("mouseover", event => {
 // event.target.classList.add("hover");
//});

//myBtn.addEventListener("mouseout", event => {
  //event.target.classList.remove("hover"); //just like this we can switch between applied css properties.
//});// OR WE CAN USE "TOGGLE" INSTEAD OF "ADD AND REMOVE", IT WILL DO THE SAME

//myBtn.classList.add("enabled"); //the class that the button has had initially

//myBtn.addEventListener("click", event =>{
  //if(event.target.classList.contains("disabled")){ //we access the class list of the targeted element and check if it has the chosen class
   // event.target.textContent += "hihik"; //if yes - we are gonna add hihik to the text content, if not - see else
  //}
  //else {
   // event.target.classList.replace("enabled", "disabled"); //we just pick which class should replace another one. If the element doesn't have a disabled class, it will replace the enabled class with disabled.
 // }; //SO WE HAVE THE BUTTON ENABLED, THEN WE CLICK ON IT, THE METHOD CHECKS IF THE BUTTON HAS DISABLED CLASS ON (it doesnt yet). IF IT HAS, THEN IT WILL ADD HIHIK. BUT OUR BUTTON HAS ENABLED CLASS FROM THE BEGINNING, SO THE PART OF THE CODE WITH else WILL RUN AND IT WILL REPLACE "ENABLED" CLASS WITH "DISABLED", THEN THE CODE WE WROTE FOR "DISABLE" WILL WORK AND IT WILL ADD THE HIHIK 
//}); --> THE 21ST P1.

/*let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button => {
  button.classList.add("enabled");
});

buttons.forEach(button => {
  button.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover"); //the button will do the staff written in css for the mentioned class (hover), it will keep (at this point) the properties UNTIL we hover over it again (then it will go back to its initial state)
  });// toggle - переключатель, который вкл или выкл определенный класс (в нашем случае вкл и выкл ховер)
});

buttons.forEach(button => {
  button.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover"); // with this code the button will go back to its initial state when we leave the button (not when we have to hover over it again)
});
});

buttons.forEach(button => {
  button.addEventListener("click" , event => {
    if(event.target.classList.contains("disabled")){
      event.target.textContent += "hihik";
    }
    else{
    event.target.classList.replace("enabled", "disabled");
    }   
  });
}); THE 21ST PT2*/

const choices = ["rock", "paper", "scissors"]; //its an array so it has indexes
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)]; //computer choice will be a random index (from our array - 0,1,2, times 3 cuz we have 3 elements in the array) that will be rounded and give us one of those options according to its index, and that option will be stored within computerChoice
  let result = "";

  if(playerChoice === computerChoice){
    result = "IT'S A TIE"
  }
  else{
    switch(playerChoice){
      case "rock":
       result = (computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE =(");
       break;
      case "paper":
       result = (computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE =(");
       break;
      case "scissors":
       result = (computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE =(");
       break;
    }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

   // if(result === "YOU WIN!"){ //i did the color change depending on the resultby myself! but i found out about the Separation of concerns so it's not as good as teacher's
    //  resultDisplay.style.color = "rgba(35, 134, 112, 0.64)";
   // }
   // else if(result === "YOU LOSE =("){
   //   resultDisplay.style.color = "rgba(203, 33, 64, 0.51)";
   // }
   // else{
   //   resultDisplay.style.color = "rgba(104, 92, 94, 0.8)";
   // }
  //}

    resultDisplay.classList.remove("greenText", "redText"); //this is for resetting the color after each turn so the tie (undefined color) won't keep the color of th eprevious result
    switch(result){
      case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        playerScore ++;
        playerScoreDisplay.textContent = playerScore;
        break;

      case "YOU LOSE =(":
        resultDisplay.classList.add("redText");
        computerScore ++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
  }

