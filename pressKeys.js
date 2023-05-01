

export default function pressKeys() {
    
    const textArea = document.querySelector('.input__text')
    console.log('hi')
    const addKeyActiveClass = (button) => {
        button.classList.add('key-active');
        setTimeout(() => {
          button.classList.remove('key-active');
        }, 300); 
      };
  
    textArea.addEventListener('keydown', e => {
        console.log(e) 
        //textArea.value += e.key;
  
  
    const button = document.querySelector(`.key.${e.key.toLowerCase()}`);
  if (button) {
    addKeyActiveClass(button);
  }
});


    }
