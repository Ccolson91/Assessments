// console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("You're form has been submitted!")
	// console.log('form submit');
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


const imgMouseover = () => {
	const arrayOfCompliments = document.querySelectorAll('#compliment')
	const randomCompliment = arrayOfCompliments[Math.floor(Math.random() * arrayOfCompliments.length)]
	// console.log(compliment.length)
	alert(randomCompliment.textContent)
}

let giveUserCompliment = document.getElementById('french-duck')
giveUserCompliment.addEventListener('mouseover', imgMouseover)