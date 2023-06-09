const vaxTrail = (persons) => {
  let A = [];
  let B = [];
  let C = [];
  let D = [];
  persons.forEach((person) => {
    if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
      A.push(person);
    } else if (
      person.age >= 31 &&
      person.age <= 40 &&
      person.temperature < 100
    ) {
      B.push(person);
    } else if (
      person.age >= 41 &&
      person.age <= 50 &&
      person.temperature < 100
    ) {
      C.push(person);
    } else if (person.temperature >= 100) {
      D.push(person);
    }
  });
  return { A, B, C, D };
};
const result = vaxTrail([
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
]);

console.log(result);
