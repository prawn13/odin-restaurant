import Icon from '../img/s.jpeg';

export function home() {
    const content = document.getElementById('content');
    if (content) { content.remove(); }

    const element = document.createElement('div');
    element.setAttribute('id', 'content');
    const h = document.createElement('h1');
    h.innerText = "giuseppe's bellissima spaghetto !";

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(h);
    element.appendChild(myIcon);

    return element;
}

