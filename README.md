class Cards
- Suits (Spades, Diamonds, Hearts, Clubs)
- Values (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King)
    Do I need to assign values to the face cards?

class Deck
- Cards

class Player
- playerOne (name)
- playerTwo (name)

Functions/methods?

- deal(deck, handSize) - deals a specified number of cards from deck to hand?
- each player plays a card 
- add a point for the player with the higher card
- play until all cards are played
- return the winner or tie if no one wins

--------------------- add back to js tab
class Player {
    constructor(playerNameValue) {
        this.playerName = playerNameValue;
        //need: player hand, points - 0 (+1), player name
    }
}

class Game //start method, perform order of operations (deck class, deal, compare, points)

//how to deal 26 cards to two players

----------------------
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        //this.value = value; //is this needed since ranks are defined below?
    }
}

/* class Deck {
    constructor(suits, values) {
        this.suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
        this.ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        //is this needed? this.values = [2 - 14]
    } //method for dealing cards & method for shuffling
    //outer loop for length of suits; inner loop  - run 13x = 52 & pass in suits and values
} */

//Option?
class Deck {
    constructor() {
        this.cards = [];
        let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
        let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for(let suitIndex = 0; suitIndex < suits.length; suitIndex++) { //suitIndex is used instead of i
            for( let rankIndex = 0; rankIndex < ranks.length; rankIndex++) { //rankIndex is used instead of j
                this.cards.push(new Card(suits[suitIndex], ranks[rankIndex]));
        }
    }
}

deal(playerOne, playerTwo) {

}
}

let myDeck = new Deck();

console.log(myDeck);

deal(players) {
    this.shuffle();
    for (let i = 0; i < this.cards.length; i++) {
        players[i % players.length].hand.push(this.cards[i]);
    }
}


class Player {
    constructor(name) {
        this.name = name;
        this.hand = 0;
        this.score = 0;
    }
} 

class Game {
    constructor() {
    this.players = [new Player("Player 1"), new Player("Player 2")]
    this.deck = new Deck();
    this.deck.deal(this.players);
}
getPlayer1deck(){
    return this.players[0].hand;
}
getPlayer2deck(){
    return this.players[1].hand;
}
startGame() {
    while (this.players[0].hand.length > 0 && this.players[1].hand.length > 0) {
        this.playRound();
    }
    this.declareWinner();
}

// class Game //start method, perform order of operations (deck class, deal, compare, points)

//how to deal 26 cards to two players

myDeck.deal(deal(playerOne: any, playerTwo: any):void
//call methods for playerOne and playerTwo to play and compare cards
