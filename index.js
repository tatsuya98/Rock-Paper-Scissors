const getComputerChoice = ()=>{
    const randomNummber = Math.floor(Math.random()*3);
    const choiceArray = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choiceArray[randomNummber];
    return computerChoice
}

const getUserChoice = ()=>{
    let userChoice = prompt('choose from the three options: rock, paper, scissors','');
    if(userChoice.toLowerCase() != 'rock'.toLowerCase() || userChoice.toLowerCase() != 'paper'.toLowerCase() ||userChoice.toLowerCase() != 'scissors'.toLowerCase()){
        userChoice = prompt('you have entered a wrong choice, please choose from rock, paper or scissors', '')
    }
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
    if(userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
        result = win;
        console.log(result)
    }else if(userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'paper'.toLowerCase()){
        result = tie
        console.log(result)
    }else if(userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors'.toLowerCase()){
        result = lose;
        console.log(result);
    }
    if(userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
        result = lose;
        console.log(result)
    }else if(userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper'.toLowerCase()){
        result = win
        console.log(result)
    }else if(userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'scissors'.toLowerCase()){
        result = tie;
        console.log(result);
    }
}
playGame()

    








