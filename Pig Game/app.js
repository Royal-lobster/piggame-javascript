/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, currentPlayer, currentScore, gamePlaying;

init()

document.querySelector('.btn-roll').addEventListener('click' ,function() {

    if(gamePlaying){

    //random number genrate
    var dice = Math.floor(Math.random()*6+1);

    //update dice with random number
    document.querySelector('.dice').style.display = 'block';
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';

    //add the dice value to the current score untill 1 occurs
    if(dice>1){

        //current score add
        currentScore += dice;

        //update current score to ui
        document.querySelector('#current-' + currentPlayer).textContent = currentScore;
    }
    else{
        nextPlayer();
    }

}
});

document.querySelector('.btn-hold').addEventListener('click',function() {

    if(gamePlaying){

    //update score of current player
    score[currentPlayer] += currentScore;

    //update score to ui
    document.querySelector('#score-' + currentPlayer).textContent = score[currentPlayer];

    if(score[currentPlayer] >= 100){

        // Check if player won the game
        document.querySelector('#name-' + currentPlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else{

        //jump to next player
        nextPlayer();
    }
}

});

//new game button
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    //set counters to zero
   score = [0,0];
   currentScore = 0;
   currentPlayer = 0;

   //update user interface
   document.querySelector('#score-0').textContent = 0;
   document.querySelector('#score-1').textContent = 0;
   document.querySelector('#current-0').textContent = 0;
   document.querySelector('#current-1').textContent = 0;

    //remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //remove active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //add active class to player 1
    document.querySelector('.player-0-panel').classList.add('active');

   //remove dice
   document.querySelector('.dice').style.display = 'none';

   //game playing
   gamePlaying = true;
}

function nextPlayer(){

    //toggles next player
    currentPlayer ===0 ? currentPlayer =1 : currentPlayer =0;
    currentScore = 0;

    //make currentplayer score 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //make nextplayer selected
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //removes dice 

    document.querySelector('.dice').style.display = 'none';

}