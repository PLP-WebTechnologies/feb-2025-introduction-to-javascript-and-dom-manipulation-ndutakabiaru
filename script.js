// Let's find the elements we want to play with
const greetingElement = document.getElementById('greeting');
const changeTextButton = document.getElementById('changeTextButton');
const addBoxButton = document.getElementById('addBoxButton');
const removeBoxButton = document.getElementById('removeBoxButton');
const boxContainer = document.getElementById('boxContainer');

// When the "Change Greeting" button is clicked, do this:
changeTextButton.addEventListener('click', () => {
    greetingElement.textContent = 'Hello, friend! You clicked the button!'; // Change the text
    greetingElement.style.color = 'orange'; // Change the color
    greetingElement.style.fontWeight = 'bold'; // Make it bold
});

// When the "Add a Box" button is clicked, do this:
addBoxButton.addEventListener('click', () => {
    const newBox = document.createElement('div'); // Create a new div element
    newBox.classList.add('blue-box'); // Give it the blue-box style
    newBox.textContent = 'Another blue box!'; // Add some text
    boxContainer.appendChild(newBox); // Put the new box inside the boxContainer
});

// Keep track of how many boxes we've added
let boxCount = 0;

// When the "Remove a Box" button is clicked, do this:
removeBoxButton.addEventListener('click', () => {
    const allBoxes = boxContainer.querySelectorAll('.blue-box'); // Find all the blue boxes
    if (allBoxes.length > 0) {
        // Remove the last blue box we added
        const lastBox = allBoxes[allBoxes.length - 1];
        boxContainer.removeChild(lastBox);
    } else {
        alert('No more boxes to remove!');
    }
});