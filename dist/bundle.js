(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("HEADER");t.id="homePage",e.appendChild(t);const n=document.createElement("h1");n.textContent="Sample resturant",t.appendChild(n);const c=document.createElement("p");c.textContent="Come and eat our NPC approved ethnic foods",t.appendChild(c)},t={Food:{Appetizers:{name:["Salad","Spam Fries","Truffle Fries"],price:["$3","$4","$5"]},Mains:{name:["Wagyu Steak","Hamburger","Fish & Chips"],price:["$15","$12","$10"]}},Drinks:{Juices:{name:["Orange","Apple","Lime"],price:["$3","$3","$3"]},Cocktails:{name:["Bloody Mary","Old Fashioned"],price:["$7","$8"]}},Desserts:{Cakes:{name:["Lava Cake","Cheesecake"],price:["$5","$5"]}}};var n;function c(c){n!=c&&(((e,t)=>{const n=document.getElementById("content");n.removeChild(n.childNodes[2])})(),"Home"==c?e():"Menu"==c?(()=>{const e=document.getElementById("content"),n=document.createElement("SECTION");n.id="menuPage",e.appendChild(n);const c=Object.keys(t),o=Object.values(t);for(var a in c){const e=document.createElement("h1");e.textContent=c[a],n.appendChild(e);const t=Object.keys(o[a]),l=Object.values(o[a]);for(var d in t){const e=document.createElement("h3");e.textContent=t[d],n.appendChild(e);const c=l[d].name,o=l[d].price;for(var m in console.log(c),console.log(o),c){console.log(m+"\t"+(c.length-1));const e=document.createElement("div");e.className="menuItem",n.appendChild(e);const t=document.createElement("p");t.textContent=c[m],e.appendChild(t);const a=document.createElement("p");a.textContent=o[m],e.appendChild(a)}}}})():"Contact"==c&&alert("Contact"),n=c)}(()=>{const e=document.getElementById("content"),t=document.createElement("NAV");e.appendChild(t);const n=document.createElement("div");n.className="tab",t.appendChild(n);const c=document.createElement("BUTTON");c.className="tablinks",c.id="homeTab",c.textContent="Home",n.appendChild(c);const o=document.createElement("BUTTON");o.className="tablinks",o.id="menuTab",o.textContent="Menu",n.appendChild(o);const a=document.createElement("BUTTON");a.className="tablinks",a.id="contactTab",a.textContent="Contact",n.appendChild(a)})(),e(),n="Home",document.getElementById("homeTab").addEventListener("click",(function(){c("Home")})),document.getElementById("menuTab").addEventListener("click",(function(){c("Menu")})),document.getElementById("contactTab").addEventListener("click",(function(){c("Contact")}))})();