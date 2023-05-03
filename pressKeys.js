export default function pressKeys() {
  const textarea = document.querySelector(".input__text");
  textarea.addEventListener("keydown", (event) => {
    
    const key = event.key;
    let keyIdentifier;
    switch (key) {
      case 'Backspace':
        keyIdentifier = '8';
        break;
      
      case 'CapsLock':
        keyIdentifier = '20';
        break;
      
      case 'Enter':
        keyIdentifier = '13';
        break;
      case ' ':
        keyIdentifier = '32';
        break;
      
        case 'Shift':
        keyIdentifier = event.location === 1 ? '16' : '16_R';
        
          break;
      
        case 'Control':
        keyIdentifier = '17';
        break;
      
       case 'Meta':
       keyIdentifier = event.location === 1 ? '91' : '91_R';
        break;
      
        case 'Alt':
        keyIdentifier = event.location === 1 ? '18' : '18_R';
        
        break;
      
      case 'Tab':
        keyIdentifier = '9';
        break;
    
        case 'ArrowLeft':
          keyIdentifier = '37';
          
          break;
        case 'ArrowUp':
          keyIdentifier = '38';
         
          break;
        case 'ArrowRight':
          keyIdentifier = '39';
          break;
        case 'ArrowDown':
          keyIdentifier = '40';
         
        break;
      
        case "Backslash":
          keyIdentifier = "220";
          break;
      
      default:
        keyIdentifier = key.toUpperCase();
      
    }
  

    const button = document.querySelector(`.key[data-key="${keyIdentifier}"]`);

    const addKeyActiveClass = (button) => {
      button.classList.add("key-active");
      setTimeout(() => {
        button.classList.remove("key-active");
      }, 300);
    };

    if (button) {
      addKeyActiveClass(button);
    }
  });
}
