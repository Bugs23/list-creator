// Create variables
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('div.list');
const descriptionInput = document.querySelector('input');
const descriptionH3 = document.querySelector('h3.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton')
const listItems = document.getElementsByTagName('li');


listDiv.addEventListener('mouseover', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.textContent = e.target.textContent.toUpperCase();
    }
});

listDiv.addEventListener('mouseout', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.textContent = e.target.textContent.toLowerCase();
    }
})

// Hide/show list
toggleList.addEventListener('click', () => {
    // If list is hidden
    if (listDiv.style.display == 'none') {
        // Change button text
        toggleList.textContent = 'Hide list'
        listDiv.style.display = 'block';
    } else {
        // Hide the list
        listDiv.style.display = 'none';
        // Change button text
        toggleList.textContent = 'Show list';
    }
});

// Change list description
descriptionButton.addEventListener('click', () => {
    descriptionH3.innerHTML = descriptionInput.value + ':';
    // Clear description input field
    descriptionInput.value = '';
});

// Add a new list item
addItemButton.addEventListener('click', () => {
    // If add item input field is empty
    if (addItemInput.value === '') {
        // Display empty alert
        alert('The add item field is empty');
    } else {
        // Get the unordered list
        let ul = document.querySelector('.list ul');
        // Create a new list item element
        let li = document.createElement('li');
        // Set new list item text to value of input field
        li.textContent = addItemInput.value;
        // Add list item to the unodered list
        ul.appendChild(li);
        // Clear description input field
        addItemInput.value = '';
    }
});

// Remove last list item
removeItemButton.addEventListener('click', () => {
    // Get the unordered list
    let ul = document.querySelector('.list ul');
    // Get lsat item in unordered list
    let li = document.querySelector('li:last-child');
    // If the there are no list items
    if (li === null) {
        // Display alert
        alert('There are no list items to remove');
    } else {
        ul.removeChild(li);
    }

});