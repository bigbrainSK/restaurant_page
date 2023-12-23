loadMain();

 export function loadMain() {
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    const caption = document.createElement('p');
    const img = document.createElement('img');

    title.textContent = 's-cakes';
    caption.textContent = 'best pancakes in the city, original recipes created by chef SK';
    img.src = 'pancakes.jpg';

    content.appendChild(title);
    content.appendChild(caption);
    content.appendChild(img);
}


