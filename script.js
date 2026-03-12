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
  let rotation;
  switch(roll) {
    case 1: rotation = "rotateX(0deg) rotateY(0deg)"; break;
    case 2: rotation = "rotateY(180deg)"; break;
    case 3: rotation = "rotateY(-90deg)"; break;
    case 4: rotation = "rotateY(90deg)"; break;
    case 5: rotation = "rotateX(-90deg)"; break;
    case 6: rotation = "rotateX(90deg)"; break;
  }
  dice.style.transform = rotation;
  quoteBox.textContent = quotes[roll];
});
