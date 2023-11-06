class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected doorOpen: boolean;
  protected key: Key;

  constructor(key: Key) {
    this.doorOpen = false;
    this.key = key;
  }

  abstract openDoor(enteredKey: Key): void;

  comeIn(person: Person): void {
    if (this.doorOpen) {
      console.log('Welcome home, ' + person.getKey().getSignature());
    } else {
      console.log('The door is closed. You cannot enter.');
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(enteredKey: Key): void {
    if (enteredKey.getSignature() === this.key.getSignature()) {
      this.doorOpen = true;
      console.log('The door is open.');
    } else {
      console.log('Wrong key. The door remains closed.');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
export {};