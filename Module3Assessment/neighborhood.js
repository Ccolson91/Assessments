const foodPicker = () => {
  const foodArray = ['Mi Padres', 'George\'s', 'Anthony\'s Frozen Custard', 'China One', 'Roman\'s Greek Cafe', 'Monjunis']
  const randomFoodArray = foodArray[Math.floor(Math.random() * foodArray.length)]
  alert(`You should have ${randomFoodArray}!`)
}

let randomRestaurant = document.getElementById('food-btn')
randomRestaurant.addEventListener('click', foodPicker)