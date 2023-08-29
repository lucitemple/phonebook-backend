const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get(
  "/",
  (request, response) => {
    response.send("<h1>Hello World</h1>");
  }
);

app.get(
  "/info",
  (request, response) => {
    response.send(
      `<p>Phonebook has info for ${
        persons.length
      } people.</p><p>${new Date()}</p>`
    );
  }
);

app.get(
  "/api/persons",
  (request, response) => {
    response.json(persons);
  }
);

app.get(
  "/api/persons/:id",
  (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find((person) => person.id === id);

    person ? response.json(person) : response.status(404).end();
  }
);

app.delete(
  "/api/persons/:id",
  (request, response) => {
    const id = Number(request.params.id);

    persons = persons.filter((person) => Number(person.id) !== id);

    response.status(204).end();
  }
);

app.put(
  "/api/persons/:id",
  (request, response) => {
    const id = Number(request.params.id);
    const { name, number } = request.body;
    const updatedPerson = {
      name,
      number,
      id,
    };
    persons = persons.map((person) =>
      person.id === id ? updatedPerson : person
    );
    response.json(updatedPerson);
  }
);

const genRandomNumber = () => Math.floor(Math.random() * 999999999999);
const generateId = () => {
  let id = genRandomNumber();
  persons.map((p) => {
    if (p.id === id) {
      id = genRandomNumber();
    }
  });

  return id;
};

app.post(
  "/api/persons",
  (request, response) => {
    const body = request.body;

    if (!body.name || !body.number) {
      return response.status(400).json({ error: "name or number is missing." });
    }

    if (persons.find((person) => person.name === body.name)) {
      return response.status(400).json({
        error: "name already exists in phonebook. name must be unique",
      });
    }

    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    };

    persons = persons.concat(person);

    response.json(person);
  }
);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT} at http://localhost:${PORT}`);
