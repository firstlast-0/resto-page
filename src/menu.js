function menu() {
    let content = document.querySelector('#content');
    let head = document.createElement('div');
    head.setAttribute('id', 'headline');
    let h1 = document.createElement('h1');
    h1.textContent = 'MENU';
    head.appendChild(h1);
    head.appendChild(document.createTextNode('MAIN DISHES'));
    content.appendChild(head);

    let item = document.createElement('div');
    item.setAttribute('class', 'item');
    let h2 = document.createElement('h2');
    h2.textContent = 'Chicken - $10';
    item.appendChild(h2);

    let chic = document.createElement('img');
    chic.setAttribute('alt', 'chic');
    chic.setAttribute('id', 'chic');
    item.appendChild(chic);
    content.appendChild(item);

    let item2 = document.createElement('div');
    item2.setAttribute('class', 'item');
    let h22 = document.createElement('h2');
    h22.textContent = 'Spaghetti - $8';
    item2.appendChild(h22);

    let spag = document.createElement('img');
    spag.setAttribute('alt', 'spag');
    spag.setAttribute('id', 'spag');
    item2.appendChild(spag);
    content.appendChild(item2);

    let item3 = document.createElement('div');
    item3.setAttribute('class', 'item');
    let h23 = document.createElement('h2');
    h23.textContent = 'Pizza - $12';
    item3.appendChild(h23);

    let piz = document.createElement('img');
    piz.setAttribute('alt', 'piz');
    piz.setAttribute('id', 'piz');
    item3.appendChild(piz);
    content.appendChild(item3);

    let bev = document.createElement('div');
    bev.setAttribute('class', 'item');
    let h24 = document.createElement('h2');
    h24.textContent = 'Beverages';
    bev.appendChild(h24);

    bev.appendChild(document.createTextNode('Cola - $5'));
    bev.appendChild(document.createElement('br'));
    bev.appendChild(document.createTextNode('Lemonade - $4'));
    bev.appendChild(document.createElement('br'));
    bev.appendChild(document.createTextNode('Water - $2'));
    content.appendChild(bev);
}

export { menu };