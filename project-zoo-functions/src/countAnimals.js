const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const animalUndefined = () => {
  const namesAnimals = species.reduce((acc, cv) => {
    acc.push(cv.name);
    return acc;
  }, []);
  const totalResidents = [];
  species.filter((e) => e.name).filter((r) => totalResidents.push(r.residents));
  const residents = totalResidents.map((e) => e.length);
  const resposta = namesAnimals.reduce((acc, cv, i) => {
    acc[cv] = residents[i];
    return acc;
  }, {});
  return resposta;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return animalUndefined();
  }
  const allSpecies = species.filter((e) => e);
  const destru = Object.values(animal);
  const animals = allSpecies.filter((e) => (destru[0] === e.name)).map((e) => e.residents);
  const animalsSex = animals.map((e) => e.filter((r) => destru[1] === r.sex));
  const withoutArrayAnimalSex = Object.values(animalsSex[0]);
  const counteringSex = withoutArrayAnimalSex.length;
  const withoutArrayAnimals = Object.values(animals[0]);
  const counteringAnimals = withoutArrayAnimals.length;
  if (destru.length === 1) {
    return counteringAnimals;
  } if (counteringSex > 1 && destru.length > 1) {
    return counteringSex;
  } return 0;
}
countAnimals();

module.exports = countAnimals;
