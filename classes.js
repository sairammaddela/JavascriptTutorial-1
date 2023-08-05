// function Employee(name) {}

// const emp1 = new Employee('vishal);

// classes are nothing they are also type of fucntion

class Employee {
  // this => {}
  constructor(name) {
    this.name = name;
  }

  // function
  printName() {
    console.log(this.name);
  }

  // setter
  set setName(value) {
    if (value.length >= 1) this.name = value;
    else throw Error("Name should not be less than zero");
  }

  // getter
  get getName() {
    return this.name;
  }
}

// oops
console.log(typeof Employee); // function

const emp1 = new Employee("Vishal");
console.log(emp1);
emp1.setName = "TIm tom";

emp1.printName();

console.log(emp1.getName);

//  20%
// inheritance
// polymorphism
// overriding
// super
// constructor
// parent method
// privarte

class Vehicle {
  //   constructor(brand, name, color, tyre) {
  //     this.brand = brand;
  //     this.name = name;
  //     this.color = color;
  //     this.tyre = tyre;
  //   }
  //   getVehicleName() {
  //     return this.name;
  //   }
  //   getVehicleColor() {
  //     return this.color;
  //   }
  //   getVehicleTyre() {
  //     return this.tyre;
  //   }
  speed(value) {
    console.log("this is the speed", value);
  }
}

class FourWheeler extends Vehicle {
  getMileage(value) {
    console.log("this is the mileage", value);
  }
}

const four = new FourWheeler();
four.speed(200);
four.getMileage(400);

const vehicle = new Vehicle("mahindra", "xuv700", "black", 4);
console.log(vehicle);
