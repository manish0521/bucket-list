// Global variables ftw


let isStack = true;
const list = [];

// Set init to run when the window loads.
window.onload = init;

function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
            .addEventListener('click', toggleQueueAndStack);
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()
    
    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
   

    // Now comes your part: add the item to the list.




    // Display it in next-item if it's the first item:
    if(newItem !== '') {
        displayItem(newItem);
        list.push(newItem);
        console.log(list);
        console.log(list.length);
        

    }
        document.querySelector('#old-item').innerText = 'My oldest Item:' + list[0]; // Replace that empty string with the actual item!

        document.querySelector('#newest-item').innerText = 'My newest Item: ' + newItem  ; // Replace that empty string with the actual item!

        document.querySelector('#number-of-items').innerText = 'Total Number of Item ' + list.length; // Replace that with the number of items!
}

function removeItem(event) {
    // Prevent page reload.
    event.preventDefault()

    const newItem = document.querySelector('#new-item').value;
    
    if(isStack) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        list.pop(newItem);
        console.log(list);
        console.log(list.length - 2);
        

    } else {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!
        

        
    }
    document.querySelector('#newest-item').innerText = 'My newest Item: ' + list.length  ; // Replace that empty string with the actual item!

    document.querySelector('#number-of-items').innerText = 'Total Number of Item ' + newItem ; // Replace that with the number of items!
    document.querySelector('#old-item').innerText = 'My oldest Item:' + list[0]; // Replace that empty string with the actual item!
    
}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()

    // How can we toggle whether it's a stack or a queue?
    // Your code below!
}

/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    firstItem.parentNode.removeChild(firstItem);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}
