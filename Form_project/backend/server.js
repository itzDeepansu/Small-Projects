// const express = require('express')
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Recieved on Backend")
})

app.listen(port, () => {
  console.log(`Example app listening on port port`)
})