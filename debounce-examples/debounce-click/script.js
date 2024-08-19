document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#submit");

  const pay = () => {
    console.log("£100 paid!");
  };

  const debounce = (cb, delay) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(cb, delay);
    };
  };

  const debouncedClick = debounce(pay, 1000);

  button.addEventListener("click", debouncedClick);
});
