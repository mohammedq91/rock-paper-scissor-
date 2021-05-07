const rock = document.getElementById('Rock').addEventListener('click', play)
const paper = document.getElementById('Paper').addEventListener('click', play)
const scissors = document.getElementById('Scissors').addEventListener('click', play)

const userDisplay = document.getElementById('user')
const computerDisplay = document.getElementById('computer')
const outcome = document.getElementById('outcome')

var user;
let computer;


function play(e){
  const rock = e.target.id;
  userDisplay.textContent = "You have chosen: " + rock

  const paper = e.target.id 
  userDisplay.textContent = "You have chosen: " + paper

  const scissors = e.target.id
  userDisplay.textContent = "You have chosen: " + scissors
  computerPlay();
  result();
}

function computerPlay(){
  var randomNumber = Math.random();

  if (randomNumber <= 0.33){
    computerDisplay.textContent = "Computer choses: Rock";

  } else if (randomNumber > 0.33 && randomNumber <= 0.66){
    computerDisplay.textContent = "Computer choses: Paper";

  } else 
    computerDisplay.textContent = "Computer choses: Scissors";
  };
  

function result(){
  if (user === "rock"){
    if (computer === "rock"){
      outcome.textContent = "You have a tie!"
      console.log(outcome.textContent)

    } else if (computer === "paper"){
      outcome.textContent = "You have lost!"
      console.log(outcome.textContent)

    } else if (computer === "scissors"){
      outcome.textContent = "You have won!"
      console.log(outcome.textContent)
    }
  }

  else if (user === "paper"){
    if (computer === "rock"){
      outcome.textContent = "You have won!"

    } else if (computer === "paper"){
      out.outcome.textContent = "You have a tie!"

    } else if (computer === "scissors"){
      outcome.textContent = "You have lost!"
    }
  }

  else if (user === "scissors"){
    if (computer === "rock"){
      outcome.textContent = "You have lost!"

    } else if (computer === "paper"){
      outcome.textContent = "you have won!"

    } else
      outcome.textContent = "you have a tie!"
  }
}
