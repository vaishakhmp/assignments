// Assume the character
var character = "a"; // Change this to any single character

// Convert the character to lowercase for case-insensitive comparison
character = character.toLowerCase();

// Check if the character is a vowel or consonant
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  console.log("V"); // Vowel
} else {
  console.log("C"); // Consonant
}