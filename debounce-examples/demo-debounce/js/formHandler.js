import { search } from "./search.js";

// Setting up the form with event listeners
export const setUpForm = (form, inputValue, list) => {
  const debouncedSearch = debounce(() => search(inputValue, list), 500);
  form.addEventListener("submit", (e) => e.preventDefault());

  // Attach the debounced search function to the input event
  // This ensures that search is only invoked if there is a pause in typing of 500 ms
  inputValue.addEventListener("input", debouncedSearch);
};

// Debounce function to delay function execution
// `callback` is the function to be executed after the delay
// `delay` specifies how long to wait in milliseconds
const debounce = (callback, delay) => {
  // `timer` will hold the timeout identifier to be used for clearing the timeout
  let timer;
  return () => {
    // Clear any existing timeout to reset the delay period
    clearTimeout(timer);

    // Set a new timeout to call the callback function after the specified delay
    timer = setTimeout(callback, delay);
  };
};
