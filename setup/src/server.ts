import express from "express";
import "express-async-errors";
import morgan from "morgan";

// Dichiarazione della porta di ascolto e del route
const app = express();
const port = 3000;

// Dichiarazione dell'utilizzo del tipo json e
// registrazione delle richieste del Cliente,
// usando express e morgan
app.use(express.json());
app.use(morgan("dev"));

// Dichiarazione dei type
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

// Dichiarazione della variabile
let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.listen(port, () => {
  console.log(`App in ascolto su http://localhost:${port}`);
});
