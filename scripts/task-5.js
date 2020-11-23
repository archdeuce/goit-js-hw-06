import users from "./users.js";

const getUserWithEmail = (users, mail) =>
  users.find(({ email, name }) => email === mail);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
