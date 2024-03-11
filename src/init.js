function pageLoad() {
    let content = document.querySelector('#content');
    let headline = document.createElement('div');
    headline.setAttribute('id', 'headline');

    let h1 = document.createElement('h1');
    h1.textContent = 'SOME RESTAURANT';
    headline.appendChild(h1);

    let text = document.createTextNode("Order online, over the phone or in our drive-thru.");
    headline.appendChild(text);
    content.appendChild(headline);
    
    let hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    let h2 = document.createElement('h2');
    h2.textContent = 'Hours';
    hours.appendChild(h2);

    let b = document.createElement('b');
    b.textContent = 'Weekdays:';
    hours.appendChild(b);
    hours.appendChild(document.createTextNode(" 8am - 8pm"));
    hours.appendChild(document.createElement('br'));
    
    let b2 = document.createElement('b');
    b2.textContent = 'Weekends:';
    hours.appendChild(b2);
    hours.appendChild(document.createTextNode(" 7am - 10pm"));
    hours.appendChild(document.createElement('br'));
    hours.appendChild(document.createElement('br'));

    let h22 = document.createElement('h2');
    h22.textContent = 'Location';
    hours.appendChild(h22);
    hours.appendChild(document.createTextNode(" 123 West Drive, East Avenue"));
    content.appendChild(hours);
}

export { pageLoad };