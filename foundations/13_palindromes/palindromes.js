const palindromes = function (str) {
  // Source - https://stackoverflow.com/a/9364527
  // Posted by AD7six, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-04-20, License - CC BY-SA 3.0

  let anumerstr = str.replace(/\W/g, "").toLowerCase();

  let l = 0,
    r = anumerstr.length - 1;

  while (l < r) {
    if (anumerstr[l] !== anumerstr[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
