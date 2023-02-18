import Icon from '../img/s.jpeg';
import {about} from './about.js';
import {menu} from './menu.js';

export function home() {
    const content = document.getElementById('content');
    if (content) { content.remove(); }

    const element = document.createElement('div');
    element.setAttribute('id', 'content');


    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute('height', '100em');

    element.appendChild(myIcon);

    return element;
}

