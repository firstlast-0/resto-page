import './style.css';
import image from './resto.jpg';

let content = document.querySelector('#content');
content.setAttribute('style', `background-image: url(${image})`);