// const texts = ["Étudiant en B1 sécurité informatique à Headn", "En quête d’une opportunité de stage"]; // Array of texts
// let currentText = 0; // Track the current text
// let letterIndex = 0; // Track the current letter in the text

// const typewriter = document.getElementById('typewriter');

// function typeWriter() {
//   if (letterIndex < texts[currentText].length) {
//     typewriter.innerHTML += texts[currentText].charAt(letterIndex);
//     letterIndex++;
//     setTimeout(typeWriter, 100); // Adjust typing speed
//   } else {
//     setTimeout(eraseText, 2000); // Wait before starting to erase text
//   }
// }

// function eraseText() {
//   if (letterIndex > 0) {
//     typewriter.innerHTML = texts[currentText].substring(0, letterIndex - 1);
//     letterIndex--;
//     setTimeout(eraseText, 50); // Adjust erasing speed
//   } else {
//     currentText = (currentText + 1) % texts.length; // Move to the next text
//     setTimeout(typeWriter, 500); // Wait before typing next text
//   }
// }

// typeWriter(); // Start the typewriter effect

// document.addEventListener("DOMContentLoaded", function() {
//     const text = "Your long typewriter effect text goes here...";
//     const typewriterElement = document.getElementById("typewriter");
//     let index = 0;

//     function typewriterEffect() {
//         if (index < text.length) {
//             typewriterElement.innerHTML += text[index];
//             index++;
//             setTimeout(typewriterEffect, 100);
//         }

//         // For mobile screens, insert line break at the midpoint of the text
//         if(window.innerWidth <= 768 && index === Math.floor(text.length / 2)) {
//             typewriterElement.innerHTML += '<br>';
//         }
//     }

//     typewriterEffect();
// });


const texts = ["Étudiant en Bachelor Informatique à Collège de Paris - Tunis", "Brand Designer, Developer, ITSM - UEMS Consultant"]; // Array of texts
let currentText = 0; // Track the current text
let letterIndex = 0; // Track the current letter in the text

const typewriter = document.getElementById('typewriter');

function typeWriter() {
  // Check if we're halfway through the text and on a mobile device
  if (window.innerWidth <= 768 && letterIndex === Math.floor(texts[currentText].length / 2)) {
    typewriter.innerHTML += '<br>'; // Add a line break
  }
  
  if (letterIndex < texts[currentText].length) {
    typewriter.innerHTML += texts[currentText].charAt(letterIndex);
    letterIndex++;
    setTimeout(typeWriter, 100); // Adjust typing speed
  } else {
    setTimeout(eraseText, 2000); // Wait before starting to erase text
  }
}

function eraseText() {
  if (letterIndex > 0) {
    // Need to handle the removal of the line break when erasing
    if (typewriter.innerHTML.endsWith('<br>')) {
      typewriter.innerHTML = typewriter.innerHTML.slice(0, -4); // Remove the line break
      // Adjust letterIndex to skip over the removed line break
      letterIndex = letterIndex - 1;
    } else {
      typewriter.innerHTML = texts[currentText].substring(0, letterIndex - 1);
      letterIndex--;
    }
    setTimeout(eraseText, 50); // Adjust erasing speed
  } else {
    currentText = (currentText + 1) % texts.length; // Move to the next text
    setTimeout(typeWriter, 500); // Wait before typing next text
  }
}

typeWriter(); // Start the typewriter effect
