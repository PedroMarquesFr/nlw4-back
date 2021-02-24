import express from "express";
import "reflect-metadata";
import createConnection from "./database";
import {router} from "./router";

createConnection();
const app = express();
/* 
GET = Buscar
POST = Salvar
PUT = Alterar
DELETE = Deletar
PATCH = Alterecao especifica
*/

app.use(express.json());
app.use(router);

export { app };