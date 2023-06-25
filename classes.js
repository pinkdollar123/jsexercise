class Dog {
  _attendance = 0;

  constructor(name, birthday, owner) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.owner = owner;
    this.calculateAge();
  }

  calculateAge() {
    const now = new Date();
    const diffTime = now - this.birthday;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    this.age = Math.floor(diffDays / 365);
  }

  getAge() {
    return this.age;
  }

  bark() {
    console.log('The dog says woof!');
  }

  updateAttendance() {
    this._attendance++;
  }
}

const dogListElement = document.getElementById("dogList");

const dogs = [
  new Dog("Sharky", "04/01/2020", "ZD"),
  new Dog("Marky", "09/15/2015", 'XY'),
  new Dog("Clark", "10/25/19", "ZJ"),
]

const newDog = new Dog("John", "04/14/25", "Gilbert");
const secondDog = new Dog('Alexis', '12-25-0BC', 'Naldo');

dogs.push(newDog);
dogs.push(secondDog);

// loop through the dogs array
for (const dog of dogs) {
  // create an element for each dog
  const newDogElement = document.createElement('li');
  const newButton = document.createElement("button");
  newButton.textContent = 'Attendance';
  // add classname inside the element
  newDogElement.classList.add("list-group-item");
  newButton.classList.add('btn', 'btn-primary');
  // adds the textContent for the value of the dogs attributes
  newDogElement.innerHTML = `<b> Dog Name: </b>${dog.name} -
  <b>Birthday:</b> ${dog.birthday} - <b> Owner: </b> ${dog.owner} - Attendance:${dog._attendance} ${newButton.outerHTML}`;

  // Add event listener for each button clicking on it
  let buttonClicked = false;
  newButton.addEventListener('click', function() {
    if (!buttonClicked) {
      dog.updateAttendance();
      console.log(`Attendance increased for ${dog.name}: ${dog._attendance}`);
      buttonClicked = true;
    }
  });

      // Appends the new li element to the ul element parent
  dogListElement.appendChild(newDogElement);
}




