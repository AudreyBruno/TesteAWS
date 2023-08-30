import express from "express";
import cors from "cors";
import { db } from "./database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function(req, res){

    let ssql = "SELECT id_cliente, nome FROM cliente";

    db.query(ssql, function(err, result){
        if(err)
            return res.status(500).send(err);
        else
            return res.status(200).send(result);
    })
});

app.listen(3001, function(){
    console.log("Servidor rodando com sucesso");
});