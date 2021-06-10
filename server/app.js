const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

let elements = [{  date: 0, typeTrain: "Велосипеп", distance:23  }, {  date: 0, typeTrain: "Велосипеп", distance:23  }];

let Reset = {
    distanceFilterMin: 0,
    distanceFilterMax : 9999,
    typeTrainFilter : "Не выбрано",
    elementsFilter : [...elements],
    dateFilterMin : "",
    dateFilterMax : ""
}

app.get('/', (req, res) => {
    return res.json(elements);
})
app.get('/reset', (req, res) => {
    return res.json(Reset);
})

app.post('/', (req,res) =>{
    elements.push(req.body);
    return res.sendStatus(200);
})
app.put('/', (req,res) =>{
    elements[req.body.i].date = req.body.date;
    elements[req.body.i].typeTrain = req.body.typeTrain;
    elements[req.body.i].distance = req.body.distance;
    return res.sendStatus(200);
})

app.delete('/', (req,res) =>{
    let elems = elements.filter((el, index) => index !== req.body.i);
    elements= [...elems]
    return res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})