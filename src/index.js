import loadNavbar from './navbar.js';
import clearPage from './page.js';
import loadHome from './home.js';
import loadMenu from './menu.js';

var currPage

function openPage (caller) {

    if(currPage == caller){
        return
    } 

    clearPage()

    if(caller == 'Home'){
        loadHome()
    }
    else if (caller == 'Menu'){
        loadMenu()
    }
    else if (caller == 'Contact'){
        alert("Contact")
    }

    currPage = caller;
}

loadNavbar()
loadHome()

currPage = "Home"

document.getElementById("homeTab").addEventListener("click", function() {
    openPage('Home')
});
document.getElementById("menuTab").addEventListener("click", function() {
    openPage('Menu')
});
document.getElementById("contactTab").addEventListener("click", function() {
    openPage('Contact')
});