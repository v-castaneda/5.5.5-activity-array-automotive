//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  // if passenger less than maximumPassengers then availableRoom == true
  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      this.availableRoom = true;
    }
  }

  // if fuel is greater than 0, then start == true
  start() {
    if (this.fuel > 0) {
      console.log("Car is on");
      return (this.start = true);
    } else {
      console.log("Car needs fuel");
      return (this.start = false);
    }
  }

  // if mileage is greater than 30000, time for maintenance == true
  checkService(mileage) {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}

// console.log({ Car });

let myCar = new Car("Lexus", "IS 350", "2022", "black", 500);
console.log(myCar);

myCar.start();
console.log(myCar);

myCar.checkService();
console.log(myCar);
