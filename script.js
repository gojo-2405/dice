const dice = document.getElementById('dice');
const rollBtn = document.getElementById('rollBtn');
const quoteBox = document.getElementById('quote');

const quotes = {
  1: "Believe in yourself and all that you are.",
  2: "Every day is a new beginning.",
  3: "Push yourself, because no one else will.",
  4: "Dream big and dare to fail.",
  5: "Stay positive, work hard, make it happen.",
  6: "Success is not final, failure is not fatal."
};

rollBtn.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1;

  // Rotate cube to show correct face
  switch(roll) {
    case 1: dice.style.transform = "rotateX(0deg) rotateY(0deg)"; break;
    case 2: dice.style.transform = "rotateY(180deg)"; break;
    case 3: dice.style.transform = "rotateY(-90deg)"; break;
    case 4: dice.style.transform = "rotateY(90deg)"; break;
    case 5: dice.style.transform = "rotateX(-90deg)"; break;
    case 6: dice.style.transform = "rotateX(90deg)"; break;
  }

  // Show motivational quote
  quoteBox.textContent = quotes[roll];
});
