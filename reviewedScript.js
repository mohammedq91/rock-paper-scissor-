const gameBtns = document.querySelectorAll("button");
for (gameBtn of gameBtns){
  gameBtn.addEventListener("click", (e) => userPlay(e));
}

const outcome = document.getElementById('outcome')


fucntion userPlay(e){
  const user = e.target.id
  const userDisplay = document.getElementById('user')
  userDisplay.textContent = `You have chosen: ${user}`;

  result(user);
}

function computerPlay(){
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)]
}


function result(user){
  const computer = computerPlay();
  const computerDisplay = document.getElementById('computer')
  compupterDisplay.textContent = `Computer chooses: ${computer}`

  switch (user) {
    case "rock":
      if (computer ===)
      
      break;
    case "paper":
      
      break;
    case "rock":
      
      break;
  
    default:
      break;
  }



}