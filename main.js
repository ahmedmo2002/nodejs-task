import express from 'express';
//or const express = require('express')

import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(8000);

const students = [
    {
        id: 1,
        name: "Ahmed",
        city: 'melig'
    },
    {
        id: 11,
        name: "Ismail",
        city: 'shipeeen el kom'
    }, {
        id: 2,
        name: "Mohamed",
        city: 'Cairo'
    }, {
        id: 15,
        name: "Saeed",
        city: 'alexanderia'
    }, {
        id: 33,
        name: "Ragab",
        city: 'Tanta'
    }, {
        id: 4,
        name: "Isalam",
        city: 'Cairo'
    }, {
        id: 3,
        name: "Ahmed",
        city: 'Aswan'
    }
];

const get_students = (request, response) => {

    response.render("students", { layout: false, students:students});
};

app.get('/students', get_students)

app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = students.find((item) => {
        return item.id == id;
    });
    res.render("student", { layout: false, student: student });
});

app.get('/admin', (req, res) => {
    res.send('<h1> admin </h1>')
});

