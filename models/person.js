const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//   console.log("give password as argument");
//   process.exit(1);
// }

// // Get info from command line
// const password = process.argv[2];
// const name = process.argv[3];
// const number = process.argv[4];

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;
console.log("connecting to", url);

mongoose.connect(url).then(result => {
  console.log('connected to MondoDB')
}).catch((error) => {
  console.log('error connecting to MongoDB: ', error)
});

const personSchema = new mongoose.Schema({
  name: String,
  number: Number || String,
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);

// if (name || number) {
//   const person = new Person({
//     name,
//     number,
//   });

//   // Create a contact
//   person.save().then((result) => {
//     console.log(`Added ${name} number ${number} to the phonebook`);
//     mongoose.connection.close();
//   });
// } else {
//   // Return all contacts
//   Person.find({}).then((result) => {
//       console.log('Phonebook:');
//     result.forEach((person) => {
//       console.log(person.name , person.number);
//     });
//     mongoose.connection.close();
//   });
// }
