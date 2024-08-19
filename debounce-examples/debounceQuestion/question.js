// Task: to implement debounce() so there
// is only one "hi!" logged in the console

function debounce() {
  // write the code for debounce here
}

// sample callback function
function greet() {
  console.log("hi!");
}

const debouncedGreet = debounce(greet, 200);

// this will call the function twice
// but we only want it called once
// this is simulating a user entering
// multiple times in quick succession
// like in a search bar.
debouncedGreet();
debouncedGreet();
