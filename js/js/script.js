start.addEventListener("click", (e) => {
  game = new Hand(deck);
  game.startGame();
});

//bet $10
ten.addEventListener("click", (e) => {
  if (game.deck.deck.length < 10) {
    game.deck = new Deck();
    alert(
      `shuffling. (you got to know when to hold 'em and know when to fold 'em`
    );
  }

  game.firstBet();
});

hit.addEventListener("click", (e) => {
  game.hitting();
});

stay.addEventListener("click", (e) => {
  game.stay();
});

double.addEventListener("click", (e) => {
  game.doubleDown();
});

// const newButton = document.createElement('BUTTON')
// chips.appendChild(newButton)

// newButton.addEventListener('click', e => {
//   alert('are you sure?')
// })

// //bet $twenty
// twenty.addEventListener ('click', e => {
//   betBalance+=20
//   playersBalance-=20
//   playersMoney.innerHTML = `<h3> Players Balance <strong> $${playersBalance} </strong> </h3>`
//   currentBet.innerHTML = `<p> Current bet is: $${betBalance}`
//   const game=  new Hand(deck)
//   game.firstBet()
//  placeBet.classList.add('hidden')
//  currentBet.classList.remove('hidden')

// })

// //bet $forty
// forty.addEventListener ('click', e => {
//   betBalance+=40
//   playersBalance-=40
//   playersMoney.innerHTML = `<h3> Players Balance <strong> $${playersBalance} </strong> </h3>`
//   currentBet.innerHTML = `<p> Current bet is: $${betBalance}`
//   const game=  new Hand(deck)
//   game.firstBet()
//  placeBet.classList.add('hidden')
//  currentBet.classList.remove('hidden')

// })

// //bet $hundred
// hundred.addEventListener ('click', e => {
//   betBalance+=100
//   playersBalance-=100
//   playersMoney.innerHTML = `<h3> Players Balance <strong> $${playersBalance} </strong> </h3>`
//   currentBet.innerHTML = `<p> Current bet is: $${betBalance}`
//   const game=  new Hand(deck)
//   game.firstBet()
//  placeBet.classList.add('hidden')
//  currentBet.classList.remove('hidden')

// })

// //bet $allin
// allIn.addEventListener ('click', e => {
//   betBalance+=playersBalance
//   playersBalance-=betBalance
//   playersMoney.innerHTML = `<h3> Players Balance <strong> $${playersBalance} </strong> </h3>`
//   currentBet.innerHTML = `<p> Current bet is: $${betBalance}`
//   const game=  new Hand(deck)
//   game.firstBet()
//  placeBet.classList.add('hidden')
//  currentBet.classList.remove('hidden')

// })
