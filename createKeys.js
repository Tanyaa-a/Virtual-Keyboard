export default function createKeys() {
  const fragment = document.createDocumentFragment();
  const keyLayout = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "delete",
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "capsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "return",
    "shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "↑",
    "shift",
    "ctrl",
    "alt",
    "cmd",
    "space",
    "cmd",
    "alt",
    "←",
    "↓",
    "→",
  ];

  const specialKeyCodes = {
    delete: 8,
    backslash: 220,
    tab: 9,
    return: 13,
    "shift right-shift": 16,
    ctrl: 17,
    "alt right-alt": 18,
    "meta meta-right": 91,
    capsLock: 20,
    space: 32,
    "↑": 38,
    "←": 37,
    "↓": 40,
    "→": 39,
    8: 56,
    9: 57,
  };

  let keyboards = [];
  document.onkeydown = function (e) {
    console.log(e);
    keyboards.push(e.charCode);
  };

  keyLayout.forEach((key, index) => {
    let keyElement;

    if (
      ["delete", "\\", "return", "shift", "capsLock", "space"].includes(key)
    ) {
      keyElement = document.createElement("div");
    } else {
      keyElement = document.createElement("button");
    }

    keyElement.textContent = key === "space" ? "" : key;
    keyElement.classList.add("key");
    keyElement.classList.add(key.toLowerCase().replace(/ /g, "-"));

    if (key === "shift") {
      if (index === keyLayout.lastIndexOf("shift")) {
        keyElement.classList.add("shift", "right-shift");
        keyElement.dataset.key = "16_R";
      } else {
        keyElement.classList.add("shift", "left-shift");
        keyElement.dataset.key = "16";
      }
    }

    if (key === "alt") {
      if (index === keyLayout.lastIndexOf("alt")) {
        keyElement.classList.add("alt", "right-alt");
        keyElement.dataset.key = "18_R";
      } else {
        keyElement.classList.add("alt", "left-alt");
        keyElement.dataset.key = "18";
      }
    }
    if (key === "cmd") {
      if (index === keyLayout.lastIndexOf("cmd")) {
        keyElement.classList.add("cmd", "right-cmd");
        keyElement.dataset.key = "91_R";
      } else {
        keyElement.classList.add("cmd", "left-cmd");
        keyElement.dataset.key = "91";
      }
    }

    if (key === "↑") {
      keyElement.classList.add("up");
      keyElement.dataset.key = "38";
    }
    if (key === "←") {
      keyElement.classList.add("left");
      keyElement.dataset.key = "37";
    }
    if (key === "↓") {
      keyElement.classList.add("down");
      keyElement.dataset.key = "40";
    }
    if (key === "→") {
      keyElement.classList.add("right");
      keyElement.dataset.key = "39";
    }

    if (key === "delete") {
      keyElement.dataset.key = "8";
    }

    if (key === "capsLock") {
      keyElement.dataset.key = "20";
    }

    if (key === "tab") {
      keyElement.dataset.key = "9";
    }

    if (key === "\\") {
      keyElement.textContent = "\\";
      keyElement.dataset.key = "220";
    }

    if (
      Object.prototype.hasOwnProperty.call(specialKeyCodes, key.toLowerCase())
    ) {
      keyElement.dataset.key = specialKeyCodes[key.toLowerCase()];
    } else if (
      ![
        "delete",
        "backslash",
        "tab",
        "return",
        "shift",
        "cmd",
        "alt",
        "capsLock",
        "space",
        "ArrowUp",
        "ArrowLeft",
        "ArrowDown",
        "ArrowRight",
        "Digit0",
        "Digit1",
        "Digit2",
        "Digit3",
        "Digit4",
        "Digit5",
        "Digit6",
        "Digit7",
        "Digit8",
        "Digit9",
      ].includes(key)
    ) {
      keyElement.dataset.key = key.toUpperCase();
    }

    fragment.appendChild(keyElement);

    const insertLineBreak =
      ["delete", "backslash", "return"].indexOf(key) !== -1 ||
      (key === "shift" && index === keyLayout.lastIndexOf("shift"));
    if (insertLineBreak) {
      const lineBreak = document.createElement("br");
      fragment.appendChild(lineBreak);
    }
  });

  return fragment;
}
