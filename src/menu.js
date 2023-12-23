export function loadMenu() {
   
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    const item1 = document.createElement('li'); 
    const item2 = document.createElement('li'); 
    const item3 = document.createElement('li'); 
    const item4 = document.createElement('li'); 

    heading.textContent = 'Menu';
    item1.textContent = 'Chocolate chip';
    item2.textContent = 'Brown sugar pecan';
    item3.textContent = 'Salted caramel banana';
    item4.textContent = 'Oreos with strawberries and matcha mascarpone';

    content.appendChild(heading);
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    content.appendChild(item4);

  
}






