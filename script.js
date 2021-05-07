const rock = document.getElementById('rock').addEventListener('click', play)
const paper = document.getElementById('paper').addEventListener('click', play)
const scissors = document.getElementById('scissors').addEventListener('click', play)

const userChoiceDisplay = document.getElementById('user-play-display')
const computerChoiceDisplay = document.getElementById('computer-play-display')

const user = document.getElementById('user')
const computer = document.getElementById('computer')
const outcome = document.getElementById('outcome')


function play(e){
  const rock = e.target.id;
  userChoiceDisplay.textContent = "You have chosen: " + rock

  const paper = e.target.id 
  userChoiceDisplay.textContent = "You have chosen: " + paper

  const scissors = e.target.id
  userChoiceDisplay.textContent = "You have chosen: " + scissors

  computerPlay();
}

function computerPlay(){
  var randomNumber = Math.random();

  if (randomNumber <= 0.33){
    computerChoiceDisplay.textContent = "Computer choses rock";

  } else if (randomNumber > 0.33 && randomNumber <= 0.66){
    computerChoiceDisplay.textContent = "Computer choses paper";

  } else 
    computerChoiceDisplay.textContent = "Computer choses scissors";
  };
  



