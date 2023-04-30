export default function createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
        "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|", "del",
        "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","up", "shift", "ctrl",
        "option", "alt", "space", "alt", "ctrl", "left",
        "down", "right"
    ];
  
//     keyLayout.forEach(key => {
//         const keyElement = document.createElement('div');
//         keyElement.textContent = key;
//         keyElement.classList.add('key');
//         fragment.appendChild(keyElement);
//     });
//     keyLayout.forEach((key) => {
//         const keyElement = document.createElement("button");
//         const insertLineBreak =
//             ["backspace", "del", "enter", "shift"].indexOf(key) !== -1;
//         keyElement.classList.add('button');
//         keyElement.textContent = key;

//     // Append the keyElement to the container you want the buttons to be in, e.g., a div with the class "keyboard"
//     //document.querySelector(".keyboard").appendChild(keyElement);

//     if (keyElement.textContent === "delete") {
//         // Append a line break after the "delete" button
//         const lineBreak = document.createElement("br");
//         document.querySelector(".keyboard").appendChild(lineBreak);
//         fragment.appendChild(lineBreak);
//     }
// });
        
//         return fragment;
//     }
    

keyLayout.forEach((key, index) => {
    let keyElement = document.createElement('div');
    keyElement.textContent = key;
    keyElement.classList.add('key');

    if (["backspace", "del", "enter", "shift", "caps lock", "space"].includes(key)) {
        keyElement = document.createElement('div');
    } else {
        keyElement = document.createElement('button');
    }

    
    keyElement.textContent = key;
    keyElement.textContent = key === 'space' ? '' : key; // Remove the label for the 'space' key

    keyElement.classList.add('key');
    keyElement.classList.add(key.toLowerCase().replace(/ /g, '-'));

    if (key === "shift") {
        
        if (index === keyLayout.indexOf("shift")) {
            keyElement.classList.add("shift-begin");
        } else {
         
            keyElement.classList.add("shift-end");
        }
    }

    fragment.appendChild(keyElement);
    
    const insertLineBreak = ["backspace", "del", "enter"].indexOf(key) !== -1 || (key === "shift" && index === keyLayout.lastIndexOf("shift"));
    if (insertLineBreak) {
        // Append a line break after specific keys
        const lineBreak = document.createElement("br");
        fragment.appendChild(lineBreak);
    }
});

return fragment;
}