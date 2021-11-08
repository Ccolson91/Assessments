const express = require("express");
const cors = require("cors");
const app = express();
const ctrl = require("./controller.js")

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.




const { getStates, getCompliment, getFortune, postMood } = ctrl
app.get(`/api/compliment`, getCompliment);
app.get(`/api/fortune`, getFortune)
app.get(`/api/states`, getStates)
app.post(`/api/moodboard`, postMood)







app.listen(4000, () => console.log("Server running on 4000"));
