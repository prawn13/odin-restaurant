import './style.css';
import {about} from './pages/about.js';
import {home} from './pages/home.js';
import {menu} from './pages/menu.js';

function buildNav() {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.innerText = 'Home';
    homeButton.addEventListener('click', () => home());
    homeContainer.appendChild(homeButton);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');
    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.innerText = 'About';
    aboutButton.addEventListener('click', () => about());
    aboutContainer.appendChild(aboutButton);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';
    menuButton.addEventListener('click', () => menu());
    menuContainer.appendChild(menuButton);

    navBar.appendChild(homeContainer);
    navBar.appendChild(aboutContainer);
    navBar.appendChild(menuContainer);

    return navBar;
}

// Builds static nav bar
document.body.appendChild(buildNav());

// Display home page on page load
document.body.appendChild(home());