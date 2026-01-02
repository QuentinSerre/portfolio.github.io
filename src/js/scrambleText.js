let randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%9^&*()_+-<>?";

let elm = document.querySelector('.scrambleText');
let originalText = elm.dataset.text;

window.addEventListener('load', scrambleText());
elm.addEventListener('mouseover', () => {
  scrambleText();
});

function scrambleText() {
  let i = 0;
  let interval = setInterval(() => {
    elm.textContent = originalText
      .split('')
      .map((char, index) => {
        if (index < i) return char;
        return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      })
      .join('');

    if (i >= originalText.length) {
      clearInterval(interval);
    }
    i += 1 / 3;
  }, 50);
}