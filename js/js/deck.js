class Deck {
  constructor(deck) {
    this.deck = [...cards, ...cards];
    this.shuffleDeck(deck);
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }
  drawCard() {
    return this.deck.pop();
  }
}


