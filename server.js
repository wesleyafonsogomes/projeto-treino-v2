const express = require("express");
const app = express();
// middleware json 
app.use(express.json());
const db = require("./db/database");

PORT = 3000;

// testando conexão 

db.authenticate()
.then(() => {
    console.log("Banco de dados conectado!");
})
.catch(err => {
    console.log("Erro:", err)
});


// importar rota controller para os server.js

const carRoutes = require("./routes/routes");

app.use("/carros", carRoutes);


app.post("/x", async (req,res) => {
    res.status(200).send({sucesso: true});
})


db.sync({ force: true })  // <-- primeira vez só
    .then(() => {
        console.log("Banco sincronizado!");
        app.listen(3000, () => console.log("Online! Rodando na porta 3000"));
    })
    .catch(err => console.log(err));


// iniciando servidor 

app.listen(PORT, () => {
    console.log(`Online! Rodando na porta ${PORT}`);
})




