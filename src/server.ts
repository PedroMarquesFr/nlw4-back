import express from "express";

const app = express();
/* 
GET = Buscar
POST = Salvar
PUT = Alterar
DELETE = Deletar
PATCH = Alterecao especifica
*/

app.get("/", (request, response) => {
  return response.json({ message: "Hello World - NLW" });
});

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!" });
  });

app.listen(3333, () => console.log("Hello Back!"));
