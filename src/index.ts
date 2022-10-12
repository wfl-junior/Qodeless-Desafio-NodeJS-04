/**
 * Required External Modules
 */

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { Aluno } from "./Aluno";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

const students: Aluno[] = [
  new Aluno({
    nome: "Delay",
    idade: 25,
    nota: 10,
  }),
  new Aluno({
    nome: "Thadeuzin",
    idade: 26,
    nota: 7.5,
  }),
  new Aluno({
    nome: "John Doe",
    idade: 31,
    nota: 5,
  }),
];

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  students.forEach(student => {
    console.log(
      `O Aluno ${student.nome}, com ${student.idade} anos tirou ${student.nota}`,
    );
  });
});
