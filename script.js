const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterTitleEl = document.querySelector(".counter__title");
const counterEl = document.querySelector(".counter");

resetButtonEl.addEventListener("click", () => {
  //set counter value to zero
  counterValueEl.textContent = 0;
  //set the title
  counterTitleEl.textContent = "Fancy counter";
  //set the background colour
  counterEl.classList.remove("counter--limit");
  //enable decrease and increase buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  //blur the reset button
  resetButtonEl.blur();
});

decreaseButtonEl.addEventListener("click", () => {
  //get current value of counter
  const currentValue = counterValueEl.textContent;
  //convert the string to the number
  const currentValueAsNumber = +currentValue;
  //decrement by 1
  let newValue = currentValueAsNumber - 1;

  //if newvalue is less than 0

  if (newValue < 0) {
    newValue = 0;
  }

  //set counter element with new value
  counterValueEl.textContent = newValue;
});

const incrementCounter = () => {
  //get current value of counter
  const currentValue = counterValueEl.textContent;
  //convert the string to the number
  const currentValueAsNumber = +currentValue;
  //decrement by 1
  let newValue = currentValueAsNumber + 1;
  // check if newvalue is greaterthan 5
  if (newValue > 5) {
    newValue = 5;
    // change the background colour when reaches the limit
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit! buy <b>pro</b> for >5";

    //increase and decrease butttons disabled
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  //update counter element with new value
  counterValueEl.textContent = newValue;
};
increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
