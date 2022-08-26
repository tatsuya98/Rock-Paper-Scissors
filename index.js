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







