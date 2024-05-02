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

// remove the paragraph element in the nav-bar
document.querySelector("h1").remove();
