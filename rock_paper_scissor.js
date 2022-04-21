const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Invalid input');
  }
} 
function getComputerChoice(){
  randomNumber = (Math.floor(Math.random() * 3));
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'error';
      break;
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === 'bomb'){
    return 'user won';
  }
  if(userChoice === computerChoice){
    return 'Game was tie.';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'computer won';
    }
    else {
      return 'user won';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'computer won';
    }
    else {
      return 'user won';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'computer won';
    }
    else {
      return 'user won';
    }
  }
}

function playGame(){
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();



 
