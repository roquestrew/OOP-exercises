// PERSON ////////////////////////////////////////////////////////////////////////

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

// Write a statement to print the contact info (email and phone) of Sonny.

console.log(`phone: ${sonny.phone}, email: ${sonny.email}`);

// Write another statement to print the contact info of Jordan.

console.log(`phone: ${jordan.phone}, email: ${jordan.email}`);

// CARD ////////////////////////////////////////////////////////////////////////

class Card {
  constructor(point, suit) {
      this.point = point;
      this.suit = suit;
  }
}
// > let myCard = new Card(5, 'diamonds')

let myCard = new Card(5, 'diamonds');

// > myCard.point
// 5

console.log(myCard.point);

// > myCard.suit
// 'diamonds'

console.log(myCard.suit);


// getImageUrl()

// > myCard.getImageUrl()
// 'images/5_of_diamonds.png'

// HAND ////////////////////////////////////////////////////////////////////////

// > var myHand = new Hand()
// > myHand.addCard(new Card(5, 'diamonds'))
// > myHand.addCard(new Card(13, 'spades'))
// > myHand.getPoints()
// 15

// DECK ////////////////////////////////////////////////////////////////////////

// > var myDeck = new Deck()
// > myDeck.draw()
// Card {point: 6, suit: "clubs"}
// > myDeck.draw()
// Card {point: 1, suit: "spades"}
// > myDeck.shuffle()
// > myDeck.numCardsLeft()
// 50