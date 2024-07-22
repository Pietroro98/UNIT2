/*ESERCIZIO 1*/
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge = function (user1, user2, user3) {
    if (user1.age > user2.age && user1.age > user3.age) {
      console.log(
        `  l utente ${user1.firstName} e piu vecchio di ${user2.firstName} e anche di ${user3.firstName}`
      );
    } else if (user2.age > user1.age && user2.age > user3.age) {
      console.log(
        ` l utente ${user2.firstName} e piu vecchio di ${user1.firstName} e anche di ${user3.firstName}`
      );
    } else {
      console.log(
        ` l utente ${user3.firstName} e piu vecchio di ${user1.firstName} e anche di ${user2.firstName}`
      );
    }
  };
}

const user1 = new User("pietro", "Romano", 26, "Palermo");
const user2 = new User("Giuseppe", "verdi", 40, "Milano");
const user3 = new User("Marco", "Gialli", 20, "Roma");

user1.compareAge(user1, user2, user3);

console.log(user1);
console.log(user2);
console.log(user3);
