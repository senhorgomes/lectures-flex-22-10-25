//Primitive Data Types?
//Integers/Number = 0
//Booleans = false
//String = ""
//Undefined,null

//NaN

//Symbol
//BigInt

//Data structures
//Arrays = []
//Objects = {}

const falsy = {}

function compare(variable) {
  if(variable) {
    console.log("THIS IS TRUE", variable)
  } else {
    console.log("THIS IS FALSE", variable)
  }
}

compare(falsy)
console.log("hello"*5)