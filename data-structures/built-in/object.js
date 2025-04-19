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
//console.log(carDetails);

// 7. Object Constructor (not commonly used)
const person2 = new Object();
person2.name = "Jane"; 
person2.age = 28; 
person2.country = "Canada"; 
// Object created using constructor
//console.log(person2);

// 8. Object with Getter and Setter Methods
const userDetails = {
  firstName: "John", 
  lastName: "Doe",
  another: '',
  get fullName() { 
        return this.firstName + " " + this.lastName ; 
    }, // Getter for fullName
  set fullName(name) { 
        const [first, last] = name.split(" "); 
        this.firstName = first; 
        this.lastName = last; 
    }// Setter for fullName
};
//console.log(userDetails.fullName);
userDetails.fullName = "Alice Smith"; // Using setter
//console.log(userDetails.fullName);

// 9. Object Destructuring
const userInfo = { name: "Charlie", age: 25, country: "UK" };
const { name: userName, age: userAge, country: userCountry } = userInfo; 
// Destructuring object properties into variables

// console.log(userName); // "Charlie"
// console.log(userAge); // 25
// console.log(userCountry); // "UK"

// 10. Using Object.assign() to Clone or Merge Objects
const userObj1 = { name: "John", age: 30, country: 'USA' };
const userObj2 = { country: "UK", job: "Engineer" };
const mergedUserObj = Object.assign(userObj1, userObj2); // Merging objects
console.log(mergedUserObj); // { name: "John", age: 30, country: "USA", job: "Engineer" }

