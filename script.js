// Dynamic Text Typing Effect
const dynamicText = document.querySelector('.dynamic-text');
const roles = ['Web Developer', 'Frontend Designer', 'UI/UX Enthusiast'];
let index = 0;
let charIndex = 0;
let currentRole = roles[index];

function typeText() {
  if (charIndex < currentRole.length) {
    dynamicText.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    dynamicText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 100);
  } else {
    index = (index + 1) % roles.length;
    currentRole = roles[index];
    setTimeout(typeText, 500);
  }
}

typeText();
