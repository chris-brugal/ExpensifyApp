const person = {
    name: 'Chris',
    age: 19,
    location: {
        city: 'Lake Worth',
        temp: 90
    }
};

const {name, age} = person;

console.log(`hi im ${name} and i am ${age}.`)



//destructuring array:

const address = ['1299 S Juniper Street', 'Philly', 'Penns', '19147'];
const [street, city, state, zip] = address;
console.log(`${city}`)