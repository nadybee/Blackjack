const cards = [
  {
    name: "ace of clubs",
    value: 1,
    img: "card_images/ace_of_clubs.png",
    ace: true,
  },

  {
    name: "2 of clubs",
    value: 2,
    img: "card_images/2_of_clubs.png",
    ace: false,
  },

  {
    name: "3 of clubs",
    value: 3,
    img: "card_images/3_of_clubs.png",
    ace: false,
  },

  {
    name: "4 of clubs",
    value: 4,
    img: "card_images/4_of_clubs.png",
    ace: false,
  },

  {
    name: "5 of clubs",
    value: 5,
    img: "card_images/5_of_clubs.png",
    ace: false,
  },

  {
    name: "6 of clubs",
    value: 6,
    img: "card_images/6_of_clubs.png",
    ace: false,
  },

  {
    name: "7 of clubs",
    value: 7,
    img: "card_images/7_of_clubs.png",
    ace: false,
  },

  {
    name: "8 of clubs",
    value: 8,
    img: "card_images/8_of_clubs.png",
    ace: false,
  },

  {
    name: "9 of clubs",
    value: 9,
    img: "card_images/9_of_clubs.png",
    ace: false,
  },

  {
    name: "10 of clubs",
    value: 10,
    img: "card_images/10_of_clubs.png",
    ace: false,
  },

  {
    name: "Jack of clubs",
    value: 10,
    img: "card_images/jack_of_clubs2.png",
    ace: false,
  },

  {
    name: "Queen of clubs",
    value: 10,
    img: "card_images/queen_of_clubs2.png",
    ace: false,
  },

  {
    name: "King of clubs",
    value: 10,
    img: "card_images/king_of_clubs2.png",
    ace: false,
  },
  {
    name: "ace of diamonds",
    value: 1,
    img: "card_images/ace_of_diamonds.png",
    ace: true,
  },

  {
    name: "2 of diamonds",
    value: 2,
    img: "card_images/2_of_diamonds.png",
    ace: false,
  },

  {
    name: "3 of diamonds",
    value: 3,
    img: "card_images/3_of_diamonds.png",
    ace: false,
  },

  {
    name: "4 of diamonds",
    value: 4,
    img: "card_images/4_of_diamonds.png",
    ace: false,
  },

  {
    name: "5 of diamonds",
    value: 5,
    img: "card_images/5_of_diamonds.png",
    ace: false,
  },

  {
    name: "6 of diamonds",
    value: 6,
    img: "card_images/6_of_diamonds.png",
    ace: false,
  },

  {
    name: "7 of diamonds",
    value: 7,
    img: "card_images/7_of_clubs.png",
    ace: false,
  },

  {
    name: "8 of diamonds",
    value: 8,
    img: "card_images/8_of_diamonds.png",
    ace: false,
  },

  {
    name: "9 of diamonds",
    value: 9,
    img: "card_images/9_of_diamonds.png",
    ace: false,
  },

  {
    name: "10 of diamonds",
    value: 10,
    img: "card_images/10_of_diamonds.png",
    ace: false,
  },

  {
    name: "Jack of diamonds",
    value: 10,
    img: "card_images/jack_of_diamonds2.png",
    ace: false,
  },

  {
    name: "Queen of diamonds",
    value: 10,
    img: "card_images/queen_of_diamonds2.png",
    ace: false,
  },

  {
    name: "King of diamonds",
    value: 10,
    img: "card_images/king_of_diamonds2.png",
    ace: false,
  },
  {
    name: "ace of hearts",
    value: 1,
    img: "card_images/ace_of_hearts.png",
    ace: true,
  },

  {
    name: "2 of hearts",
    value: 2,
    img: "card_images/2_of_hearts.png",
    ace: false,
  },

  {
    name: "3 of hearts",
    value: 3,
    img: "card_images/3_of_hearts.png",
    ace: false,
  },

  {
    name: "4 of hearts",
    value: 4,
    img: "card_images/4_of_hearts.png",
    ace: false,
  },

  {
    name: "5 of hearts",
    value: 5,
    img: "card_images/5_of_hearts.png",
    ace: false,
  },

  {
    name: "6 of hearts",
    value: 6,
    img: "card_images/6_of_hearts.png",
    ace: false,
  },

  {
    name: "7 of hearts",
    value: 7,
    img: "card_images/7_of_hearts.png",
    ace: false,
  },

  {
    name: "8 of hearts",
    value: 8,
    img: "card_images/8_of_hearts.png",
    ace: false,
  },

  {
    name: "9 of hearts",
    value: 9,
    img: "card_images/9_of_hearts.png",
    ace: false,
  },

  {
    name: "10 of hearts",
    value: 10,
    img: "card_images/10_of_hearts.png",
    ace: false,
  },

  {
    name: "Jack of hearts",
    value: 10,
    img: "card_images/jack_of_hearts2.png",
    ace: false,
  },

  {
    name: "Queen of hearts",
    value: 10,
    img: "card_images/queen_of_hearts2.png",
    ace: false,
  },

  {
    name: "King of hearts",
    value: 10,
    img: "card_images/king_of_hearts2.png",
    ace: false,
  },
  {
    name: "ace of spades",
    value: 1,
    img: "card_images/ace_of_spades.png",
    ace: true,
  },

  {
    name: "2 of spades",
    value: 2,
    img: "card_images/2_of_spades.png",
    ace: false,
  },

  {
    name: "3 of spades",
    value: 3,
    img: "card_images/3_of_spades.png",
    ace: false,
  },

  {
    name: "4 of spades",
    value: 4,
    img: "card_images/4_of_spades.png",
    ace: false,
  },

  {
    name: "5 of spades",
    value: 5,
    img: "card_images/5_of_spades.png",
    ace: false,
  },

  {
    name: "6 of spades",
    value: 6,
    img: "card_images/6_of_spades.png",
    ace: false,
  },

  {
    name: "7 of spades",
    value: 7,
    img: "card_images/7_of_spades.png",
    ace: false,
  },

  {
    name: "8 of spades",
    value: 8,
    img: "card_images/8_of_spades.png",
    ace: false,
  },

  {
    name: "9 of spades",
    value: 9,
    img: "card_images/9_of_spades.png",
    ace: false,
  },

  {
    name: "10 of spades",
    value: 10,
    img: "card_images/10_of_spades.png",
    ace: false,
  },

  {
    name: "Jack of spades",
    value: 10,
    img: "card_images/jack_of_spades2.png",
    ace: false,
  },

  {
    name: "Queen of spades",
    value: 10,
    img: "card_images/queen_of_spades2.png",
    ace: false,
  },

  {
    name: "King of spades",
    value: 10,
    img: "card_images/king_of_spades2.png",
    ace: false,
  },
];

