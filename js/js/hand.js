
class Hand {
  constructor (deck) {
    this.deck = new Deck(deck)
    this.dealerHand = []
    this.playerHand = []
    
    
  }


    /** getter and setter to get players hand totals */
 get playersTotal (){
  return this._playersTotal
}

set playersTotal(value) {
  this._playersTotal = value
}

/**getter and setter for dealers hand total */
get dealersTotal (){
  return this._dealersTotal
}

set dealersTotal(value) {
  this._dealersTotal = value
}

/** get and set wins total */

  get wins(){
    return this._wins
  }

  set wins (value){
    this._wins = value
  }


/** starts the game */

  startGame() {
  
  start.classList.add('hidden')
  chips.classList.remove('hidden')
  this.wins = 0
  this.losses = 0
  wins.innerHTML = this.wins

  
  
  }
 
/** deals starting hand */
firstBet() {
  this.reset()
   /* *deal dealers first card */ 
  //  this.dealerHand.push(testDraw1)
  this.dealerHand.push(this.deck.drawCard())
  dCardOneSpot.appendChild(dealerCardOne)
  dealerCardOne.classList.add('hidden')
  dealerCardOne.src = game.dealerHand[0].img
  cardBack.classList.remove('hidden')
  cardBack.classList.add('show')
    
/*  deal players first card */
    // this.playerHand.push(testDraw1)
    this.playerHand.push(this.deck.drawCard())
    pcardOneSpot.appendChild(playerCardOne)
    playerCardOne.src =this.playerHand[0].img

/*deal dealers second card*/
    // this.dealerHand.push(testDraw1);
    this.dealerHand.push(this.deck.drawCard());
    dcardTwoSpot.appendChild(dealerCardTwo)
    dealerCardTwo.src = this.dealerHand[1].img
  
  /* deals players second card*/
  // this.playerHand.push(testDraw1)  
    // this.playerHand.push(testDraw2);
    // this.playerHand.push(testDraw3);
    this.playerHand.push(this.deck.drawCard());
    pcardTwoSpot.appendChild(playerCardTwo)
    playerCardTwo.src = this.playerHand[1].img

/** shows the players hand total, hides dealers total  */
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ??`
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersFirstTotal}`
   
   /** shows action (ie hit) buttons */ 
    actionButtons.classList.remove('hidden')
    /**disables betting button */
    ten.disabled=true;
    ten.classList.add('disabled')
    /**checks if player has blackJack */
    this.checkForPlayersBlackJack()
    this.checkForDealersBlackJack()
    this.playersTotal = this.playersFirstTotal
    this.dealersTotal = this.dealersFirstTotal
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`
    /**updates wins and losses*/
    wins.innerHTML = `${this.wins}`
   this.showDoubleDown()

    
}

/*calculate players firsthand */
 get playersFirstTotal (){ 
  let subTotal = 0
  let total = 0

  for(let i=0; i<this.playerHand.length; i++) {
    subTotal+=this.playerHand[i].value
  }
  for (let j=0; j<this.playerHand.length; j++){
    total += this.playerHand[j].value
  }

  if ((this.playerHand[0].ace|| this.playerHand[1].ace) && (subTotal <= 11)) {
    total +=10
  }
  
return total
 }

 /** calculate players first hit */
 get playersSecondTotal (){ 
  let subTotal = 0
  let total = 0

  for(let i=0; i<this.playerHand.length; i++) {
    subTotal+=this.playerHand[i].value
  }
  for (let j=0; j<this.playerHand.length; j++){
    total += this.playerHand[j].value
  }

  if ((this.playerHand[0].ace|| this.playerHand[1].ace || this.playerHand[2].ace) && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }


 /** calculate players second hit */
 get playersThirdTotal (){ 
  let subTotal = 0
  let total = 0

  for(let i=0; i<this.playerHand.length; i++) {
    subTotal+=this.playerHand[i].value
  }
  for (let j=0; j<this.playerHand.length; j++){
    total += this.playerHand[j].value
  }

  if ((this.playerHand[0].ace|| this.playerHand[1].ace || this.playerHand[2].ace || this.playerHand[3].ace) && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }
 

 get playersFourthTotal(){ 
  let subTotal = 0
  let total = 0

  for(let i=0; i<this.playerHand.length; i++) {
    subTotal+=this.playerHand[i].value
  }
  for (let j=0; j<this.playerHand.length; j++){
    total += this.playerHand[j].value
  }

  if ((this.playerHand[0].ace|| this.playerHand[1].ace || this.playerHand[2].ace || this.playerHand[3].ace|| this.playerHand[4].ace) && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }
 get playersFifthTotal (){ 
  let subTotal = 0
  let total = 0

  for(let i=0; i<this.playerHand.length; i++) {
    subTotal+=this.playerHand[i].value
  }
  for (let j=0; j<this.playerHand.length; j++){
    total += this.playerHand[j].value
  }

  if ((this.playerHand[0].ace|| this.playerHand[1].ace || this.playerHand[2].ace || this.playerHand[3].ace|| this.playerHand[4].ace ||this.playerHand[5].ace) && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }

/*calculate dealers first deal*/
get dealersFirstTotal (){ 
  let subTotal = 0
  let total = 0

  for(let i=0; i<this.dealerHand.length; i++) {
    subTotal+=this.dealerHand[i].value
  }
  for (let j=0; j<this.dealerHand.length; j++){
    total += this.dealerHand[j].value
  }

  if ((this.dealerHand[0].ace|| this.dealerHand[1].ace) && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }
/**calcuate after dealers first hit */
 get dealersSecondTotal (){
  let subTotal = this.dealersHand
  let total = 0

  for(let i=0; i<this.dealerHand.length; i++) {
    subTotal+=this.dealerHand[i].value
  }
  for (let j=0; j<this.dealerHand.length; j++){
    total += this.dealerHand[j].value
  }

  if ((this.dealerHand[0].ace|| this.dealerHand[1].ace || this.dealerHand[2].ace)  && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }
 /** calculate after dealers second hit */
 get dealersThirdTotal (){
  let subTotal = this.dealersHand
  let total = 0

  for(let i=0; i<this.dealerHand.length; i++) {
    subTotal+=this.dealerHand[i].value
  }
  for (let j=0; j<this.dealerHand.length; j++){
    total += this.dealerHand[j].value
  }

  if ((this.dealerHand[0].ace|| this.dealerHand[1].ace || this.dealerHand[2].ace || this.dealerHand[3])  && (subTotal <= 11)) {
    total +=10
  }
  
return total

 }
  /** calculate after dealers third hit */
  get dealersFourthTotal (){
    let subTotal = this.dealersHand
    let total = 0
  
    for(let i=0; i<this.dealerHand.length; i++) {
      subTotal+=this.dealerHand[i].value
    }
    for (let j=0; j<this.dealerHand.length; j++){
      total += this.dealerHand[j].value
    }
  
    if ((this.dealerHand[0].ace|| this.dealerHand[1].ace || this.dealerHand[2].ace || this.dealerHand[3]||this.dealerHand[4].ace)  && (subTotal <= 11)) {
      total +=10
    }
    
  return total
  
   }

   get dealersFifthTotal (){
    let subTotal = this.dealersHand
    let total = 0
  
    for(let i=0; i<this.dealerHand.length; i++) {
      subTotal+=this.dealerHand[i].value
    }
    for (let j=0; j<this.dealerHand.length; j++){
      total += this.dealerHand[j].value
    }
  
    if ((this.dealerHand[0].ace|| this.dealerHand[1].ace || this.dealerHand[2].ace || this.dealerHand[3]||this.dealerHand[4].ace || this.dealerHand[5].ace)  && (subTotal <= 11)) {
      total +=10
    }
    
  return total
  
   }



/** checks if player has 21 to end hand
 * I want to do a timeout here!
 */
  checkForPlayersBlackJack (){
    if(this.playersFirstTotal===21) {
     this.wins += 15
     actionButtons.classList.add('hidden')
     blackJack.classList.remove('hidden')
     ten.disabled=false;
     ten.classList.remove('disabled')
     cardBack.classList.add('hidden')
       cardBack.classList.remove('show')
     dealerCardOne.classList.remove('hidden')
     dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersFirstTotal}`
   
    }
    
  } 

  checkForDealersBlackJack (){
    if(this.dealersFirstTotal===21 && this.playersFirstTotal!==21) {
     this.wins -= 10
     this.activateBetButton()
     this.showDealersCard()
     dealerBlackjack.classList.remove('hidden')
   
    }
    
  } 

  activateBetButton(){
    actionButtons.classList.add('hidden')
    ten.disabled=false;
    ten.classList.remove('disabled')
    
  }

  showDealersCard() {
    cardBack.classList.add('hidden')
       cardBack.classList.remove('show')
     dealerCardOne.classList.remove('hidden')
     dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersFirstTotal}`
  }



  
/** players hits */
hitOne(){
  //  this.playerHand.push(testDraw2)
    this.playerHand.push(this.deck.drawCard());
    
    pcardThreeSpot.appendChild(playerCardThree)
    playerCardThree.src = this.playerHand[2].img
    this.playersTotal = this.playersSecondTotal
    playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`
  
}
hitTwo(){
  // this.playerHand.push(testDraw1)
   this.playerHand.push(this.deck.drawCard());
   pcardFourSpot.appendChild(playerCardFour)
   playerCardFour.src = this.playerHand[3].img
   this.playersTotal =this.playersThirdTotal
   playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`

}

hitThree(){
  // this.playerHand.push(testDraw1)
   this.playerHand.push(this.deck.drawCard());
   pcardFiveSpot.appendChild(playerCardFive)
   playerCardFive.src = this.playerHand[4].img
   this.playersTotal =this.playersFourthTotal
   playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`
}

