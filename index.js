let container = document.getElementById("NumContent")
let button = document.getElementById('submitbtn')
let input = document.getElementById('Name')
let Select = document.getElementById('Select')

button.addEventListener('click', Loadata)


let UserInput = {
    Input: input.value,
    SelectOption : Select.value
 }
function handleChange() {
    UserInput.Input = input.value
    UserInput.SelectOption = Select.value
    

    // if (UserInput.SelectOption == 'date') {
    //     document.getElementById('money').style = "display: none";
    //     document.getElementById('money1').style = "display: block";
    //     console.log("date1")
    // }

    // if (UserInput.SelectOption != 'date') {
    //     document.getElementById('money').style = "display: block";
    //     document.getElementById('money1').style = "display: none";
    //     console.log("nodate")
    // }
   
}





function Loadata(){
    
    let Txt
    let Xhr = new XMLHttpRequest();
    if (UserInput.SelectOption == 'random') {
        Xhr.open('GET', `http://numbersapi.com/random/${UserInput.Input}?json`, true)
    }
    else if (UserInput.SelectOption == 'trivia') {
        Xhr.open('GET', `http://numbersapi.com/${UserInput.Input}/trivia?json`, true)
    }
    else if (UserInput.SelectOption == 'math') {
        Xhr.open('GET', `http://numbersapi.com/${UserInput.Input}/math?json`, true)
    }
    else {
        Xhr.open('GET', `http://numbersapi.com/${UserInput.Input}/date?json`, true)
    }
    
    Xhr.onload = function () {
    if (this.status == 200) {
         Txt = JSON.parse(Xhr.responseText);
        } 
        console.log(Txt)
        document.getElementById("NumContent").innerHTML = Txt.text
        
     }
               
    Xhr.onerror = function () {        
        container.innerHTML = "Request Error!!";
     }
    Xhr.send();
 }


        
   