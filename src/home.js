function home() {
    const element = document.createElement('div');
    element.textContent = 'Hello this is a restaurant';
    element.classList.add('content');
    element.classList.add('home');

    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = 'this is the restaurant info';

    element.appendChild(info);

    return element;
  }


  export default home;