// TODO: Add your import statements here.
import { getRoles, getCompanies } from './modules/salaryData.js';
import * as workAroundModule from './modules/workAroundModule.js';
console.log(workAroundModule);

// TODO: Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => { // For each label...
    // Create the radio input element.
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);
    
    // Update the results when the input is selected.
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

function updateResults() {
  const companyInput = document.querySelector("input[name='company']:checked");
  const roleInput = document.querySelector("input[name='role']:checked");

// Prevents error when no selection is made
if (!companyInput || !roleInput) return;

  const company = companyInput.value;
  const role = roleInput.value;

  // TODO: Use the workAroundModule functions to calculate the needed data.
  const averageSalaryByRole = workAroundModule.getAverageSalaryByRole(role);
  const averageSalaryByCompany = workAroundModule.getAverageSalaryByCompany(company);
  const salary = workAroundModule.getSalaryAtCompany(role, company);
  const industryAverageSalary = workAroundModule.getIndustryAverageSalary();

  // Render them to the screen.
  document.getElementById('salarySelected').innerText = `The salary for ${role}s at ${company} is \$${salary}`;
  document.getElementById('salaryAverageByRole').innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
  document.getElementById('salaryAverageByCompany').innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById('salaryAverageIndustry').innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}