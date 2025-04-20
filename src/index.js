import './style.css';
import './home'
import { modHome } from './home';
import './menu'
import { modMenu } from './menu';

modHome.displayHome();

const display= (function(){
    const content= document.querySelector("#content");
    const home= document.querySelector("#home");
    const menu= document.querySelector("#menu");
    const about= document.querySelector("#about");

    home.addEventListener("click",()=>{
        content.innerHTML=null;
        modHome.displayHome();
    })

    menu.addEventListener("click",()=>{
        content.innerHTML=null;
        modMenu.displayMenu();
    })

}) ();