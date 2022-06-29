const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || entrants === {} || Object.values(entrants).length === 0) {
    return 0;
  }
  const adult = entrants.filter((e) => e.age >= 18 && e.age < 50).length;
  // console.log(adult);
  const child = entrants.filter((e) => e.age < 18).length;
  // console.log(child);
  const senior = entrants.filter((e) => e.age >= 50).length;
  // console.log(senior);
  const obj = {
    adult,
    child,
    senior,
  };
  // console.log(obj);
  return obj;
}
countEntrants();

function calculateEntry(entrants) {
  if (!entrants || entrants === {} || Object.values(entrants).length === 0) {
    return 0;
  } const calc = countEntrants(entrants);
  const calculator = Object.values(calc);
  const calculatorTotal = calculator[0] * 49.99 + calculator[1] * 20.99 + calculator[2] * 24.99;
  // console.log(calculatorTotal)
  return calculatorTotal;
}
calculateEntry();
module.exports = { calculateEntry, countEntrants };
