import _ from 'lodash';
import './css/style.css';
import Icon from './images/icon.png';
import Data from './data/data.xml';
import Notes from './data/data.csv';
import generic from './data/data.json';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add the image to our existing div 
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);
    console.log(generic);

    return element;
}


document.body.appendChild(component());