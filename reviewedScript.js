const gameBtns = document.querySelectorAll("button");
for (gameBtn of gameBtns){
  gameBtn.addEventListener("click", (e) => userPlay(e));
}

function userPlay(e){
  const user = e.target.id;

  const userDisplay = document.getElementById('user');
  userDisplay.textContent = `You have chosen: ${user}`;

  result(user);
};

function computerPlay(){
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function result(user){
  const computer = computerPlay();

  const computerDisplay = document.getElementById('computer');
  computerDisplay.textContent = `Computer chooses: ${computer}`;

  if (user === computer) displayResult('tie');

  switch (user) {
    case "rock":
      if (computer === 'paper') displayResult("lost");
      if (computer === "scissors") displayResult("won");
      break;
    case "paper":
      if (computer === "rock") displayResult("won");
      if (computer === "scissors") displayResult("lost");
      break;
    case "scissors":
      if (computer === "paper") displayResult("won");
      if (computer === "rock") displayResult("lost");
      break;
  }

  function displayResult(result){
    const outcome = document.getElementById('outcome');

    if (result === "won" || "lost") outcome.textContent = `You ${result}!`;
    if (result === "tie") outcome.textContent = `You have a ${result};`;
  }
}

