const colorClick = () => {
  alert('My favorite color is Blue!')
}
const colorButton = document.getElementById('color')
colorButton.addEventListener('click', colorClick)

const placeClick = () => {
  alert('My favorite place is Lake Tahoe in the Winter!')
}

const placeButton = document.getElementById('place')
placeButton.addEventListener('click', placeClick)

const ritualClick = () => {
  alert('My favorite ritual is running and listening to music!')
}

const ritualButton = document.getElementById('ritual')
ritualButton.addEventListener('click', ritualClick)

const ghostClick = () => {
  alert('AH YES, THE FRENCH DUCK SAID YOU\'DE BE STOPPING BY. CARRY ON GOOD WEB TRAVELER. CARRY ON.')
}

const ghostButton = document.getElementById('ghost')
ghostButton.addEventListener('click', ghostClick)