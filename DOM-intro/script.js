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
console.log(ul.firstElementChild.nextElementSibling.children); // children only provide the html elements


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

// create a new p element and  set the text content
const p = document.createElement("p");
p.textContent = " Hello"

// append the p element to the div with id app 
app.appendChild(p);


// Add to the end and beginning of the elements
const div = document.createElement("div");

const ul2 = document.createElement("ul2");

const li = document.createElement("li");
const secondLi = document.createElement("li");
const thirdLi = document.createElement("li");
const newChild = document.createElement("li")

li.textContent = "Task 1";
secondLi.textContent = "Task 2";
thirdLi.textContent = "Im first!";
newChild.textContent = "I can go wherever you want!"

ul2.appendChild(li);
ul2.appendChild(secondLi); // adds elemnt to the end
ul2.prepend(thirdLi); // adds element to the beginning
ul2.insertBefore(newChild, ul2.firstChild.nextSibling); // add the newChild

div.appendChild(ul2);
app.appendChild(div);

// removeChild(), using while loop
// while(ul2.firstChild){
//     ul2.removeChild(ul2.firstChild)
// }

// replaceCHild
const finalli = document.createElement("li");
finalli.textContent = "Replaced Child";

// replace an element with a new element
ul2.replaceChild(finalli, ul2.firstChild);

// remove the current element
ul2.lastElementChild.remove();



// create lists using loops
const ol = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ol"));
const ul3 = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ul"));

for (let i = 0; i < 3; i++) {
  ol.appendChild(document.createElement("li")).textContent = `Task ${i}`;
  ul3.appendChild(document.createElement("li")).textContent = `Product ${i}`;
}



const taskList = document.getElementById("task-list");
taskList.style.backgroundColor = "royalblue"
taskList.style.padding = "2em";

const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  const li = document.createElement("li");
  li.textContent = input.value;
  li.classList.add("container");
  taskList.appendChild(li);
};

// set an attribute
const a = document.createElement("a");
a.textContent = "Google";
a.setAttribute("href", "https;//www.google.com");
a.setAttribute("target", "_blank");

taskList.appendChild(a);
// check if attribute exist
console.log("ANCHOR ", a.hasAttribute("href"));
console.log("INPUT ", input.hasAttribute("name"));

// Read an attribute
console.log(a.getAttribute("href"));

// classlist

// add a new class
taskList.classList.add("wrapper");
console.log(taskList.classList);

// remove
taskList.classList.remove("class2");

// toggle
taskList.classList.toggle("class1"); // if that class doesn't exist it's gonna added, and if it's there it's gonna remove it
taskList.classList.toggle("class1");

// replace
taskList.classList.replace("class3", "new-class");

// contains
console.log(taskList.classList.contains("container"));
console.log(taskList.classList.contains("pop-up"));

console.log(taskList.classList);


