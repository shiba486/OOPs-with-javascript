function generatePassword(length) {
  const character =
    "ABCDEFGHIJKLMLOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * character.length);
    password += character.charAt(randomIndex);
  }
  return password
}

console.log(generatePassword(12));
