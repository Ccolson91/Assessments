const states = require('./states.json')
const moodBoard = require('./moodBoard.json')

module.exports = {
  getStates: (req, res) => res.status(200).send(states),
  postMood: (req, res) => {
    res.status(200).send(console.log('yo yo yo'))
  },
  getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
             "Cool shirt!",
             "Your Javascript skills are stellar.",
    ];
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "Your hard work will payoff today.",
      "Your life will be happy and peaceful.",
      "Your love of music will be an important part of your life.",
      "Your character can be described as natural and unrestrained.",
      "You will travel far and wide,both pleasure and business.",
      "You will be unusually successful in business.",
      "You have an active mind and a keen imagination.",
      "You can see a lot just by looking.",
      "You are very expressive and positive in words, act and feeling.",
      "There’s no such thing as an ordinary cat."
    ]
    
    let fortuneIndex = Math.floor(Math.random() * fortunes.length)
    let giveFortune = fortunes[fortuneIndex]
    
    res.status(200).send(giveFortune)
  }
}