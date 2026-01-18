// UI component creation functions

/**
 * Creates a button component.
 * @param {string} label - The label for the button.
 * @param {string} onClick - The function to call on button click.
 * @returns {HTMLElement} The button element.
 */
function createButton(label, onClick) {
    const button = document.createElement('button');
    button.innerText = label;
    button.onclick = onClick;
    return button;
}

/**
 * Creates a card component.
 * @param {string} title - The title of the card.
 * @param {string} content - The content of the card.
 * @returns {HTMLElement} The card element.
 */
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    const cardTitle = document.createElement('h3');
    cardTitle.innerText = title;
    const cardContent = document.createElement('p');
    cardContent.innerText = content;
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    return card;
}

// Exporting the functions
export { createButton, createCard };