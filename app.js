const updateButton = document.getElementById('update-button')

const nameInput = document.getElementById('name-input')
const nameDisplay =document.getElementById('name-display')


updateButton.addEventListener('click', () => {
    //this code runs when the button is clicked
    const newName = nameInput.value;
    nameDisplay.textContent = newName;

}); 

const greetingInput = document.getElementById('greeting-input')
const greetingDisplay =document.getElementById('greeting-display')



    updateButton.addEventListener('click', () => {
        //this code runs when the button is clicked
        const newGreeting = nameInput.value;
        greetingDisplay.textContent = newGreeting;

  
});
