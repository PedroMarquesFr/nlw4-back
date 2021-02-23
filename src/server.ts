import "reflect-metadata";
import "./database";

import express from "express";
import { router } from "./router";


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

app.listen(3333, () => console.log("Hello Back!"));
