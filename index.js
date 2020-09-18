
// 'https://randomuser.me/api/'
// https://source.unsplash.com/random from splash
let container = document.getElementById("NumContent")
let button = document.getElementById('submitbtn')
let input = document.getElementById('Name')
let Select = document.getElementById('Select')

let UserInput = {
  Input: input.value,
  SelectOption: Select.value,
};
function handleChange() {
  UserInput.Input = input.value;
  UserInput.SelectOption = Select.value;
}

function Loadata(){

    if (UserInput.SelectOption == 'random') {
        fetch(`http://numbersapi.com/random/${UserInput.Input}?json`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("NumContent").innerHTML = data.text
            })
    }

    else {
        fetch(`http://numbersapi.com/${UserInput.Input}/${UserInput.SelectOption}?json`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("NumContent").innerHTML = data.text
            })
    }
}

button.addEventListener("click", Loadata);