hitFour(){
  // this.playerHand.push(testDraw1)
   this.playerHand.push(this.deck.drawCard());
   pcardSixSpot.appendChild(playerCardSix)
   playerCardSix.src = this.playerHand[5].img
   this.playersTotal=this.playersFifthTotal
   playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`
}

hitFive(){
  // this.playerHand.push(testDraw1)
   this.playerHand.push(this.deck.drawCard());
   pcardSevenSpot.appendChild(playerCardSeven)
   playerCardSeven.src = this.playerHand[6].img
   this.playersTotal +=this.playerHand[6].value
   playersTotalDiv.innerHTML = `<p> Players Hand Total: ${this.playersTotal}`
}



checkForPlayerBust() {
  if(this.playersTotal>21) {
    this.wins-=10
    this.showDealersCard()
    busted.classList.remove('hidden')
    wins.innerHTML = this.wins
    actionButtons.classList.add('hidden')
    this.activateBetButton()
  
  }
}

checkWhoWon() { 
  if (this.dealersTotal>21){
    this.wins += 10
    dealerBusted.classList.remove('hidden')
  }
else if(this.dealersTotal < this.playersTotal) {
  this.wins += 10
  win.classList.remove('hidden')
  
}
else if(this.dealersTotal === this.playersTotal){
  push.classList.remove('hidden')

}
else {
  this.wins -= 10
  lost.classList.remove('hidden')
  
}

wins.innerHTML = this.wins
this.activateBetButton()
}



hitting() {
  if (this.playerHand[1] && !this.playerHand[2]) {
    this.hitOne()
    this.checkForPlayerBust()
  }
  else if (this.playerHand[2] && !this.playerHand[3]) {
    this.hitTwo()
    this.checkForPlayerBust()
  
  }
  else if (this.playerHand[3] && !this.playerHand[4]) {
    this.hitThree()
    this.checkForPlayerBust()
  }
  else if (this.playerHand[4] && !this.playerHand[5]) {
    this.hitFour()
    this.checkForPlayerBust()
  }
  else if (this.playerHand[5] && !this.playerHand[6]) {
    this.hitFive()
    this.checkForPlayerBust()
  }

}

stayPlay() {
  this.showDealersCard()
  actionButtons.classList.add('hidden')

  if(this.dealersTotal<17){
    this.dealerHand.push(this.deck.drawCard());
    dcardThreeSpot.appendChild(dealerCardThree)
    dealerCardThree.src = this.dealerHand[2].img
    this.dealersTotal = this.dealersSecondTotal
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`
    
  }
  if(this.dealersTotal <17 && this.dealerHand[2]) {
    this.dealerHand.push(this.deck.drawCard());
    dcardFourSpot.appendChild(dealerCardFour)
    dealerCardFour.src = this.dealerHand[3].img
    this.dealersTotal = this.dealersThirdTotal
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`

  }
  if(this.dealersTotal < 17 && this.dealerHand[3]) {
    this.dealerHand.push(this.deck.drawCard());
    dcardFiveSpot.appendChild(dealerCardFive)
    dealerCardFive.src = this.dealerHand[4].img
    this.dealersTotal = this.dealersFourthTotal
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`

  }
  if(this.dealersTotal < 17 && this.dealerHand[4]) {
    this.dealerHand.push(this.deck.drawCard());
    dcardFiveSpot.appendChild(dealerCardFive)
    dealerCardSix.src = this.dealerHand[5].img
    this.dealersTotal = this.dealersFifthTotal
    dealersTotalDiv.innerHTML = `<p> Dealers Hand Total: ${this.dealersTotal}`

  }
  
 
}

