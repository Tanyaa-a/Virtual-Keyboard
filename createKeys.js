export default function createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
      "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
      "capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\u2191", "shift",
      "ctrl", "option", "cmd", "space", "cmd", "option", "\u2190",
      "\u2193", "\u2192"
    ];
  
    const specialKeyCodes = {
      "backspace": 8,
      "tab": 9,
      "enter": 13,
      "shift": 16,
      "ctrl": 17,
      "option": 18,
      "cmd": 91,
      "capslock": 20,
      "space": 32,
      "up": 38,
      "left": 37,
      "down": 40,
      "right": 39
    };
  
    keyLayout.forEach((key, index) => {
      let keyElement;
  
      if (["backspace", "\\", "enter", "shift", "capslock", "space"].includes(key)) {
        keyElement = document.createElement('div');
      } else {
        keyElement = document.createElement('button');
      }
  
      keyElement.textContent = key === 'space' ? '' : key;
      keyElement.classList.add('key');
      keyElement.classList.add(key.toLowerCase().replace(/ /g, '-'));
  
      if (key === "shift") {
        if (index === keyLayout.indexOf("shift")) {
          keyElement.classList.add("shift-begin");
        } else {
          keyElement.classList.add("shift-end");
        }
      }
  
      if (Object.prototype.hasOwnProperty.call(specialKeyCodes, key.toLowerCase())) {
        keyElement.dataset.key = specialKeyCodes[key.toLowerCase()];
      } else if (!["backspace", "\\", "enter", "shift", "capslock", "space"].includes(key)) {
        keyElement.dataset.key = key.toUpperCase(); 
      }
  
      fragment.appendChild(keyElement);
  
      const insertLineBreak = ["backspace", "\\", "enter"].indexOf(key) !== -1 || (key === "shift" && index === keyLayout.lastIndexOf("shift"));
      if (insertLineBreak) {
        const lineBreak = document.createElement("br");
        fragment.appendChild(lineBreak);
      }
    });
  
    return fragment;
  }
  