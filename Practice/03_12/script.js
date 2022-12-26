/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Fridge {
  constructor(brand, door, shelf, watt, price) {
    this.brand = brand;
    this.door = door;
    this.shelf = shelf;
    this.watt = watt;
    this.price = price;
  }

  fridgeDetails() {
    console.log(
      `This Fridge have ${this.door} door from brand ${this.brand}, It's have ${this.shelf} shelf also use electrict for ${this.watt}W. And The price is ${this.price}$.`
    );
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const firdge1 = new Fridge("Toshiba", 2, 4, 250, 573);

firdge1.fridgeDetails();

firdge1.changePrice(111);

firdge1.fridgeDetails();
