// compliment button
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
};

// fortune button
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
};

// local favorites
const favoritesSubmit = document.querySelector('#favorites-submit')
const favorites = document.querySelector('#favorites')
const submitBtn = document.querySelector('#submit-btn')

// append local favorites to html
axios.get('http://localhost:4000/api/favorites')
  .then( function (res) {
    for(let i = 0; i < res.data.length; i++){
      let newFavorites = document.createElement('li')
      newFavorites.textContent = res.data[i].name
      favorites.append(newFavorites)
    }
  })

   function submitHandler (e) {
    e.preventDefault()

    let formInput = document.querySelector('#form-one')
    const body = {
      name: formInput.value
    }

    formInput.value = ''

    axios.post('http://localhost:4000/api/favorites', body)
      .then(res => {
        let newFavorite = res.data[res.data.length -1]
        let newPost = document.createElement('li')
        newPost.textContent = newFavorite.name
        favorites.append(newFavorite)
      })
  }

  favoritesSubmit.addEventListener('submit', submitHandler)
