console.log(window.document); // or console.log(document)
console.log(document.head);
console.log(document.body);


const pTag = document.getElementById("intro");
console.log(pTag);

console.dir(document.body);

console.dir(document.body.children[1].innerText);

console.log(document.scripts);


const ul = document.querySelector('ul');
console.log(ul);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

console.log(ul.childNodes);

console.log(ul.firstElementChild.nextElementSibling);
console.log(ul.firstElementChild.nextElementSibling.children); // childreen only provide the html elements


// Add or remove an element
const newAnchor = document.createElement("a");
newAnchor.textContent = "second Anchor";

console.log(newAnchor);

ul.firstElementChild.nextElementSibling.appendChild(newAnchor);

// querry the div with id app
const app = document.querySelector("#app");
console.log(app);

// append a new child div
app.appendChild(document.createElement("div"));

// create a sibling element
const p = document.createElement("p");
p.textContent = " Hello"
app.appendChild(p);

