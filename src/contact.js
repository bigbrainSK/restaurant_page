export function loadContact() {

    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    const address = document.createElement('p');
    const phoneNum = document.createElement('p');
    
    heading.textContent = 'Contact Information';
    address.textContent = '1234 Street street, Middle of Nowhere';
    phoneNum.textContent = '818-324-5844';
    
    content.appendChild(heading);
    content.appendChild(address);
    content.appendChild(phoneNum);

    
  } 


