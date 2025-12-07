// Function to read all form values
function readFormValues(formId) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  return values;
}

// Function to read a specific input value
function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  return input.value;
}

// Function to read form values by form name
function readFormByName(formName) {
  const form = document.querySelector(`form[name="${formName}"]`);
  if (!form) return null;
  
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}

// Example usage:
// const data = readFormValues('myForm');
// console.log(data);
