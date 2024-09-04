let inputNumEl=document.getElementById('input-number')

let submitBtn=document.getElementById('submit-guess-btn')

let previousGuessesEl=document.getElementById('prev-guesses')

let guessesRemainingEl=document.getElementById('guesses-remaining')

let attemptsEl=document.getElementById('attempts')

let attemptsCount=0

let guesses=10

let target= Math.floor(Math.random()*100)+1


//whenever user clicks on New Game button, the entire game is reset
//all values are re-initialized and a new target is generated
function newGame()
{

    attemptsCount=0

    guesses=10

    target= Math.floor(Math.random()*100)+1

    inputNumEl.classList.remove('disabled')

    submitBtn.classList.remove('disabled')

    inputNumEl.value=""

    attemptsEl.innerText=""


    //for cases when a new game is started after a gameover
    previousGuessesEl.classList.remove('removed')
    guessesRemainingEl.classList.remove('removed')

    
    previousGuessesEl.innerText="Previous Guesses: "

    guessesRemainingEl.innerText="Guesses Remaining: 10"
   
}


function submitGuess()
{
 
    let num=parseInt(inputNumEl.value)


    //checking for NaN values
    //checking if num is between 1 and 100 or not
    //if no, then input wont be accepted and no further execution of code, exit using return
    if(isNaN(num) || num<1 || num>100)
        return


    attemptsCount+=1

    inputNumEl.value=""

    previousGuessesEl.innerText+=" "+num+" "

    if(num==target)
    {
        youHaveWon()
        return

    }
    else if(num<target)
    {
        attemptsEl.innerText="My number is higher than "+num
    }
    else{
        attemptsEl.innerText="My number is lesser than "+num
    }


    guesses-=1
    guessesRemainingEl.innerText="Guesses Remaining: "+guesses

    if(guesses===0)
    {
        gameOver()
        return
    }
}



function youHaveWon()
{
    if(attemptsCount>1)
        attemptsEl.innerText="You guessed my number in "+attemptsCount+" attempts!!!"
    else
        attemptsEl.innerText="You guessed my number in "+attemptsCount+" attempt!!!"
    
    previousGuessesEl.innerText=""
    guessesRemainingEl.innerText=""

    inputNumEl.classList.add('disabled')
    submitBtn.classList.add('disabled')

}



function gameOver(){


    attemptsEl.innerHTML='<p>Game Over!!! <br> You could not guess the number.</p>'
    
    inputNumEl.classList.add('disabled')
    submitBtn.classList.add('disabled')

    previousGuessesEl.classList.add('removed')
    guessesRemainingEl.classList.add('removed')

}
