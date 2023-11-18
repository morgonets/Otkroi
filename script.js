let clickCount = 0;

function incrementCounter() {
    clickCount++;

    if (clickCount === 10) {
        createNewButton();
    }
}

function createNewButton() {
    const newButton = document.createElement('button');
    newButton.textContent = 'Ты уверена?';
    newButton.onclick = displayMessage;

    document.body.appendChild(newButton);
}

function displayMessage() {
    document.getElementById('message').textContent = 'Пойдешь гулять?';
}