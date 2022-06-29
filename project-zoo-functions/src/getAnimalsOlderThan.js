const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const allSpecies = species.filter((e) => e);
  const animals = allSpecies.filter((e) => animal === e.name);
  // console.log(animals);
  const animalsResidents = animals.map((e) => e.residents);
  // console.log(animalsResidents);
  const animalsAges = animalsResidents.map((e) => e.every((r) => r.age > age));
  // console.log(animalsAges);
  return animalsAges[0];
}
// console.log(getAnimalsOlderThan('otters', 7));
getAnimalsOlderThan();
module.exports = getAnimalsOlderThan;
