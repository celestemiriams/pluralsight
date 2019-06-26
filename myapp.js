/*let firstName = 'Miriam',
    lastName = 'Nanteza';
console.log('Hello '+ firstName + ' ' + lastName);
*/

//card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven", "six",
    "Five", "Four", "Three", "Two"
];
//Dom variables
let paragraph = document.getElementById('paragraph'),
    newgamebutton = document.getElementById('new-game-button'),
    hitbutton = document.getElementById('hit-button'),
    staybutton = document.getElementById('stay-button');

//Game variables
let gameStarted=false,
    gameOver=false,
    playerWon=false,
    dealerCards=[],
    playerCards=[],
    dealerScore=0,
    playerScore=0,
    deck=[];

hitbutton.style.display='none';
staybutton.style.display='none';
showStatus();

newgamebutton.addEventListener('click', function(){
    gameStarted=true;
    gameOver=false;
    playerWon=false;

    deck= createDeck();
    shuffleDeck(deck);
    dealerCards=[getNextCard(),getNextCard()];
    playerCards=[getNextCard(), getNextCard()];

    newgamebutton.style.display='none';
    hitbutton.style.display='inline';
    staybutton.style.display='inline';
    showStatus();
})

hitbutton.addEventListener('click', function(){
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
})

stayButton.addEventListener('click', function(){
    gameOver = true;
    checkForEndOfGame();
    showStatus();

})

function createDeck(){
    let deck = [];
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
            let card = {
                suit:suits[suitIdx],
                value:values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck
}

function shuffleDeck(deck){
    for(let i = 0; i < deck.length; i++){
        let swapIdx = Math.trunc(Math.random()* deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card){
    return(card.value +' of '+ card.suit);
}

function getNextCard(){
    return deck.shift();
}

function getCardNumberValue(card){
    switch(card.value){
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
        

    }
}

function getScore(cardArray){
    let score = 0;
    let hasAce = false;

    for(let i = 0; i < cardArray.length; i++){
        let card = cardArray[i];
        score += getCardNumberValue(card);
        if(card.value === 'Ace'){
            hasAce = true;
        }
    }
    if(hasAce && score + 10 <= 21){
        return score + 10;
    }
    return score;
}

function updateScores(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame(){
    updateScores();

    while(dealerScore < playerScore
          && playerScore <= 21
          && dealerScore <= 21){
        //let dealer take cards
       dealerCards.push(getNextCard());
       updateScores();
        }

    if(playerScore > 21){
        playerWon = false;
        gameOver = true;
    }
    else if(dealerScore > 21){
        playerWon = true;
        gameOver = true;
    }
    else if(gameOver){
        if(playerScore > dealerScore){
            playerWon = true;
        }
        else{
            playerWon = false;
        }
    }
}

function showStatus(){
    if(!gameStarted){
        paragraph.innerText="Welcome to Blackjack"
    }
    
    let dealerCardString = '';
    for(let i = 0; i < dealerCards.length; i++){
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++){
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    paragraph.innerText = 
    'dealer has: \n' + 
    dealerCardString + 
    '(score: ' + dealerScore + ') \n\n' +

    'player has: \n' +
    playerCardString +
    '(score: ' + playerScore + ') \n\n'
    ;

    if(gameOver){
        if(playerWon){
            paragraph.innerText += 'YOU WIN';
        }
        else{
            paragraph.innerText += 'DEALER WINS';
        }

        newgamebutton.style.display = 'inline';
        hitButton.style.display = 'none';
        hitbutton.style.display = 'none';
    }
}

// let deck = createDeck();

// for(let i = 0; i < deck.length; i++){
//     console.log(deck[i]);
// }

// let playercards = [getNextCard(), getNextCard()];

// console.log("Welcome to Blackjack!");
// console.log("You are dealt: ")
// console.log(" "+ getCardString(playercards[0]));
// console.log(" "+ getCardString(playercards[1]));

//changing the inner html text
// let paragraph = document.getElementById('paragraph');
// paragraph.innerText="Hey there!!";
// let mybutton = document.getElementById("ok-button");
// mybutton.addEventListener('click', function(){
//     paragraph.innerText="Button clicked!!";
// })

/*
let values =[];
values.push(33);
values.push(10);
values.push(2);
values.shift();
let result = values.pop();
values.push(15);
values.push(20);
values.splice(15,1)
console.log(values);
console.log(result)
*/

//Learning about the switch statement
let state = "TX"

switch(state){
    case "NY":
        console.log("Welcome to New York");
        break;
    case "TX":
        console.log("Welcome to texas");
        break;
    default:
        console.log("I do not know that state is!!");

}