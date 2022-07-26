/*create a div element for a menu containing menu items*/

function menu() {
  const element = document.createElement('div');
  element.classList.add('content');
  element.classList.add('menu');

  const item1 = menuItem('Margherita','San Marzano tomato sauce, fior di latte mozarella, basil','10');
  const item2 = menuItem('Siciliana','Anchovies, black olives, capers, San Marzano tomato sauce, fior di latte mozarella','13');
  const item3 = menuItem('Quattro Formaggi','Gorgonzola, Grana Padano, Fontina, fior di latte mozarella','14');
  const item4 = menuItem('Diavola','Nduja, San Marzano tomato sauce, fior di latte mozarella','12');
  const item5 = menuItem('Margherita','Tomato, Cheese, Bread','12');
  const item6 = menuItem('Margherita','Tomato, Cheese, Bread','12');


  element.appendChild(item1);
  element.appendChild(item2);
  element.appendChild(item3);
  element.appendChild(item4);
  element.appendChild(item5);
  element.appendChild(item6);

  const toTop = document.createElement('i');
  toTop.id = 'toTop'
  toTop.textContent = 'top';
  element.appendChild(toTop);
 
  toTop.addEventListener('click', function(e){
    console.log('ok');
    element.scrollTo(0,0);
    
  })

  return element;


}

/*create a div element for each menu item*/

function menuItem(name,description,price) {
const item = document.createElement('div');
item.classList.add('menuItem');

let header = document.createElement('h2');
header.textContent = name;
let body = document.createElement('p');
body.textContent = description;
let num = document.createElement('p');
num.textContent = price;

item.appendChild(header);
item.appendChild(body);
item.appendChild(num);

return item;
}

export default menu;