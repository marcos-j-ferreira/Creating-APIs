import express from 'express';
import TypeNumber from  './TypeNumber.js';
import bodyParser from 'body-parser';

const app = express()

app.use (bodyParser.json())

app.get('/par-ou-impar', function(req, res){
    const number = req.query.number
    if(!number){
        res.json({error:"Digite um número valido"})
    }else{
        res.status(200).json({number:number, Validar_Numero:TypeNumber(parseInt(number))})
    }
})

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000')
});