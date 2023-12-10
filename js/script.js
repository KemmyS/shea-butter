
const qs = (query) => document.querySelector(query);
const hasClass = (element, className) => element.classList.contains(className);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);


const mediaQuery = window.matchMedia("(min-width: 768px)")

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";
const ACTIVE_CLASS = "active";


const menu = qs(".menu");
const nav = qs(".navbar");

const handleMediaQuery = (event) => {
    //Check if the media query is true
    if (event.matches) {
        console.log("matches 768");
        removeClass(nav,HIDE_CLASS);
        addClass(nav,SHOW_CLASS);
      }
};

//register event listener
mediaQuery.addEventListener('change', handleMediaQuery);

//initial check
handleMediaQuery(mediaQuery);


menu.addEventListener('click', (e) => {
    const item = e.target; 

    if(!hasClass(menu, ACTIVE_CLASS)) {
        //show the navbar
        addClass(menu, ACTIVE_CLASS);
        addClass(nav, SHOW_CLASS);
        removeClass(nav, HIDE_CLASS);
    } else {
        //hide the navbar
        removeClass(menu, ACTIVE_CLASS);
        removeClass(nav, SHOW_CLASS);
        addClass(nav, HIDE_CLASS);
    }

});

