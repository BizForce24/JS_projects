function generatePassword() {
  const lengthInput = document.getElementById("length");
  const passwordLength = parseInt(lengthInput.value);

  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("number").checked;
  const includeSymbols = document.getElementById("symbol").checked;

  const password = generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

  const passwordResult = document.getElementById("passwordResult");
  passwordResult.textContent = `Your Password Is: ${password}`;
}

function generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allowedChar = "";

  if (includeLowercase) allowedChar += lowerChar;
  if (includeUppercase) allowedChar += upperChar;
  if (includeNumbers) allowedChar += numberChar;
  if (includeSymbols) allowedChar += symbolChar;

  if (passwordLength <= 0) {
    return "Password must be at least 1 character long.";
  }

  if (allowedChar.length === 0) {
    return "At least 1 set of characters needs to be selected.";
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChar.length);
    password += allowedChar.charAt(randomIndex);
  }

  return password;
}
