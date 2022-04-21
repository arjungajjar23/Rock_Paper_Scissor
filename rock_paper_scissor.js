// define a function that takes userInput and also verifies it.
const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase(); // to make sure inputs are in lowercase.
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Invalid input');
  }
} 

//define a function that generates random numbers between 0 and 2 and based on a number, gives aqn output.
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

//define a function to determine the winner between user and computer. remember, Rock destroys scissors, paper covers rock and scissor cuts paper. 

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

//now, since everything is in order, let's play game by declaring a last function that accepts userchoice and computerchoicer and declares winner.
function playGame(){
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame(); //calling the function. Play game!!!



 