"card_images/ace_of_diamonds.png",
  "card_images/2_of_diamonds.png",
  "card_images/3_of_diamonds.png",
  "card_images/4_of_diamonds.png",
  "card_images/5_of_diamonds.png",
  "card_images/6_of_diamonds.png",
  "card_images/7_of_diamonds.png",
  "card_images/8_of_diamonds.png",
  "card_images/9_of_diamonds.png",
  "card_images/10_of_diamonds.png",
  "card_images/jack_of_diamonds2.png",
  "card_images/queen_of_diamonds2.png",
  "card_images/king_of_diamonds2.png",
  "card_images/ace_of_hearts.png",
  "card_images/2_of_hearts.png",
  "card_images/3_of_hearts.png",
  "card_images/4_of_hearts.png",
  "card_images/5_of_hearts.png",
  "card_images/6_of_hearts.png",
  "card_images/7_of_hearts.png",
  "card_images/8_of_hearts.png",
  "card_images/9_of_hearts.png",
  "card_images/10_of_hearts.png",
  "card_images/jack_of_hearts2.png",
  "card_images/queen_of_hearts2.png",
  "card_images/king_of_hearts2.png",
  "card_images/ace_of_spades2.png",
  "card_images/2_of_spades.png",
  "card_images/3_of_spades.png",
  "card_images/4_of_spades.png",
  "card_images/5_of_spades.png",
  "card_images/6_of_spades.png",
  "card_images/7_of_spades.png",
  "card_images/8_of_spades.png",
  "card_images/9_of_spades.png",
  "card_images/10_of_spades.png",
  "card_images/jack_of_spades2.png",
  "card_images/queen_of_spades2.png",
  "card_images/king_of_spades2.png";
