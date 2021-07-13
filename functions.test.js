const { expect, test } = require("@jest/globals");
const { stateAge, addUser, addColor } = require("./functions");

test('should return a string that says "I am age {age}"', () => {
  expect(stateAge(37)).toBe("I am age 37");
});

test("should return a created status", () => {
  expect(addUser("Joey", 29)).toStrictEqual({ name: "Joey", age: 29 });
});

test("Should add a color to the array", () => {
  expect(addColor("Purple")).toStrictEqual(["red", "white", "blue", "purple"]);
});