stay() {
 this.stayPlay()
 this.checkWhoWon()
}

/* doubles bet gets one more card */
showDoubleDown(){
  if (this.playersFirstTotal === 9||
    this.playersFirstTotal === 10||
    this.playersFirstTotal === 11) {
      double.classList.remove('hidden')
    }

}
/** checking double down win to pay or lose double */
checkWhoWonOnDouble() { 
  if (this.dealersTotal>21){
    this.wins += 20
    dealerBusted.classList.remove('hidden')
  }
else if(this.dealersTotal < this.playersTotal) {
  this.wins += 20
  win.classList.remove('hidden')
  
}
else if(this.dealersTotal === this.playersTotal){
  push.classList.remove('hidden')

}
else {
  this.wins -= 20
  lost.classList.remove('hidden')
  
}

wins.innerHTML = this.wins
this.activateBetButton()
}

/** hides other buttons, deals one card on double bet */
doubleDown() {
  hit.disabled=true;
  hit.classList.add('disabled')
  stay.disabled=true;
  stay.classList.add('disabled')

  this.hitOne()
  this.stayPlay()
  this.checkWhoWonOnDouble()

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
reset(){

     this.resetButtons()
   
  }
   resetButtons() {
  this.dealerHand =[]
  this.playerHand = []
  ten.disabled=false;
  ten.classList.remove('disabled')
  hit.disabled=false;
  hit.classList.remove('disabled')
  stay.disabled=false;
  stay.classList.remove('disabled')
  splitting.classList.add('hidden')
  double.classList.add('hidden')
  blackJack.classList.add('hidden')
  busted.classList.add('hidden')
  win.classList.add('hidden')
  lost.classList.add('hidden')
  push.classList.add('hidden')
  dealerBusted.classList.add('hidden')
  dealerBlackjack.classList.add('hidden')
  dealerCardOne.src = ''
  dealerCardTwo.src = ''
  dealerCardThree.src =''
  dealerCardFour.src =''
  playerCardOne.src = ''
  playerCardTwo.src = ''
  playerCardTwo.src =''
  playerCardThree.src =''
  playerCardFour.src = ''
  playerCardFive.src = ''
  this.playersTotal = 0
  this.dealersTotal = 0

  }
}


      



   










  



