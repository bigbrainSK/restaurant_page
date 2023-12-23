import  './homePage.js';
import  './contact.js';
import  './menu.js';
import { loadMain } from './homePage.js';
import { loadContact } from './contact.js';
import { loadMenu } from './menu.js';

const homeButton = document.createElement('button');
homeButton.innerText = 'Home';
document.body.appendChild(homeButton);
homeButton.addEventListener('click', () => {
    clearDisplay();
    loadMain();
});

const contactButton = document.createElement('button');
contactButton.innerText = 'Contact Info';
document.body.appendChild(contactButton);
contactButton.addEventListener('click', () => {
    clearDisplay();
    loadContact();
});

const menuButton = document.createElement('button');
menuButton.innerText = 'Menu';
document.body.appendChild(menuButton);
menuButton.addEventListener('click', () => {
    clearDisplay();
    loadMenu();
});



function clearDisplay() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}



