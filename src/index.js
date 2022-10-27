import './style.css';
import {about} from './pages/about.js';
import {home} from './pages/home.js';
import {menu} from './pages/menu.js';

document.body.appendChild(home());


// top taskbar that is unchanged, lower content div
// buttons on taskbar each call the respective function (home/about/menu), which re-renders the lower content div accordingly