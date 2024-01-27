//classes needed: card, deck, player, game

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.value = this.getValue(rank);
    }
    //define the values of each face card and then parse in the integer cards 
    getValue(rank) {
        if(rank === 'Ace')return 14;
        if(rank === 'King')return 13;
        if(rank === 'Queen')return 12;
        if(rank === 'Jack')return 11;
        return parseInt(rank);
    }
}


class Deck {
    constructor() {
        this.cards = this.generateDeck();
    }
    generateDeck() {
        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const deck = [];
        for(let i = 0; i < suits.length; i++) { //could use suitIndex instead of i
            for(let j = 0; j < ranks.length; j++) { //could use rankIndex instead of j
                deck.push(new Card(suits[i], ranks[j]));
                }   
        } 
        return deck;
    }
    shuffle() {
        //shuffle to ensure random cards; otherwise they would all be in order from 2-14?
        for(let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal(players){
        //deal 26 cards to each player
        this.shuffle();
        for(let i = 0; i < this.cards.length; i++) {
            players[i % players.length].hand.push(this.cards[i]);
        }
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    playCard() {
        return this.hand.shift();
    }
}


let myDeck = new Deck();
console.log(myDeck);


class Game {
    constructor() {
    this.players = [new Player("Player 1"), new Player("Player 2")]
    this.deck = new Deck();
    this.deck.deal(this.players);
}
getPlayer1Deck(){
    return this.players[0].hand;
}
getPlayer2Deck(){
    return this.players[1].hand;
}
startGame() {
    while (this.players[0].hand.length > 0 && this.players[1].hand.length > 0) {
        this.playRound();
    }
    this.declareWinner();
}
playRound() {
    // Draw a card from the each deck and add it to each player's hand
    const card1 = this.players[0].playCard();
    const card2 = this.players[1].playCard();

    console.log(`${this.players[0].name} plays ${card1.rank} of ${card1.suit}`);
    console.log(`${this.players[1].name} plays ${card2.rank} of ${card2.suit}`);

    //compare the value of the cards in each hand/round
    if (card1.value > card2.value) {
        this.players[0].score++;
        console.log(`${this.players[0].name} wins this round.`);
    }   else if (card2.value > card1.value) {
        this.players[1].score++;
        console.log(`${this.players[1].name} wins this round.`);
    }   else {
        console.log('This round is a tie.');
    }
}

declareWinner() {
    if (this.players[0].score > this.players[1].score) {
        console.log(
            `${this.players[0].name} wins the game with a score of ${this.players[0].score}!`
        );
        }   else if (this.players[1].score > this.players[0].score) {
            console.log(
                `${this.players[1].name} wins the game with a score of ${this.players[1].score}!`
            );
    } else {
        console.log('This game is a tie!');
    }
}
}

//Start game
const warGame = new Game();
warGame.startGame();
