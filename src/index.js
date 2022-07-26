import './styles.css';
import home from "./home";
import contact from "./contact";
import menu from "./menu";

const content = document.getElementById('content');
const nav = document.querySelectorAll('.navHeading');

content.appendChild(home())

const navTabs = (function () {
    nav.forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target.className === 'active') {
                return;
            }

            clearActiveClass();
            clearContent();
            element.classList.add('active');
            
            if (e.target.id === "home") {
                content.appendChild(home());
            }
            else if (e.target.id === "menu") {
                content.appendChild(menu());
            }
            else if (e.target.id === "contact") {
                content.appendChild(contact());
            }
            
        })
    });
    
    function clearContent() {
        content.removeChild(content.firstChild);
    }

    function clearActiveClass() {
        const active = document.querySelectorAll('.active');
        active.forEach(element => {
            element.classList.remove('active');
        });
    }

    

})();

