import express, { Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";
// DOTENV si utilizza per tenere in un file separato informazioni
// quali port, database, crittografia, ecc
import "dotenv/config";

// Dichiarazione della porta di ascolto e del route
const app = express();
const port = process.env.PORT;

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
app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send(planets);
});
app.listen(port, (req: Request, res: Response) => {
  console.log(`App in ascolto su http://localhost:${port}`);
});
