const express = require('express');
const app = express()
const port = 3000

const hbs = require('hbs');



hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.use(express.static(__dirname + '/public'))
    //expres hbs
app.set('view engine', 'hbs')

hbs.registerHelper('getAno', () => {
    return new Date().getFullYear()
})



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Izan',
        ano: new Date().getFullYear()
    })

})
app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Izan'
    })

})

app.listen(port, () => {
    console.log('servidor conectando en el puerto', port);
    console.log('http://localhost:3000');
})