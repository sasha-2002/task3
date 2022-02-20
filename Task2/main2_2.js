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
  createUser("Tory", 18),
  createUser("Kate", 23),
  createUser("Pete", 22),
];

let sortedUsers = customSortForUsers(users);
console.log(sortedUsers);

function customSortForUsers(users) {
  let result = [];
  users.forEach((el) => {
    if (result[el.age] === undefined) {
      result[el.age] = [];
    }
    result[el.age].push(el);
  });
  let output = [];
  result.forEach((el) => {
    output.push(...el);
  });
  return output;
}
