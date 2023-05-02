import createKeys from "./createKeys.js";
import pressKeys from "./pressKeys.js";
//import convertToClassName from "./convertToClassName.js";

const inputWindow = document.createElement("textarea");
const mainElement = document.createElement("div");
const keysContainerElement = document.createElement("div");

function init() {
  inputWindow.classList.add("input__text");
  mainElement.classList.add("keyboard");
  keysContainerElement.classList.add("keyboard__keys");

  keysContainerElement.appendChild(createKeys());
  document.body.appendChild(inputWindow);
  document.body.appendChild(mainElement);
  mainElement.appendChild(keysContainerElement);

  //pressKeys();
  //createKeys()

  document.querySelectorAll(".use-keyboard-input").forEach((element) => {
    element.addEventListener("focus", () => {
      open(element.value, (currentValue) => {
        element.value = currentValue;
      });
    });
  });

  const buttons = document.querySelectorAll(".key");
  const textArea = document.querySelector(".input__text");

  buttons.forEach((key) => {
    key.addEventListener("click", () => {
      textArea.value += key.innerText;
    });
  });
  pressKeys();
  //convertToClassName();
}

init();
