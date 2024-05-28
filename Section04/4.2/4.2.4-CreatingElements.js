// add your new ul element to the nav-bar
// create two new list item (li) elements, and add some text to them
// add the li elements to the ul in the nav-bar
// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
const listItem = document.createElement("li");
listItem.textContent = "My First Item";
listItem.style.color = "blue";
listItem.id = "my-item";
unorderedList.appendChild(listItem);
document.querySelector("body").appendChild(unorderedList);

/*
  <body>
    ...

    <ul></ul>
      <li style="color: blue"> My first element
  </body>
*/

// Alternative to the above:
const unorderedList2 = document.createElement("ul");
unorderedList2.innerHTML = '<li style="color: blue">My First Item</li>';
document.querySelector("body").appendChild(unorderedList2);

// remove the paragraph element in the nav-bar
const h1Element = document.querySelector("h1");
h1Element.innerText = "something new";
h1Element.remove();

// alternative to the above:
const h1Element2 = document.querySelector("h1");
// h1Element2.outerHTML = "";

// h1Element2.outerHTML = "<h2>I just replaced the h1</h2>";
