function contact() {
    let content = document.querySelector('#content');
    let head = document.createElement('div');
    head.id = 'headline';
    let h1 = document.createElement('h1');
    h1.textContent = 'CONTACT US'
    head.appendChild(h1);
    
    head.appendChild(document.createTextNode('123-456-7890'));
    head.appendChild(document.createElement('br'));
    head.appendChild(document.createTextNode('restaurant@email.com'));
    content.appendChild(head);

    let hours = document.createElement('div');
    hours.id = 'hours';
    let h2 = document.createElement('h2');
    h2.textContent = 'SOCIAL MEDIA'
    hours.appendChild(h2);
    hours.appendChild(document.createElement('br'));
    hours.appendChild(document.createTextNode('facebook.com/resto'));
    hours.appendChild(document.createElement('br'));
    hours.appendChild(document.createTextNode('x.com/resto'));
    hours.appendChild(document.createElement('br'));
    hours.appendChild(document.createTextNode('youtube.com/resto'));
    content.appendChild(hours);
}

export { contact }