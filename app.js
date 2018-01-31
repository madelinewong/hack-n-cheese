//create your variables
const button = document.querySelector('#generateBtn');
const firstNameEl = document.querySelector('#first');
const lastNameEl = document.querySelector('#last');
const lastName = [
    'McSlimey',
    'McSluggo',
    'Estranga',
    'SluggoPants the 3rd',
    'Zamolocksnailcova', 
];
const firstName =[
    'Miss Fame',
    'Manlia',
    'Ru Jeff',
    'Trixie', 
    'Lady Shabley',
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