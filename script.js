const rock = document.getElementById('rock').addEventListener('click', play)
const paper = document.getElementById('paper').addEventListener('click', play)
const scissors = document.getElementById('scissors').addEventListener('click', play)

const userDisplay = document.getElementById('user')
const computerDisplay = document.getElementById('computer')
const outcome = document.getElementById('outcome')

var user;
var computer;

function play(e){
  const rock = e.target.id;
  userDisplay.textContent = "You have chosen: " + rock

  const paper = e.target.id 
  userDisplay.textContent = "You have chosen: " + paper

  const scissors = e.target.id
  userDisplay.textContent = "You have chosen: " + scissors

  result(e.target.id);
}

function computerPlay(){
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random()*choices.length)]
  };
  

function result(user){

  computer = computerPlay()
  computerDisplay.textContent = `Computer chooses: ${computer}`
  
  
  if (user === "rock"){
    if (computer === "rock"){
      outcome.textContent = "You have a tie!"

    } else if (computer === "paper"){
      outcome.textContent = "You lost!"

    } else if (computer === "scissors"){
      outcome.textContent = "You won!"
    }
  }

  else if (user === "paper"){
    if (computer === "rock"){
      outcome.textContent = "You won!"

    } else if (computer === "paper"){
      outcome.textContent = "You have a tie!"

    } else if (computer === "scissors"){
      outcome.textContent = "You lost!"
    }
  }

  else if (user === "scissors"){
    if (computer === "rock"){
      outcome.textContent = "You lost!"

    } else if (computer === "paper"){
      outcome.textContent = "You won!"

    } else
      outcome.textContent = "You have a tie!"
  }
}
