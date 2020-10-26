const loadHome = () =>{
    const content = document.getElementById("content");

    const header = document.createElement("HEADER");
    header.id = "homePage"
    content.appendChild(header);

    const restName = document.createElement("h1");
    restName.textContent = "Sample resturant"
    header.appendChild(restName);

    const restProp = document.createElement("p");
    restProp.textContent = "Come and eat our NPC approved ethnic foods"
    header.appendChild(restProp);
}

export default loadHome