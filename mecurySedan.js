//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js");

//this shows how to call from this module...
let vehicleMercury = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(vehicleMercury.make);
