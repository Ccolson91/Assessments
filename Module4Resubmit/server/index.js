const express = require("express");
const cors = require("cors");
const favorites = require('./db.json')

const app = express();

app.use(cors());
app.use(express.json()); 


// get random compliment & send to html
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// get random fortune & return to html
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A golden egg of opportunity falls into your lap this month.", "A lifetime friend shall soon be made.", "A pleasant surprise is waiting for you.", "Advice, when most needed, is least heeded.", "All your hard work will soon pay off."]
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)

})

// show current list of favorites in html
app.get('/api/favorites', (req, res) => {
  res.status(200).send(favorites)
})

//create a new favorite
app.post('/api/favorites', (req, res) => {
  favorites.push(req.body)
  res.status(200).send(favorites)
})




app.listen(4000, () => console.log("Server running on 4000"));
