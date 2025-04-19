// 1. Simple Object
const person1 = { name: "John", age: 30, country: "USA" }; // Properties with values

// 2. Object with Methods
const carInfo = {
  brand: "Toyota", model: "Camry", year: 2020,
  displayInfo: function() { return `${this.brand} ${this.model} (${this.year})`; } // Method to display info
};

// 3. Object with Nested Objects
const companyDetails = {
  name: "Tech Corp", address: { street: "123 Tech Lane", city: "Tech City", zip: "12345" }, employees: 100
}; // Nested object for address
//console.log(companyDetails);

// 4. Object with Arrays
const studentData = { name: "Alice", age: 22, subjects: ["Math", "Science", "English"] }; // Array in object

// 5. Dynamic Object Properties (Adding/Modifying properties)
const dogDetails = { breed: "Labrador", age: 5 };
dogDetails.color = "Yellow"; // Adding new property
dogDetails.age = 6; // Modifying existing property
//console.log(dogDetails);

// 6. Object with Computed Property Names
const dynamicKey = "color";
const carDetails = { [dynamicKey]: "Red", model: "BMW", year: 2021 }; //Dynamic key using a variable
console.log(carDetails);


// 7. Object Constructor (not commonly used)
const person2 = new Object();
person2.name = "Jane"; 
person2.age = 28; 
person2.country = "Canada"; 
// Object created using constructor
console.log(person2);
