const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  if (id === undefined) {
    return undefined;
  }
  const emp = employees.find((name) => name.id === id).responsibleFor[0];
  const arrayName = species.find((name) => name.id === emp).residents;
  const orderResident = arrayName.sort((a, b) => b.age - a.age);
  return orderResident.map((oldest) => [oldest.name, oldest.sex, oldest.age])[0];
}
getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
module.exports = getOldestFromFirstSpecies;
