// PERSON

class Person {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  }
  print() {
    console.log('Email: ' + this.email + ', Phone: ' + this.phone + '!');
  }
}

// Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.

const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.

const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// Have sonny greet jordan using the greet method.

sonny.greet(jordan);

// Have jordan greet sonny using the greet method.

jordan.greet(sonny);

