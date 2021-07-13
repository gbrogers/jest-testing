const { conditionalExpression } = require("@babel/types");
let colors = ["red", "white", "blue"];

module.exports = {
  stateAge: (age) => {
    return `I am age ${age}`;
  },
  addUser: (name, age) => {
    let user = { name, age };
    if (user.age > 21) {
      return user;
    } else {
      return "user not old enough";
    }
  },
  addColor: (color) => {
    colors.push(color.toLowerCase());
    return colors;
  },
};
