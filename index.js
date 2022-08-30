const getComputerChoice = ()=>{
    const randomNummber = Math.floor(Math.random()*3);
    const choiceArray = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choiceArray[randomNummber];
    return computerChoice
}

const getUserChoice = ()=>{
    let userChoice = prompt('choose from the three options: rock, paper, scissors','');
    if(userChoice == 'rock'.toLowerCase() || userChoice == 'paper'.toLowerCase() || userChoice == 'scissors'.toLowerCase()){
        return userChoice
    }
     userChoice = prompt('you have entered a wrong choice. choose again from rock paper or scissors','')
     if(userChoice == 'rock'.toLowerCase() || userChoice == 'paper'.toLowerCase() || userChoice == 'scissors'.toLowerCase()){
        return userChoice
     }
}
const playGame = ()=>{
    let userWinCount = 0;
    let computerWinCount = 0;
    const numberOfRounds = Number.parseInt(prompt('enter the number of rounds you wish to play',''))

    for(let i =0; i < numberOfRounds; i++){
        alert(`round ${i+1}`)
        let userChoice = getUserChoice();
        while(!userChoice){
            userChoice=getUserChoice()
        }
        const computerChoice = getComputerChoice();
        const win = `the computer's choice was: ${computerChoice}. you win the round`
        const lose = `the computer's choice was: ${computerChoice}. you lose the round`
        const tie = `the computer's choice was: ${computerChoice}. you drew the round`
        if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
            console.log(tie)
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }else if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper'.toLowerCase()){
            result = lose
            computerWinCount +=1
            console.log(lose)
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }else if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors'.toLowerCase()){
            result = win;
            userWinCount +=1
            console.log(win);
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }
        if(userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
            userWinCount+=1
            console.log(win)
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }else if(userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'paper'.toLowerCase()){
            console.log(tie)
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }else if(userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors'.toLowerCase()){
            computerWinCount+=1
            console.log(lose);
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }
        if(userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
            computerWinCount+=1
            console.log(lose)
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }else if(userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper'.toLowerCase()){
            userWinCount+=1
            console.log(win)
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`)
        }else if(userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'scissors'.toLowerCase()){
            console.log(tie);
            console.log(`the current score is user:${userWinCount} : computer: ${computerWinCount}`);
        }
    }
    if(userWinCount > computerWinCount){
        console.log(`You beat the computer with a score of ${userWinCount} to ${computerWinCount} `)
    }else if(userWinCount == computerWinCount){
        console.log(`You tied against the computer with a score of ${userWinCount} to ${computerWinCount}`)
    }else{
        console.log(`The computer wins with a score of ${computerWinCount} to ${userWinCount}`)
    }
}
playGame()

    








