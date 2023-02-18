import {about} from './about.js';
import {home} from './home.js';

export function menu() {
    const content = document.getElementById('content');
    if (content) { content.remove(); }

    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    return element;
}