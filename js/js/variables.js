let playersBalance = 200
let betBalance = 0
let game;
let testHand = [ { name: 'ace of clubs',
value: 1,
img:'card_images/ace_of_clubs.png',
ace: true},   { name: 'Jack of clubs',
value: 10,
img:   'card_images/jack_of_clubs2.png',
ace: false}
]
const testDraw1  = { name: 'ace of clubs',
value: 1,
img:'card_images/ace_of_clubs.png',
ace: true}

const testDraw2 = { name: 'Jack of clubs',
value: 10,
img:   'card_images/jack_of_clubs2.png',
ace: false}
/**dealer variables dealer card spot 1-6 */
const dealer= document.querySelector('#dealers-hand')
const dCardOneSpot =document.getElementById('dealer-card1')
const dealerCardOne= document.createElement('img')

const dealerCardTwo=document.createElement('img');
const dcardTwoSpot = document.getElementById('dealer-card2')

const dealerCardThree=document.createElement('img');
const dcardThreeSpot = document.getElementById('dealer-card3')

const dealerCardFour=document.createElement('img');
const dcardFourSpot = document.getElementById('dealer-card4')

const dealerCardFive=document.createElement('img');
const dcardFiveSpot = document.getElementById('dealer-card5')

const dealerCardSix=document.createElement('img');
const dcardSixSpot = document.getElementById('dealer-card6')

const cardBack = document.getElementById('card-back')
const dealersTotalDiv = document.getElementById('dealers-total')

/** Player variables player card spot 1-7 */
const playerCardOne=document.createElement('img')
const pcardOneSpot =document.getElementById('player-card1')

const playerCardTwo=document.createElement('img');
const pcardTwoSpot = document.getElementById('player-card2')

const playerCardThree=document.createElement('img');
const pcardThreeSpot = document.getElementById('player-card3')


const playerCardFour=document.createElement('img');
const pcardFourSpot = document.getElementById('player-card4')

const playerCardFive=document.createElement('img');
const pcardFiveSpot = document.getElementById('player-card5')

const playerCardSix=document.createElement('img');
const pcardSixSpot = document.getElementById('player-card6')

const playerCardSeven=document.createElement('img');
const pcardSevenSpot = document.getElementById('player-card7')

const playersTotalDiv = document.getElementById('players-total')

const placeBet = document.getElementById('players-chips')
const placeBetTitle =document.getElementById('place-bet')
const ten =document.getElementById('ten')
const wins = document.getElementById('wins')
const losses = document.getElementById('losses')
const start= document.getElementById('start')
const chips = document.getElementById('chips')


/** showing results after hands */
const actionButtons= document.getElementById('action-buttons')
const blackJack = document.getElementById('blackjack')
const busted =document.getElementById('busted')
const win = document.getElementById('win')
const lost = document.getElementById('lost')
const dealerBlackjack = document.getElementById('dealer-blackjack')
const push = document.getElementById('push')
const dealerBusted = document.getElementById('dealer-busted')

/** action buttons after bet */
const hit = document.getElementById('hit')
const stay = document.getElementById('stay')


