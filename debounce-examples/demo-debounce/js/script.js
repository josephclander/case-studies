import { setUpForm } from "./formHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputValue = document.querySelector("#search");
  const list = document.querySelector("#list");

  setUpForm(form, inputValue, list);
});
