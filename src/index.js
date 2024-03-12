import './style.css';
import { pageLoad } from './init';
import { menu } from './menu';
import { contact } from './contact';

pageLoad();
let nav = document.querySelector('#nav');
let content = document.querySelector('#content');
nav.addEventListener('click', (event) => {
    
    let button = event.target;
    console.log(button.id);
    if (button.id && button.id !== 'nav') content.replaceChildren();

    if (button.id === 'home') pageLoad();
    else if (button.id === 'menu') menu();
    else if (button.id === 'cont') contact();
})