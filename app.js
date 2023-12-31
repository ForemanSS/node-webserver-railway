
const express = require('express')
const hbs=require('hbs');
require( 'dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use( express.static('templete'));

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Kravist Valera',
        titulo: 'Curso de node '
    });
});


app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'Kravist Valera',
        titulo: 'Curso de node '
    });
});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Kravist Valera',
        titulo: 'Curso de node '
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})



