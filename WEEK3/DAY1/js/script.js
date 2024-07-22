/* ESERCIZIO 1*/
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
        `  l'utente ${user1.firstName} e piu vecchio di ${user2.firstName} e anche di ${user3.firstName}`
      );
    } else if (user2.age > user1.age && user2.age > user3.age) {
      console.log(
        ` l'utente ${user2.firstName} e piu vecchio di ${user1.firstName} e anche di ${user3.firstName}`
      );
    } else {
      console.log(
        ` l'utente ${user3.firstName} e piu vecchio di ${user1.firstName} e anche di ${user2.firstName}`
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

/* ESERCIZIO 2*/

let sameOwner;
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwner = function (otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

const petList = [];

document.getElementById("form")[0].addEventListener("submit", function (e) {
  e.preventDefault();

  const petNameImput = document.getElementById("petName");
  const ownerNameImput = document.getElementById("ownerName");
  const speciesImput = document.getElementById("species");
  const breedImput = document.getElementById("breed");

  const petNameValue = petNameImput.value;
  const ownerNameValue = ownerNameImput.value;
  const speciesValue = speciesImput.value;
  const breedValue = breedImput.value;

  const Pet = new Pet(petNameValue, ownerNameValue, speciesValue, breedValue);

  contactsList.push(Pet);

  const unorderedList = document.getElementById("pets-List");

  unorderedList.innerHTML = "";

  for (let i = 0; i < contactsList.length; i++) {
    const newLi = document.createElement("li");

    newLi.innerText =
      petList[i].petName +
      ", di proprietà di " +
      petList[i].ownerName +
      " è un/una " +
      petLis[i].spiecies +
      " di ";
    petList[i].breed;

    newLi.classList.add("list-group-item");

    unorderedList.appendChild(newLi);
  }

  document.getElementsByTagName("form")[0].reset();
});
