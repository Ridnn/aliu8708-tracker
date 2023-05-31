// The following lines of code has been inspired by the provided youtube resurce in Week 13 module
// The youtube link can be found here: https://youtu.be/ywtkJkxJsdg; "The New dialog HTML Element Changes Modals Forever" by Web Dev Simplified


const openButton = document.querySelector("[open-modal]")
const closeButton = document.querySelector("[close-modal]")
const modal = document.querySelector("dialog")

openButton.addEventListener("click", () => {
    modal.showModal();
})

closeButton.addEventListener("click", () => {
    modal.close();
})



// Timer function
// The following timer function has been inspired by Sam David on Quora. 
// Link can be found here: https://www.quora.com/How-do-I-create-a-simple-JavaScript-count-up-timer-with-a-reset-button-in-HTML

const counter = document.querySelector("#second"); 
const startButton = document.querySelector("#timerStartButton"); 
const stopButton = document.querySelector("#timerStopButton"); 
const resetButton = document.querySelector("#timerResetButton"); 
// The following lines of code has been inspired by the provided youtube resurce in Week 13 module
// The youtube link can be found here: https://youtu.be/ywtkJkxJsdg; "The New dialog HTML Element Changes Modals Forever" by Web Dev Simplified


const openButton = document.querySelector("[open-modal]")
const closeButton = document.querySelector("[close-modal]")
const modal = document.querySelector("dialog")

openButton.addEventListener("click", () => {
    modal.showModal();
})

closeButton.addEventListener("click", () => {
    modal.close();
})



// Timer function
// The following timer function has been inspired by Sam David on Quora. 
// Link can be found here: https://www.quora.com/How-do-I-create-a-simple-JavaScript-count-up-timer-with-a-reset-button-in-HTML

const counter = document.querySelector("#second"); 
const startButton = document.querySelector("#timerStartButton"); 
const stopButton = document.querySelector("#timerStopButton"); 
const resetButton = document.querySelector("#timerResetButton"); 

counter.innerHTML = 0; 
let interval; 
let i = 0; 

startButton.addEventListener("click", startTimer); 
stopButton.addEventListener("click", stopTimer); 
resetButton.addEventListener("click", resetTimer); 

function startTimer(){ 
    interval = setInterval(function() { 
      counter.innerHTML= i++; 
    }, 1000); // The 1000 is in milliseconds, therefore 1000 milliseconds = 1 seconds.
  } 
   
function stopTimer(){ 
    clearInterval(interval); 
} 
   
function resetTimer(){ 
  clearInterval(interval); 
  i = 0; 
  counter.innerHTML = i; 
}


// Calendar Function
// The following code has been inspired Freecodecamp
// https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/#:~:text=In%20JavaScript%2C%20we%20can%20easily,%2C%20time%2C%20and%20time%20zone.

// Date
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
calendar.innerHTML = currentDate;

// Time
let currentTime = date.getHours() + ":" + date.getMinutes();
time.innerHTML = currentTime; 
counter.innerHTML = 0; 
let interval; 
let i = 0; 

startButton.addEventListener("click", startTimer); 
stopButton.addEventListener("click", stopTimer); 
resetButton.addEventListener("click", resetTimer); 

function startTimer(){ 
    interval = setInterval(function() { 
      counter.innerHTML= i++; 
    }, 1000); // The 1000 is in milliseconds, therefore 1000 milliseconds = 1 seconds.
  } 
   
  function stopTimer(){ 
    clearInterval(interval); 
  } 
   
  function resetTimer(){ 
    clearInterval(interval); 
    i = 0; 
    counter.innerHTML = i; 
  } 