//Counter Program

let counter = 0;

const counterDisplay = document.getElementById("counter");

// function to update UI
function updateDisplay() {
  counterDisplay.textContent = counter;
}

updateDisplay();


//buttons
document.getElementById("mydecrease").onclick = function() {
  counter = counter - 1;
  document.getElementById("counter").textContent = counter;
  updateDisplay();

}

document.getElementById("reset").onclick = function() {
  counter = counter = 0;
  document.getElementById("counter").textContent = counter;
  updateDisplay();

}

document.getElementById("myincrease").onclick = function() {
  counter = counter + 1;
  document.getElementById("counter").textContent = counter;
  updateDisplay();

}

// Keyboard support
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
    counter++;
  } else if (event.key === "ArrowDown") {
    counter--;
  } else if (event.key === "r") {
    counter = 0;
  }
updateDisplay();
});

