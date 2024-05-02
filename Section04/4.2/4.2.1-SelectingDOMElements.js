// select all unordered list (ul) elements
const ulList1 = document.querySelectorAll("ul");
const ulList2 = document.getElementsByTagName("ul");

// select all elements with the class "class-week"
const list1 = document.getElementsByClassName("class- week");
const list2 = document.querySelectorAll(".class-week");

// select all elements with the class "nav-bar"
const list3 = document.querySelectorAll("ul.nav-bar");

// select the element with the id "dog-picture" and save it to a variable
const pic = document.querySelector("#dog-picture");

// Demonstrate complex selector that finds all the child li element under a ul with the class of nav-bar
const list4 = document.querySelectorAll("ul.nav-bar li");
