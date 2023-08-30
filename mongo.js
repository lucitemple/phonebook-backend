const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

// Get info from command line
const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://lucitemple:${password}@fso-phonebook.5irf7qr.mongodb.net/PhonebookApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: Number || String,
});

const Person = mongoose.model("Person", personSchema);

if (name || number) {
  const person = new Person({
    name,
    number,
  });

  // Create a contact
  person.save().then((result) => {
    console.log(`Added ${name} number ${number} to the phonebook`);
    mongoose.connection.close();
  });
} else {
  // Return all contacts
  Person.find({}).then((result) => {
      console.log('Phonebook:');
    result.forEach((person) => {
      console.log(person.name , person.number);
    });
    mongoose.connection.close();
  });
}
