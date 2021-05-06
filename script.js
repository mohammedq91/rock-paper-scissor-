var rock = document.getElementById('rock').addEventListener('click',play);
var paper = document.getElementById('paper').addEventListener('click', play);
var scissor = document.getElementById('scissor').addEventListener('click', play);

function play(e){
  console.log('You clicked me!')
  e.preventDefault()
  computerPlay();
};

function computerPlay(){
  var randomNumber = Math.random();

  if (randomNumber <= 0.33){
    computerChoice = "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66){
    computerChoice = "paper";
  } else 
    computerChoice = "scissor"
};


