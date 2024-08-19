export const createListItem = (name) => {
  const li = document.createElement("li");
  li.textContent = name;
  return li;
};

export const updateList = (list, filteredList) => {
  list.textContent = ""; // clear the list
  filteredList.forEach((name) => {
    list.appendChild(createListItem(name));
  });
};
