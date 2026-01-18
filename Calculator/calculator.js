const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let target_output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && target_output !== "") {
    target_output = eval(target_output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    target_output = "";
  } else if (btnValue === "DELE") {
    target_output = target_output.toString().slice(0, -1);
  } else {
    if (target_output === "" && specialChars.includes(btnValue)) return;
    target_output += btnValue;
  }
  display.value = target_output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
