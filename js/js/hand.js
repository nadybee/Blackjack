class Hand {
  constructor() {
    // this.deck = new Deck(deck);
    this.dealerHand = [];
    this.playerHand = [];
  }

  /** getter and setter to get players hand totals */
  get playersTotal() {
    return this._playersTotal;
  }

  set playersTotal(value) {
    this._playersTotal = value;
  }

  /**getter and setter for dealers hand total */
  get dealersTotal() {
    return this._dealersTotal;
  }

  set dealersTotal(value) {
    this._dealersTotal = value;
  }

  /** get and set wins total */

  get wins() {
    return this._wins;
  }

  set wins(value) {
    this._wins = value;
  }

  get deck() {
    return this._deck;
  }

  set deck(value) {
    this._deck = value;
  }

  /** starts the game */

  startGame() {
    start.classList.add('hidden');
    chips.classList.remove('hidden');
    this.wins = 0;
    this.losses = 0;
    wins.innerHTML = this.wins;
    this.deck = new Deck(deck);
  }

  /** deals starting hand */
  firstBet() {
    this.reset();
    /* *deal dealers first card */

    //  this.dealerHand.push(testDraw1)
    this.dealerHand.push(this.deck.drawCard());
    dCardOneSpot.appendChild(dealerCardOne);
    dealerCardOne.classList.add('hidden');
    dealerCardOne.src = game.dealerHand[0].img;
    cardBack.classList.remove('hidden');
    cardBack.classList.add('show');

    /*  deal players first card */
    // this.playerHand.push(testDraw1)
    this.playerHand.push(this.deck.drawCard());
    pcardOneSpot.appendChild(playerCardOne);
    playerCardOne.src = this.playerHand[0].img;

    /*deal dealers second card*/
    // this.dealerHand.push(testDraw1);
    this.dealerHand.push(this.deck.drawCard());
    dcardTwoSpot.appendChild(dealerCardTwo);
    dealerCardTwo.src = this.dealerHand[1].img;

    /* deals players second card*/
    // this.playerHand.push(testDraw1)
    this.playerHand.push(testDraw2);
    // this.playerHand.push(testDraw3);
    // this.playerHand.push (this.deck.drawCard ());
    pcardTwoSpot.appendChild(playerCardTwo);
    playerCardTwo.src = this.playerHand[1].img;

    /** shows the players hand total, hides dealers total  */
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ??`;
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;

    /** shows action (ie hit) buttons */

    actionButtons.classList.remove('hidden');
    /**disables betting button */

    ten.disabled = true;
    ten.classList.add('disabled');
    /**checks if player has blackJack */
    this.checkForPlayersBlackJack();
    this.checkForDealersBlackJack();

    this.playersTotal = this.calculateHandTotal(this.playerHand);
    this.dealersTotal = this.calculateHandTotal(this.dealerHand);
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;
    /**updates wins and losses*/
    wins.innerHTML = `${this.wins}`;
    this.showDoubleDown();
  }

  calculateHandTotal(hand) {
    let aceArr = [];
    let subtotal = 0;
    let total = 0;

    for (let i = 0; i < hand.length; i++) {
      if (hand[i].ace) {
        aceArr.push(hand[i]);
      }
    }
    for (let j = 0; j < hand.length; j++) {
      subtotal += hand[j].value;
    }

    for (let k = 0; k < hand.length; k++) {
      total += hand[k].value;
    }
    if (aceArr.length > 0 && subtotal <= 11) {
      total += 10;
    }
    return total;
  }

  /** checks if player has 21 to end hand
   * I want to do a timeout here!
   */
  checkForPlayersBlackJack() {
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    if (this.playersTotal === 21) {
      this.wins += 15;
      actionButtons.classList.add('hidden');
      blackJack.classList.remove('hidden');
      ten.disabled = false;
      ten.classList.remove('disabled');
      cardBack.classList.add('hidden');
      cardBack.classList.remove('show');
      dealerCardOne.classList.remove('hidden');
      dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`;
    }
  }

  checkForDealersBlackJack() {
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    this.dealersTotal = this.calculateHandTotal(this.dealerHand);
    if (this.dealersTotal === 21 && this.playersTotal !== 21) {
      this.wins -= 10;
      this.activateBetButton();
      this.showDealersCard();
      dealerBlackjack.classList.remove('hidden');
    }
  }

  activateBetButton() {
    actionButtons.classList.add('hidden');
    ten.disabled = false;
    ten.classList.remove('disabled');
  }

  showDealersCard() {
    cardBack.classList.add('hidden');
    cardBack.classList.remove('show');
    dealerCardOne.classList.remove('hidden');
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`;
  }

  /** players hits */
  hitOne() {
    //  this.playerHand.push(testDraw2)
    this.playerHand.push(this.deck.drawCard());

    pcardThreeSpot.appendChild(playerCardThree);
    playerCardThree.src = this.playerHand[2].img;
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;
  }
  hitTwo() {
    // this.playerHand.push(testDraw1)
    this.playerHand.push(this.deck.drawCard());
    pcardFourSpot.appendChild(playerCardFour);
    playerCardFour.src = this.playerHand[3].img;
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;
  }

  hitThree() {
    // this.playerHand.push(testDraw1)
    this.playerHand.push(this.deck.drawCard());
    pcardFiveSpot.appendChild(playerCardFive);
    playerCardFive.src = this.playerHand[4].img;
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;
  }

  hitFour() {
    // this.playerHand.push(testDraw1)
    this.playerHand.push(this.deck.drawCard());
    pcardSixSpot.appendChild(playerCardSix);
    playerCardSix.src = this.playerHand[5].img;
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;
  }

  hitFive() {
    // this.playerHand.push(testDraw1)
    this.playerHand.push(this.deck.drawCard());
    pcardSevenSpot.appendChild(playerCardSeven);
    playerCardSeven.src = this.playerHand[6].img;
    this.playersTotal = this.calculateHandTotal(this.playerHand);
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`;
  }

  checkForPlayerBust() {
    if (this.playersTotal > 21) {
      this.wins -= 10;
      this.showDealersCard();
      busted.classList.remove('hidden');
      wins.innerHTML = this.wins;
      actionButtons.classList.add('hidden');
      this.activateBetButton();
    }
  }

  checkWhoWon() {
    if (this.dealersTotal > 21) {
      this.wins += 10;
      dealerBusted.classList.remove('hidden');
    } else if (this.dealersTotal < this.playersTotal) {
      this.wins += 10;
      win.classList.remove('hidden');
    } else if (this.dealersTotal === this.playersTotal) {
      push.classList.remove('hidden');
    } else {
      this.wins -= 10;
      lost.classList.remove('hidden');
    }

    wins.innerHTML = this.wins;
    this.activateBetButton();
  }

  hitting() {
    if (this.playerHand[1] && !this.playerHand[2]) {
      this.hitOne();
      this.checkForPlayerBust();
    } else if (this.playerHand[2] && !this.playerHand[3]) {
      this.hitTwo();
      this.checkForPlayerBust();
    } else if (this.playerHand[3] && !this.playerHand[4]) {
      this.hitThree();
      this.checkForPlayerBust();
    } else if (this.playerHand[4] && !this.playerHand[5]) {
      this.hitFour();
      this.checkForPlayerBust();
    } else if (this.playerHand[5] && !this.playerHand[6]) {
      this.hitFive();
      this.checkForPlayerBust();
    }
  }

  stayPlay() {
    this.showDealersCard();
    actionButtons.classList.add('hidden');

    if (this.dealersTotal < 17) {
      this.dealerHand.push(this.deck.drawCard());
      dcardThreeSpot.appendChild(dealerCardThree);
      dealerCardThree.src = this.dealerHand[2].img;
      this.dealersTotal = this.calculateHandTotal(this.dealerHand);
      dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`;
    }
    if (this.dealersTotal < 17 && this.dealerHand[2]) {
      this.dealerHand.push(this.deck.drawCard());
      dcardFourSpot.appendChild(dealerCardFour);
      dealerCardFour.src = this.dealerHand[3].img;
      this.dealersTotal = this.calculateHandTotal(this.dealerHand);
      dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`;
    }
    if (this.dealersTotal < 17 && this.dealerHand[3]) {
      this.dealerHand.push(this.deck.drawCard());
      dcardFiveSpot.appendChild(dealerCardFive);
      dealerCardFive.src = this.dealerHand[4].img;
      this.dealersTotal = this.calculateHandTotal(this.dealerHand);
      dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`;
    }
    if (this.dealersTotal < 17 && this.dealerHand[4]) {
      this.dealerHand.push(this.deck.drawCard());
      dcardFiveSpot.appendChild(dealerCardFive);
      dealerCardSix.src = this.dealerHand[5].img;
      this.dealersTotal = tthis.calculateHandTotal(this.dealerHand);
      dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`;
    }
  }

  stay() {
    this.stayPlay();
    this.checkWhoWon();
  }

  /* doubles bet gets one more card */
  showDoubleDown() {
    if (
      this.playersTotal === 9 ||
      this.playersTotal === 10 ||
      this.playersTotal === 11
    ) {
      double.classList.remove('hidden');
    }
  }
  /** checking double down win to pay or lose double */
  checkWhoWonOnDouble() {
    if (this.dealersTotal > 21) {
      this.wins += 20;
      dealerBusted.classList.remove('hidden');
    } else if (this.dealersTotal < this.playersTotal) {
      this.wins += 20;
      win.classList.remove('hidden');
    } else if (this.dealersTotal === this.playersTotal) {
      push.classList.remove('hidden');
    } else {
      this.wins -= 20;
      lost.classList.remove('hidden');
    }

    wins.innerHTML = this.wins;
    this.activateBetButton();
  }

  /** hides other buttons, deals one card on double bet */
  doubleDown() {
    hit.disabled = true;
    hit.classList.add('disabled');
    stay.disabled = true;
    stay.classList.add('disabled');

    this.hitOne();
    this.stayPlay();
    this.checkWhoWonOnDouble();
  }

  shuffle() {
    this.deck = new Deck(deck);
  }

  // showSplit () {
  //   if (this.playerHand[0].value === this.playerHand[1].value){
  //     splitHand.classList.remove('hidden')
  //   }

  // }

  /** reset the hand
   * used after blackJack, bust or stay
   * game ends if there are less than 10 cards in the deck
   */
  reset() {
    this.resetButtons();
  }
  resetButtons() {
    if (this.deck.length < 10) {
      this.deck = new Deck(deck);
    }
    this.dealerHand = [];
    this.playerHand = [];
    ten.disabled = false;
    ten.classList.remove('disabled');
    hit.disabled = false;
    hit.classList.remove('disabled');
    stay.disabled = false;
    stay.classList.remove('disabled');
    splitting.classList.add('hidden');
    double.classList.add('hidden');
    blackJack.classList.add('hidden');
    busted.classList.add('hidden');
    win.classList.add('hidden');
    lost.classList.add('hidden');
    push.classList.add('hidden');
    dealerBusted.classList.add('hidden');
    dealerBlackjack.classList.add('hidden');
    dealerCardOne.src = '';
    dealerCardTwo.src = '';
    dealerCardThree.src = '';
    dealerCardFour.src = '';
    playerCardOne.src = '';
    playerCardTwo.src = '';
    playerCardTwo.src = '';
    playerCardThree.src = '';
    playerCardFour.src = '';
    playerCardFive.src = '';
    this.playersTotal = 0;
    this.dealersTotal = 0;
  }
}
