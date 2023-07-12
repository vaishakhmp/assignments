// Assume the total number of months
var totalMonths = 58;

// Convert total months to years and calculate remaining months
var years = Math.floor(totalMonths / 12);
var remainingMonths = totalMonths % 12;

// Print the results
console.log("Total Months: " + totalMonths);
console.log("Years: " + years);
console.log("Remaining Months: " + remainingMonths);