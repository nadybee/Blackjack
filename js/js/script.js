
start.addEventListener('click', e => {
   game = new Hand(deck)
  game.startGame()

})

//bet $10
ten.addEventListener ('click', e => {
    
  if(game.deck.deck.length<10) {
    game.reset()
     alert('deck out, game over!')
    }
    else{
  game.firstBet()
    }
})

hit.addEventListener('click', e=>{
  game.hitting()
 
})

stay.addEventListener('click', e =>{
    game.stay()
})





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
  