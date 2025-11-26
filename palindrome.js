function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("око")); // true
console.log(isPalindrome("привіт")); // false
