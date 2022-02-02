//constلا يمكن إعادة تعريف المتغيرات المعرفة بـ .

//constلا يمكن إعادة تعيين المتغيرات المعرفة بـ .

const cards = document.querySelectorAll('.memory-card');
const h2Clicks = document.getElementById("clicks");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let clicks = 0;

function flipCard() {// flipcad قمت بتفعيل خاصيه قلب الكرت 
  if (lockBoard) return;
  if (this === firstCard) return;
  clicks++;

  h2Clicks.innerHTML = clicks;
  this.classList.add('flip');
  const audio = new Audio("click.mp3");
  audio.play();

  if (!hasFlippedCard) { // hier is boolean om te kijken of het antwoord klopt is 
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();// hier أستطيع إيقاف الكرت او قلبه 
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}
/// هنا المقارنه والوقت الخاص بقلب الكرت 
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));