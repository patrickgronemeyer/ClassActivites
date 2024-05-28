// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");

  alert(callback(name));
}

// pass each "regular" function into getAndShowMessage as a "callback" function

// Using greet as the callback
getNameAndShowMessage(greet);

// Using welcome as the callback
getNameAndShowMessage(welcome);

// Using informAboutSale as the callback
getNameAndShowMessage(informAboutSale);

const obj = {
  thing: "thing",
  doSomething: function() {
    console.log("something");
  }
};
