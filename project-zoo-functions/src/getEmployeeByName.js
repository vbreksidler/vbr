const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const allEmployees = data.employees.filter((e) => e);
  const employee = allEmployees.find((e) =>
    employeeName === e.firstName || employeeName === e.lastName);
  if (employeeName === undefined) {
    return {};
  } return employee;
}
getEmployeeByName();

module.exports = getEmployeeByName;
