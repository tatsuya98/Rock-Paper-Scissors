
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const body = document.querySelector('body')
const play = document.querySelector('#play')
const rock = document.createElement('button')
const paper = document.createElement('button')
const scissors = document.createElement('button')

const rockImage = document.createElement('img')
const paperImage = document.createElement('img')
const scissorsImage = document.createElement('img')

rockImage.style.height = '100px'
rockImage.style.width = '100px'
paperImage.style.height = '100px'
paperImage.style.width = '100px'
scissorsImage.style.height = '100px'
scissorsImage.style.width = '100px'
const rockSrc = document.createAttribute('src')
rockSrc.value = 'https://thumbs.dreamstime.com/b/cartoon-rock-pebbles-digital-illustration-147192308.jpg'
rockImage.setAttributeNode(rockSrc)
const paperSrc = document.createAttribute('src')
paperSrc.value = 'https://i.pinimg.com/736x/4f/ae/cf/4faecfda18947d8e03ef0d188e4de42d.jpg'
paperImage.setAttributeNode(paperSrc)
const scissorsSrc = document.createAttribute('src')
scissorsSrc.value = 'https://static.vecteezy.com/system/resources/previews/004/557/738/original/black-scissors-cartoon-object-vector.jpg'
scissorsImage.setAttributeNode(scissorsSrc)


rock.setAttribute('value','rock')
paper.setAttribute('value','paper')
scissors.setAttribute('value','scissors')

rock.setAttribute('class','choice')
paper.setAttribute('class','choice')
scissors.setAttribute('class','choice')


rock.appendChild(rockImage)
paper.appendChild(paperImage)
scissors.appendChild(scissorsImage)



const getComputerChoice = ()=>{
    const randomNummber = Math.floor(Math.random()*3);
    const choiceArray = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choiceArray[randomNummber];
    return computerChoice
}

let roundsPlayed 
let userWinCount 
let computerWinCount 
let userChoice
let numberOfRounds

const setupGame = () =>{
    
    roundsPlayed =1;
    userWinCount = 0;
    computerWinCount = 0;
    body.removeChild(play)
    h1.textContent = `user : ${userWinCount} : computer: ${computerWinCount}`
    body.append(rock,paper,scissors)
    numberOfRounds = Number.parseInt(prompt('enter the number of rounds you wish to play',''))
    const choices = document.querySelectorAll('.choice')
    choices.forEach(choice=>{
        choice.addEventListener('click',playGame)
    })
}

const playGame = (e)=>{
    const choices = document.querySelectorAll('.choice')
    userChoice = e.currentTarget.value
    const computerChoice = getComputerChoice();
    if(userChoice == 'rock'.toLowerCase() && computerChoice == 'rock'.toLowerCase() ||
        userChoice == 'paper'.toLowerCase() && computerChoice == 'paper'.toLowerCase() ||
        userChoice == 'scissors'.toLowerCase() && computerChoice == 'scissors'.toLowerCase() ){
            roundsPlayed++
            h1.textContent = `user : ${userWinCount} : computer: ${computerWinCount}`
        }else if(userChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper'.toLowerCase() ||
        userChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors'.toLowerCase() ||
        userChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock'.toLowerCase()){
            computerWinCount++
            roundsPlayed++
            h1.textContent = `user : ${userWinCount} : computer: ${computerWinCount}`
        }else{
            userWinCount++
            roundsPlayed++
            h1.textContent = `user : ${userWinCount} : computer: ${computerWinCount}`
        }
        if(roundsPlayed > numberOfRounds){
            if(userWinCount > computerWinCount){
                h1.textContent = `You beat the computer with a score of ${userWinCount} to ${computerWinCount} `
            }else if(userWinCount == computerWinCount){
                h1.textContent = `You tied against the computer with a score of ${userWinCount} to ${computerWinCount}`
            }else{
                h1.textContent = `The computer wins with a score of ${computerWinCount} to ${userWinCount}`
            }
            body.removeChild(rock)
            body.removeChild(paper)
            body.removeChild(scissors)
            choices.forEach(choice =>{
                choice.removeEventListener('click',playGame)
            })
            play.textContent = 'play again'
            body.appendChild(play)
        }
        
    }
play.addEventListener('click',setupGame)



    








