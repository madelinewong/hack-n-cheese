//create your variables
const button = document.querySelector('#generateBtn');
const firstNameEl = document.querySelector('#first');
const lastNameEl = document.querySelector('#last');
const lastName = [
    'Gorgonzola',
    'Cheddar',
    'Havarti',
];
const firstName =[
    'Neo',
    'Morpheus',
    'Trinity',
];
//add your event listeners
button.addEventListener('click', generateName);

//functions
function generateName(e){
    const rndLastName = randomChoice(lastName);
    const rndFirstName = randomChoice(firstName);
    firstNameEl.textContent = rndFirstName; 
    lastNameEl.textContent = rndLastName;
    

}

function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}