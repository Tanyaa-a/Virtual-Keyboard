// // Create the keyboard container element
// const keyboard = document.createElement('div');
// keyboard.className = 'keyboard';
// document.body.appendChild(keyboard);

// // Define the keys and create the virtual keyboard
// const keys = '1234567890qwertyuiopasdfghjklzxcvbnm';

// function createVirtualKeyboard() {
//     for (let i = 0; i < keys.length; i++) {
//         const key = document.createElement('div');
//         key.classList.add('key');
//         key.textContent = keys[i];
//         key.addEventListener('click', () => handleKeyPress(keys[i]));
//         keyboard.appendChild(key);
//     }
// }

// function handleKeyPress(key) {
//     console.log(`Key pressed: ${key}`);
//     // Add your logic to handle key presses here
// }

//createVirtualKeyboard();

// const Keyboard = {
//   elements: {
//     main: null,
//     keysContainer: null,
//     keys: [],
//   },

//   eventHandlers: {
//     oninput: null,
//     onclose: null,
//   },

//   properties: {
//     value: "",
//     capsLock: false,
//   },

//   init() {
//     // Create main elements
//     this.elements.main = document.createElement("div");
//     this.elements.keysContainer = document.createElement("div");

//     // Setup main elements
//     this.elements.main.classList.add("keyboard");
//     this.elements.keysContainer.classList.add("keyboard__keys");
//     this.elements.keysContainer.appendChild(this._createKeys());

//     this.elements.keys =
//       this.elements.keysContainer.querySelectorAll(".keyboard__key");

//     // Add to DOM
//     this.elements.main.appendChild(this.elements.keysContainer);
//     document.body.appendChild(this.elements.main);

//     // Automatically use keyboard for elements with .use-keyboard-input
//     document.querySelectorAll(".use-keyboard-input").forEach((element) => {
//       element.addEventListener("focus", () => {
//         this.open(element.value, (currentValue) => {
//           element.value = currentValue;
//         });
//       });
//     });
//   },

//   _createKeys() {
//     const fragment = document.createDocumentFragment();
//     const keyLayout = [
//       "`",
//       "1",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "0",
//       "-",
//       "=",
//       "backspace",
//       "tab",
//       "q",
//       "w",
//       "e",
//       "r",
//       "t",
//       "y",
//       "u",
//       "i",
//       "o",
//       "p",
//       "[",
//       "]",
//       "|",
//       "del",
//       "caps lock",
//       "a",
//       "s",
//       "d",
//       "f",
//       "g",
//       "h",
//       "j",
//       "k",
//       "l",
//       ";",
//       "'",
//       "enter",
//       "shif",
//       "z",
//       "x",
//       "c",
//       "v",
//       "b",
//       "n",
//       "m",
//       ",",
//       ".",
//       "?",
//       "shift",
//       "ctrl",
//       "option",
//       "alt",
//       "space",
//       "alt",
//       "ctrl",
//       "",
//       "",
//       "",
//     ];

//     // Creates HTML for an icon
//     const createIconHTML = (icon_name) => {
//       return `<i class="material-icons">${icon_name}</i>`;
//     };

//     keyLayout.forEach((key) => {
//       const keyElement = document.createElement("button");
//       const insertLineBreak =
//         ["backspace", "del", "enter", "shift"].indexOf(key) !== -1;

//       // Add attributes/classes
//       keyElement.setAttribute("type", "button");
//       keyElement.classList.add("keyboard__key");

//       switch (key) {
//         case "backspace":
//           keyElement.classList.add("keyboard__key--wide");
//           keyElement.innerHTML = createIconHTML("backspace");

//           keyElement.addEventListener("click", () => {
//             this.properties.value = this.properties.value.substring(
//               0,
//               this.properties.value.length - 1
//             );
//             this._triggerEvent("oninput");
//           });

//           break;

//         case "caps":
//           keyElement.classList.add(
//             "keyboard__key--wide",
//             "keyboard__key--activatable"
//           );
//           keyElement.innerHTML = createIconHTML("caps lock");

//           keyElement.addEventListener("click", () => {
//             this._toggleCapsLock();
//             keyElement.classList.toggle(
//               "keyboard__key--active",
//               this.properties.capsLock
//             );
//           });

//           break;

//         case "enter":
//           keyElement.classList.add("keyboard__key--wide");
//           keyElement.innerHTML = createIconHTML("return");

//           keyElement.addEventListener("click", () => {
//             this.properties.value += "\n";
//             this._triggerEvent("oninput");
//           });

//           break;

//         case "space":
//           keyElement.classList.add("keyboard__key--extra-wide");
//           keyElement.innerHTML = createIconHTML("space");

//           keyElement.addEventListener("click", () => {
//             this.properties.value += " ";
//             this._triggerEvent("oninput");
//           });

//           break;

//         case "done":
//           keyElement.classList.add(
//             "keyboard__key--wide",
//             "keyboard__key--dark"
//           );
//           keyElement.innerHTML = createIconHTML("shift");

//           keyElement.addEventListener("click", () => {
//             this.close();
//             this._triggerEvent("onclose");
//           });

//           break;

//         default:
//           keyElement.textContent = key.toLowerCase();

//           keyElement.addEventListener("click", () => {
//             this.properties.value += this.properties.capsLock
//               ? key.toUpperCase()
//               : key.toLowerCase();
//             this._triggerEvent("oninput");
//           });

//           break;
//       }

//       fragment.appendChild(keyElement);

//       if (insertLineBreak) {
//         fragment.appendChild(document.createElement("br"));
//       }
//     });

//     return fragment;
//   },

//   _triggerEvent(handlerName) {
//     if (typeof this.eventHandlers[handlerName] == "function") {
//       this.eventHandlers[handlerName](this.properties.value);
//     }
//   },

//   _toggleCapsLock() {
//     this.properties.capsLock = !this.properties.capsLock;

//     for (const key of this.elements.keys) {
//       if (key.childElementCount === 0) {
//         key.textContent = this.properties.capsLock
//           ? key.textContent.toUpperCase()
//           : key.textContent.toLowerCase();
//       }
//     }
//   },



//   close() {
//     this.properties.value = "";
//     this.eventHandlers.oninput = oninput;
//     this.eventHandlers.onclose = onclose;
//     this.elements.main.classList.add("keyboard--hidden");
//   },
// };

// window.addEventListener("DOMContentLoaded", function () {
//   Keyboard.init();
// });
// const inputWindow = document.createElement("div")
// const mainElement = document.createElement("div");
// const keysContainerElement = document.createElement("div");

// const keys = [];
// let value = "";
// let capsLock = false;
import createKeys from "./createKeys.js";
import pressKeys from "./pressKeys.js";

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

  const buttons = document.querySelectorAll('.key')
  const textArea = document.querySelector('.input__text')

  buttons.forEach(key => {
    key.addEventListener('click', () => {
      textArea.value += key.innerText
    })
  })

  // textArea.addEventListener("keydown", e => {
  //   console.log(e)
  // })

  pressKeys();
}

  init();

 



