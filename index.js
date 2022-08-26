const getComputerChoice = ()=>{
    const randomNummber = Math.floor(Math.random()*3);
    const choiceArray = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choiceArray[randomNummber];
    return computerChoice
}

const getUserChoice = ()=>{
    const userChoice = prompt('choose from the three options: rock, paper, scissors','');
    return userChoice
}
const playGame = ()=>{
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const win = `the computer's choice was: ${computerChoice}. you win`
    const lose = `the computer's choice was: ${computerChoice}. you lose`
    const tie = `the computer's choice was: ${computerChoice}. you drew`
    let result = ''
    if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
        result = tie;
        console.log(result)
    }else if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper'.toLowerCase()){
        result = lose
        console.log(result)
    }else if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors'.toLowerCase()){
        result = win;
        console.log(result);
    }
}

playGame();






