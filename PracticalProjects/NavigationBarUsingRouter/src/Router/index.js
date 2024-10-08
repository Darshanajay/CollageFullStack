db.details.insertMany([
    {name: "Darshan",age: 25,salary: 33000},
    {name: "Ajay",age: 15,salary: 43000},
    {name: "Suresh",age: 35,salary: 4000}
]);

db.details.updateOne(
    { age: 35 }, // Query filter
    { $set: { name: "Ganesh" } } // Update
    );