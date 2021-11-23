import _ from 'lodash';
import './css/style.css';
import Icon from './images/icon.png'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add the image to our existing div 
    const myIcon = new Image();
    myIcon.src = Icon;

    return element;
}

document.body.appendChild(component());