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
