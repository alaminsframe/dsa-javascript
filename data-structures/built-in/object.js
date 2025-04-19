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
console.log(companyDetails);



