// Write your solution in this file!
// 1. global variable called customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// 4. Function to overwrite the global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a global constant leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

// 6. Function that tries to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; 
}