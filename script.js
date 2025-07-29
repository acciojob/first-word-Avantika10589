function firstWord(s) {
  // your code here
  s = s.trimStart();
  const spaceIndex = s.indexOf(' ');

  if (spaceIndex === -1) {
    return s;
  }

  return s.substring(0, spaceIndex);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
