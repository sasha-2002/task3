const createUser = function (name, age) {
  return {
    name,
    age,
    toString: function () {
      return `${this.name} is ${this.age}y.o.`;
    },
  };
};
const users = [
  createUser("John", 21),
  createUser("Tory", 18),
  createUser("Kate", 23),
  createUser("Pete", 22),
];
users.sort(compareUsers);
console.log(users);
function compareUsers(user1, user2) {
  if (user1.age === user2.age) {
    return 0;
  } else if (user1.age > user2.age) {
    return 1;
  } else {
    return -1;
  }
}
