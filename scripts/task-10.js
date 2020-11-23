import users from "./users.js";

const getSortedUniqueSkills = (users) =>
  users
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
