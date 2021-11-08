// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");
// const { response } = require("express");


const statesContainer = document.querySelector('#states-container')
const moodContainer = document.querySelector('#mood-container')

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
};

document.getElementById("fortuneCookieBtn").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data
      alert(data)
    })
}

document.getElementById("statesButton").onclick = function () {
  axios.get("http://localhost:4000/api/states")
  .then(function (response) {
    let allStates = []
    for(let i = 0; i < response.data.length; i++){
      const data = response.data[i].state
      allStates.push(data)
    }
    getAllStates()
  })
}

document.getElementById('mood-btn').onclick = function () {
  axios.post("http://localhost:4000/api/moodboard")
  .then(function (response){
    console.log('this might work')
  })
}


const baseURL = `http://localhost:4000/api/`

const statesCallback = ({ data: states }) => showStates(states)
const moodCallback = ({ data: mood }) => showMoodboard(moodBoard)
const errCallback = err => console.log(err)

const getAllStates = () => axios.get(`${baseURL}states`).then(statesCallback).catch(errCallback)
const createMood = body => axios.post(baseURL, body).then(moodCallback).catch(errCallback)

function createStateCard(state) {
  const stateCard = document.createElement('div')
  stateCard.classList.add('state-card')

  stateCard.innerHTML = `
  <p>${state.state}</p>
  `
  statesContainer.appendChild(stateCard)
}

function createMoodCard(mood) {
  const moodCard = document.createElement('div')
  moodCard.classList.add('mood-card')
  stateCard.innerHTML = `
    <p>${mood.mood}</p>
  `
  moodContainer.appendChild(moodCard)
}

function showMoodBoard(moodBoard) {
  moodContainer.innerHTML = ` `
  for(let i = 0; i < moodBoard.length; i++){
    createMoodCard(moodBoard[i])
  }
}

function showStates(states) {
  statesContainer.innerHTML = ` `
    for(let i = 0; i < states.length; i++){
      createStateCard(states[i])
    }
}

