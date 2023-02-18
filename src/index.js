import './style.css';
import { about } from './pages/about.js';
import { home } from './pages/home.js';
import { menu } from './pages/menu.js';

function buildNav() {
    const header = document.createElement('div');
    header.classList.add('header');

    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const name = document.createElement('div');
    const h = document.createElement('h1');
    name.classList.add('title');
    h.innerText = "giuseppe's bellissima spaghetto !";
    name.appendChild(h);

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.innerText = 'Home';
    homeButton.addEventListener('click', () => document.body.appendChild(home()));
    homeContainer.appendChild(homeButton);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';
    menuButton.addEventListener('click', () => document.body.appendChild(menu()));
    menuContainer.appendChild(menuButton);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');
    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.innerText = 'About';
    aboutButton.addEventListener('click', () => document.body.appendChild(about()));
    aboutContainer.appendChild(aboutButton);

    header.appendChild(name);

    navBar.appendChild(homeContainer);
    navBar.appendChild(menuContainer);
    navBar.appendChild(aboutContainer);
    header.appendChild(navBar);

    console.log(header);

    return header;
}

function buildFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = "Website by penelope";

    return footer;
}

// Builds static nav bar
document.body.appendChild(buildNav());

// Display home page on page load
document.body.appendChild(home());

// Display static footer
document.body.appendChild(buildFooter());
