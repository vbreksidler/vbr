const data = require('../data/zoo_data');

const { employees } = data;

function isManager(managerId) {
  const manager = employees.map((e) => e.managers)
    .some((e) => e[0] === managerId || e[1] === managerId);
  return manager;
}
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const list = employees.filter((e) => e.managers.includes(managerId));
  return list.map((e) => `${e.firstName} ${e.lastName}`);
}
getRelatedEmployees();
module.exports = { isManager, getRelatedEmployees };
