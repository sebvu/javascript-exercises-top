const findTheOldest = function (people) {
  const ageSortedPeople = people.sort((a, b) => {
    let aYrDeath = new Date().getFullYear();
    if (typeof a.yearOfDeath !== "undefined") {
      aYrDeath = a.yearOfDeath;
    }

    let bYrDeath = new Date().getFullYear();
    if (typeof b.yearOfDeath !== "undefined") {
      bYrDeath = b.yearOfDeath;
    }

    aAge = aYrDeath - a.yearOfBirth;
    bAge = bYrDeath - b.yearOfBirth;

    return bAge - aAge;
  });

  return ageSortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
