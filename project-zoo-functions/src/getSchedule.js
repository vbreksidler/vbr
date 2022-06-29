const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function objectValue(day) {
  const animalsDay1 = species.filter(({ availability }) => availability.includes(day));
  let alert = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  let animalsDay2 = animalsDay1.map(({ name }) => name);
  if (day === 'Monday') {
    alert = 'CLOSED';
    animalsDay2 = 'The zoo will be closed!';
  }
  return { [day]: { officeHour: alert, exhibition: animalsDay2 } };
}

function getSchedule(scheduleTarget) {
  const animals = species.map((animal) => animal.name);
  const weekDays = Object.keys(hours);
  if (weekDays.includes(scheduleTarget)) return objectValue(scheduleTarget);
  if (animals.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return weekDays.reduce((acc, day) => ({ ...acc, ...objectValue(day) }), {});
}
getSchedule();
module.exports = getSchedule;
