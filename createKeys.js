export default function createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
        "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|", "del",
        "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","&#8593;", "shift", "ctrl",
        "option", "alt", "space", "alt", "ctrl", "&#8592;",
        "&#8595;", "&#8594;"
    ];


keyLayout.forEach((key, index) => {
    let keyElement = document.createElement('div');
    keyElement.textContent = key;
    keyElement.classList.add('key');

    if (["backspace", "del", "enter", "shift", "caps lock", "space"].includes(key)) {
        keyElement = document.createElement('div');
    } else {
        keyElement = document.createElement('button');
    }

    
    keyElement.innerHTML = key;
    keyElement.innerHTML = key === 'space' ? '' : key; 

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
        
        const lineBreak = document.createElement("br");
        fragment.appendChild(lineBreak);
    }
});
    

return fragment;
}