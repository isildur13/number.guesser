// Game values
let min = 1, max = 10, winnimgNumm = getwinningNum(min,max), guessesLeft = 3;

// UI element
const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessButton = document.querySelector('#guess-button'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Assign UI Min and Max

minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listener

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})


// Listen for Guess

guessButton.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);

    // Validate input 
    if(isNaN(guess) || guess < min || guess > max){

        setMessage(`Please Enter a Number between ${min} and ${max}`,'red');

    }else{
 
    if(guess === winnimgNumm){
        // Game OVer WOn
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        // Set Message to tWin
        setMessage(`${winnimgNumm} is Correct, YOU WIN!!!`,'green');
        guessButton.value = 'Play Again';
        guessButton.className += 'play-again'

    }else{
        
        guessesLeft -= 1;
        
        if(guessesLeft === 0){
            // Game OVer
            setMessage(`Game Over. YOU LOST, Correct number was ${winnimgNumm}`,`red`)
            guessButton.value = 'Play Again';
            guessButton.className += 'play-again'



        }else{
            // guessInput.disabled = true;
            guessInput.style.borderColor = 'red';
            // Set Message to tWin
            setMessage(`${guess} is wrong, You have ${guessesLeft} guesses left.`,'red');
            // Game continues answer wrong..
        }
        

    }
    }




    

})


function getwinningNum(min,max){

return Math.floor(Math.random()*(max-min+1)+min)

}

// Set Message
function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
}