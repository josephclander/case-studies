import { people } from "./peopleData.js";
import { updateList } from "./listUI.js";

const filterPeople = (query) => {
  return people.filter((person) => person.name.toLowerCase().includes(query));
};

export const search = (inputValue, list) => {
  const query = inputValue.value.toLowerCase();
  const filteredPeople = filterPeople(query);
  updateList(
    list,
    filteredPeople.map((person) => person.name)
  );
};
