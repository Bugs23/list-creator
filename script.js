// Create variables
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('div.list');
const descriptionInput = document.querySelector('input.description');
const descriptionH3 = document.querySelector('h3.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');
const list = listUl.children;

// Create and attach buttons to list items
function attachItemButtons(li) {
    // Create button
    let up = document.createElement('button');
    // Add button class
    up.classList = 'up';
    // Add button text
    up.textContent = 'Move Up';
    // Attach button to list item
    li.appendChild(up);

    let down = document.createElement('button');
    down.classList = 'down';
    down.textContent = 'Move Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.classList = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);

};

// Attach buttons to existing list items
for (let i = 0; i < list.length; i++) {
    attachItemButtons(list[i]);
}

listUl.addEventListener('click', (e) => {
    // If a button was clicked
    if (e.target.tagName == 'BUTTON') {
        // Get the buttons parent list item
        let li = e.target.parentNode;
        // Get the parent of the list item
        let ul = li.parentNode;

        // If the button has the class remove
        if (e.target.classList == 'remove') {
            // Remove the list item
            ul.removeChild(li);
        }

        // If the button has the class up
        if (e.target.classList == 'up') {
            // Get the previous list item
            let previousItem = li.previousElementSibling;

            // If there is a previous list item
            if (previousItem !== null) {
                // Plce this list item before it
                ul.insertBefore(li , previousItem);
            }
        }

        // If the button 
        if (e.target.classList == 'down') {
            let nextItem = li.nextElementSibling;

            if (nextItem !== null) {
                console.log(nextItem)
                console.log(ul)
                console.log(li)
                ul.insertBefore(nextItem, li );
            }
        }
    }
});

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
    if (descriptionInput.value == '') {
        descriptionInput.classList.add('placeholder-red');
    } else {
        descriptionH3.innerHTML = descriptionInput.value + ':';
        // Clear description input field
        descriptionInput.value = '';
        descriptionInput.classList.remove('placeholder-red');
    }
});

// Add a new list item
addItemButton.addEventListener('click', () => {
    // If add item input field is empty
    if (addItemInput.value == '') {
        // Turn placeholder text red
        addItemInput.classList.add('placeholder-red');
    } else {
        // Get the unordered list
        let ul = document.querySelector('.list ul');
        // Create a new list item element
        let li = document.createElement('li');
        // Set new list item text to value of input field
        li.textContent = addItemInput.value;
        // Add list item to the unodered list
        attachItemButtons(li);
        // Attach item to list
        ul.appendChild(li);
        // Clear description input field
        addItemInput.value = '';
        addItemInput.classList.remove('placeholder-red')
    }
});