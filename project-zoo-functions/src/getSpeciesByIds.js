const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...animal0) {
  const animalID = species.filter((e) => animal0.includes(e.id));
  // console.log(animalID);
  return animalID;
}

getSpeciesByIds();

module.exports = getSpeciesByIds;
