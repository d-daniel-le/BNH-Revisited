
// Welcome Prompt
let username;
let userCharacter;

// Computer Choice
const compCharacter = ['Bear', 'Ninja','Hunter'];

// Initialize Random
let compRandChoice;

let userWinCount = 0;
let compWinCount = 0;


document.getElementById('bear').addEventListener("click", function click() {
    document.getElementById('current-results').hidden = false;
  })
  
document.getElementById('ninja').addEventListener("click", function click() {
    document.getElementById('current-results').hidden = false;
  })

document.getElementById('hunter').addEventListener("click", function click() {
    document.getElementById('current-results').hidden = false;
  })

  function bear(){
    compRandChoice = Math.floor(Math.random() * compCharacter.length);
    
    if (compCharacter[compRandChoice].toLowerCase() === 'bear'){
      document.getElementById('user-results').innerHTML = 'You chose Bear';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'You tie';
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }

    else if (compCharacter[compRandChoice].toLowerCase() === 'ninja'){
      document.getElementById('user-results').innerHTML = 'You chose Bear';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'The computer wins!';
      compWinCount += 1
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }
    else{
      document.getElementById('user-results').innerHTML = 'You chose Bear';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'You wins!!';
      userWinCount += 1
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }

    document.getElementById('play-again').addEventListener("click", function click() {
        document.getElementById('current-results').hidden = true;
      })
  }

  function ninja(){
    compRandChoice = Math.floor(Math.random() * compCharacter.length);
    
    if (compCharacter[compRandChoice].toLowerCase() === 'ninja'){
      document.getElementById('user-results').innerHTML = 'You chose Ninja';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'You tie';
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }

    else if (compCharacter[compRandChoice].toLowerCase() === 'bear'){
      document.getElementById('user-results').innerHTML = 'You chose Ninja';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'You win!!';
      userWinCount += 1
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }
    else{
      document.getElementById('user-results').innerHTML = 'You chose Ninja';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'The Computer wins!!';
      compWinCount += 1
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }

    document.getElementById('play-again').addEventListener("click", function click() {
        document.getElementById('current-results').hidden = true;
      })
  }

  function hunter(){
    compRandChoice = Math.floor(Math.random() * compCharacter.length);
    
    if (compCharacter[compRandChoice].toLowerCase() === 'hunter'){
      document.getElementById('user-results').innerHTML = 'You chose hunter';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'You tie';
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }

    else if (compCharacter[compRandChoice].toLowerCase() === 'ninja'){
      document.getElementById('user-results').innerHTML = 'You chose Hunter';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'You win!!';
      userWinCount += 1
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }
    else{
      document.getElementById('user-results').innerHTML = 'You chose Hunter';
      document.getElementById('computer-results').innerHTML = `The Computer chose ${compCharacter[compRandChoice]}`;
      document.getElementById('results').innerHTML = 'The Computer wins!!';
      compWinCount += 1
      document.getElementById('user-win-counts').innerHTML = `You Wins: ${userWinCount}`
      document.getElementById('comp-win-counts').innerHTML = `The computer Wins: ${compWinCount}`
    }

    document.getElementById('play-again').addEventListener("click", function click() {
        document.getElementById('current-results').hidden = true;
      })

  }