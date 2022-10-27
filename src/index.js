import './style.css';
import {about} from './pages/about.js';
import {home} from './pages/home.js';
import {menu} from './pages/menu.js';

function buildNav() {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const homeContainer = document.createElement('div');
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.innerText = 'Home';
    homeButton.addEventListener('click', home());
    homeContainer.appendChild(homeButton);

    const aboutContainer = document.createElement('div');
    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.innerText = 'About';
    aboutButton.addEventListener('click', about());
    aboutContainer.appendChild(aboutButton);

    const menuContainer = document.createElement('div');
    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';
    menuButton.addEventListener('click', menu());
    menuContainer.appendChild(menuButton);

    navBar.appendChild(homeContainer);
    navBar.appendChild(aboutContainer);
    navBar.appendChild(menuContainer);

    return navBar;
}

document.body.appendChild(buildNav());



document.body.appendChild(home());


// top taskbar that is unchanged, lower content div
// buttons on taskbar each call the respective function (home/about/menu), which re-renders the lower content div accordingly