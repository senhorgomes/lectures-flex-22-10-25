//Why objects?
//Access things out of order, or by key
//Manipulate the data stored in an object

//Car

const carOne = [4, "red", "automatic", 4]
const carTwo = [4, "green", "automatic", 4]
const carThree = ["green", 2, "automatic", 4]

console.log(carThree[0])
//Objects are for describing a specific item
const carOneObject = {
  wheels: 4,
  color: "red",
  transmission: "automatic",
  doors: 4
}
const carTwoObject = {
  wheels: 4,
  color: "green",
  transmission: "automatic",
  doors: 4
}
const carThreeObject = {
  wheels: 4,
  color: "green",
  transmission: "automatic",
  doors: 2
}
//List of cars
//Objects, or arrays?
const listOfCars = [carOneObject,carTwoObject,carThreeObject]