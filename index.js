const getComputerChoice = ()=>{
    const randomNummber = Math.floor(Math.random()*3);
    const choiceArray = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choiceArray[randomNummber];
    return computerChoice
}







