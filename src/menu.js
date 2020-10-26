const categories = ["Food", "Drinks", "Desserts"];

const items = {
    Food      : {
        Appetizers  : {
            name  : ["Salad", "Spam Fries", "Truffle Fries"],
            price : ["$3", "$4", "$5"]
        },
        Mains       : {
            name  : ["Wagyu Steak","Hamburger", "Fish & Chips"],
            price : ["$15","$12", "$10"]
        }
    },
    Drinks    : {
        Juices : {
            name  : ["Orange", "Apple", "Lime"],
            price : ["$3", "$3", "$3"]
        },
        Cocktails:{
            name  : ["Bloody Mary", "Old Fashioned"],
            price   : ["$7", "$8"]
        }
    },
    Desserts  : {
        Cakes : {
            name    : ["Lava Cake", "Cheesecake"],
            price   : ["$5", "$5"]
        }
    }
};

const loadMenu = () =>{
    const content = document.getElementById("content");

    const container = document.createElement("SECTION");
    container.id = "menuPage"
    content.appendChild(container);

    const keys1 = Object.keys(items)
    const value1 = Object.values(items)

    for (var i in keys1){

        const topLevel = document.createElement("h1");
        topLevel.textContent = keys1[i]
        container.appendChild(topLevel);

        const keys2 = Object.keys(value1[i])
        const value2 = Object.values(value1[i])

        for (var j in keys2){
    
            const midLevel = document.createElement("h3");
            midLevel.textContent = keys2[j]
            container.appendChild(midLevel);

            const item = value2[j].name
            const price = value2[j].price

            console.log(item)
            console.log(price)

            for (var k in item){

                console.log(k+"\t"+(item.length-1))
        
                const bottomLevel = document.createElement("div");
                bottomLevel.className = "menuItem";
                container.appendChild(bottomLevel);

                const itemLevel = document.createElement("p");
                itemLevel.textContent = item[k]
                bottomLevel.appendChild(itemLevel);

                const priceLevel = document.createElement("p");
                priceLevel.textContent = price[k]
                bottomLevel.appendChild(priceLevel);

            }
        }
    }
}

export default loadMenu