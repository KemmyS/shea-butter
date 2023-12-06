
const qs = (query) => document.querySelector(query);
const hasClass = (element, className) => element.classList.contains(className);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";
const ACTIVE_CLASS = "active";


const menu = qs(".menu");
const nav = qs(".navbar");

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