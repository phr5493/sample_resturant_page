const loadNavbar = () =>{

    const content = document.getElementById("content");

    const navBar = document.createElement("NAV");
    content.appendChild(navBar);

    const tabDiv = document.createElement("div");
    tabDiv.className = "tab"
    navBar.appendChild(tabDiv);

    const homeBtn = document.createElement("BUTTON");
    homeBtn.className = "tablinks"
    homeBtn.id = "homeTab"
    homeBtn.textContent = "Home"
    tabDiv.appendChild(homeBtn);

    const menuBtn = document.createElement("BUTTON");
    menuBtn.className = "tablinks"
    menuBtn.id = "menuTab"
    menuBtn.textContent = "Menu"
    tabDiv.appendChild(menuBtn);

    const contactBtn = document.createElement("BUTTON");
    contactBtn.className = "tablinks"
    contactBtn.id = "contactTab"
    contactBtn.textContent = "Contact"
    tabDiv.appendChild(contactBtn);
}

export default loadNavbar