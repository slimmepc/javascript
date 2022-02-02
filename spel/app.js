const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button"); // هنا قمنا بتشغيل خاصيه لزر let play
      const introScreen = document.querySelector(".intro"); // من خلال هذا الكود قمنا بتشغيل واجهة اللعبه
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => { // الداله لتي تقوم بتشغيل اللعبه 
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => { // من هنا بدأت في خاصيه إستدعاء الأوبشن الموجوده في html 
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"]; //  من هنا قمت بعمل سلسله ولتي قمنا باخدها من ملف html
  
      options.forEach(option => { //   rock , paper , scissorsإستخدمنا هذه الخاصيه لتشغيل خاصية 
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3); // من هنا سنقوم بتوليد رقم عشوائي  بين 0 إلى 10  لذلك
          const computerChoice = computerOptions[computerNumber]; // match floor بهذه الخاصيه سيقوم بأخد العدد واحد واحد بدون نقاط
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice); //تم الاختيار للمقارنه الخاصه بالنتيجه من سيفو
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease"; // تحريك ليد  ccs
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock  من هنا بدأت خيارت إستخدام من سيفوز لنفترض جدلاً أذا كان لكمبيوتر كتب مقص فيفترض اللاعب الأخر يضع ورقه
      if (playerChoice === "rock") { 
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();