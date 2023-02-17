import {home} from './home.js';
import {menu} from './menu.js';

export function about() {
    const content = document.getElementById('content');
    if (content) { content.remove(); }
}