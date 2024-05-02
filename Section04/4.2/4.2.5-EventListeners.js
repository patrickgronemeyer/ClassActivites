// add an event listener to the dog picture that listens for a "click" and gives an alert
document.getElementById("my-item").addEventListener("click", event => {
  alert("my item was clicked");
    console.info("event", event);
});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector("h3").addEventListener("mouseover", event => {
  event.target.style.color = "red"
});

document.querySelector("h3").addEventListener("mouseout", event => {
  event.target.style.color = "black"
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.querySelector('a[href="http://www.google.com"]'.addEventListener("click", event => {
  event.preventDefault();


  windows.location.href = "https://bing.com";
})
