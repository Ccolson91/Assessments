const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator tool!\nPlease enter a 10 character password starting with a capital letter:", function(input){
  if (input.length >= 10 && input[0] === input[0].toUpperCase()){
    console.log(`Success! Your password has been validated
    /$$     /$$                              /$$ /$$       /$$       /$$   /$$    /$$
    |  $$   /$$/                             | $$|__/      | $$      |__/  | $$   | $$
     \  $$ /$$//$$$$$$  /$$   /$$        /$$$$$$$ /$$  /$$$$$$$       /$$ /$$$$$$ | $$
      \  $$$$//$$__  $$| $$  | $$       /$$__  $$| $$ /$$__  $$      | $$|_  $$_/ | $$
       \  $$/| $$  \ $$| $$  | $$      | $$  | $$| $$| $$  | $$      | $$  | $$   |__/
        | $$ | $$  | $$| $$  | $$      | $$  | $$| $$| $$  | $$      | $$  | $$ /$$   
        | $$ |  $$$$$$/|  $$$$$$/      |  $$$$$$$| $$|  $$$$$$$      | $$  |  $$$$//$$
        |__/  \______/  \______/        \_______/|__/ \_______/      |__/   \___/ |__/`)
  } else if (input.length >= 10 && input[0] !== input[0].toUpperCase()) {
    console.log('Oops! You forgot to make the first letter Uppercase. Please try again.')
  } else {
    console.log('Password must be at least 10 characters') 
  }

  reader.close();
});