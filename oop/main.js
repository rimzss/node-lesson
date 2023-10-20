class Car {
  constructor(name, color, speed) {
    (this.name = name), (this.color = color);
    this.speed = speed;
  }
  fullInfo() {
    console.log("Full info function workded");
    console.log("Car name", this.name);
    console.log("Car color", this.color);
    console.log("Car speed", this.speed);
  }

  getName(role) {
    if (role == "manager") {
      return this.name;
    } else {
      return "You have no permission";
    }
  }
  setName(name) {
    this.name = name;
    return this.name;
  }
}
const car = new Car("BMW", "red", 200); //object -> instance (objectiin instance)
const car2 = new Car("Benz", "yellow", 300);
const car3 = new Car("Toyota", "black", 400);

console.log("=============");
console.log(car.getName());
console.log("=============");
console.log(car.setName("Audi"));

class Bus extends Car {
  constructor(name, color, speed, capacity) {
    super(name, color, speed);
    this.capacity = capacity;
  }
}

const bus1 = new Bus("Hino", "blue", 100, 40);
bus1.fullInfo();
