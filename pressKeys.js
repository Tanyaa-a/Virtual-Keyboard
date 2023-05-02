export default function pressKeys() {
  const textArea = document.querySelector(".input__text");
  textArea.addEventListener("keydown", () => {
    
    const key = event.key === "Enter" ? "Enter" : event.key;
    const button = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);

    
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


