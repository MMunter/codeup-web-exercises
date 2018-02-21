const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit
const fruitFirsts = fruits.map(fruit => fruit.charAt(0));
console.table(fruitFirsts);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

// const nameAgeCustomers = customers.map( customer => {
//     return {name: customer.name, age: customer.age}
// });
const nameAgeCustomers = customers.map(({name, age}) => {
    return {
         name,
         age
    };
});
console.log(nameAgeCustomers);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
const civilServantCustomers = customers.filter(customer => {
   // if (customer.occupation === "Teacher" || customer.occupation === "Police Officer"){
   //     return customer;
   // }
    return customer.occupation === "Teacher" || customer.occupation === "Police Officer";
});
console.log(civilServantCustomers);


// PROBLEM 4 - determine the average age of customers
let averageAge = customers.reduce((accumulation, customer) => {
    return accumulation + customer.age/customers.length;
}, 0);
console.log(averageAge);


// instructor objects example
// const emails = users.map(({ name, email }) => {email, name});
// console.log(emails);

const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];

// - Create a single object with properties containing arrays of all names, genders, and age
// const output = family.reduce((accumulator, object) => {
//     if(!accumulator.names) {
//         accumulator.names = [];
//
//     }
//     if (!accumulator.ages) {
//         accumulator.ages = [];
//     }
//     if (!accumulator.genders){
//         accumulator.genders = [];
//     }
//
//     accumulator.names.push(person.name);
//     accumulator.ages.push(person.age);
//     accumulator.genders.push(person.gender);
//
//     return accumulator;
// }, {});




const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age)
}

console.log(output);

//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()
