/**
 * Debounce multiple calls to the API
 * @param {function} callback
 * @param {integer} timeout
 * @returns function
 */

function debounce(callback, timeout) {
  // set a variable to store the setTimeout id to access later
  let timerId;

  // encapsulate the timer in a function
  function output() {
    // if a timer exists - clear it
    // if one doesn't exist there are no errors
    clearTimeout(timerId);
    // set a new timeout
    timerId = setTimeout(() => {
      // when the timeout is reached
      // it will return the function and invoke it
      return callback();
    }, timeout);
  }

  // you need to return the function or
  // debouncedGreet will not have anything to exectute
  return output;
}

// sample callback function
function greet() {
  console.log("hi!");
}

// this stores the functions
// as it gets invoked as a function
// you need to return a function in it so that it can actually be called.
const debouncedGreet = debounce(greet, 2000);

// this will call the function twice
// but we only want it called once
// this is simulating a user entering
// multiple times in quick succession
// like in a search bar.
debouncedGreet();
debouncedGreet();
