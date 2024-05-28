// print the outer HTML of the navigation bar
console.log(document.getElementById("unorderedList").outerHTML);

/*
  <ul id="unorderedList">
    <li>Item</li>
    <li>Item</li>
    <li>Another item</li>
  </ul>
*/

// print the inner HTML of the navigation bar
console.log(document.getElementById("unorderedList").innerHTML);

/*
    <li>Item</li>
    <li>Item</li>
    <li>Another item</li>
*/

// print the text content of the #class-schedule-list element
console.log(document.querySelector("h6").textContect);

/*
  Quite small
*/

// select the classList for the first class-week, then add the class "week-1"
document.querySelector("h2").classList.add("small-text");

/*
  <h2 class="heading small-text">This is a smaller header</h2>
*/

// select the img element and add a src attribute
document.querySelector("img").src = "https://path/to/image";

/*
<img src="https://path/to/image">
*/

// change the font color of the h1 element
document.querySelector("h1").style.color = "red";
