import express from 'express';
import routes from './routes'; 

const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati

// zadatak WA101 
app.get('/', (req, res) => res.send('Ruta datum - localhost:3000/datum. Ruta prognoza - localhost:3000/prognoza'))

app.get('/datum', (req,res) => {
    let today = new Date();
    let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    res.send(`Trenutni datum: ${date}. Trenutno vrijeme je ${time}`)
})
app.get('/prognoza', (req,res) => {
    let vrijeme = ["oblačno", "sunčano", "kišovito"];
    function random_vrijeme(vrijeme) {
        return vrijeme[Math.floor(Math.random()*vrijeme.length)];
    }
    res.send(`Danas će biti ${random_vrijeme(vrijeme)}`)})

// zadatak WA104
let popis = [
    {
        JMBAG: "0303021234",
        ime: "Marko",
        prezime: "Marković",
        godina_studija: "Druga godina preddiplomskog" 
    },
    {
        JMBAG: "0303021235",
        ime: "Jelena",
        prezime: "Jelenčić",
        godina_studija: "Prva godina diplomskog"
    },
    {
        JMBAG: "0303021236",
        ime: "Ivana",
        prezime: "Ivančić",
        godina_studija: "Druga godina diplomskog"
    },
    {
        JMBAG: "0303021237",
        ime: "Josip",
        prezime: "Josipović",
        godina_studija: "Prva godina preddiplomskog"
    },
    {
        JMBAG: "0303021238",
        ime: "Marina",
        prezime: "Marinković",
        godina_studija: "Prva godina preddiplomskog"
        }
   ];

app.get('/studenti', (req, res) => res.send(popis))
app.get('/studenti/first', (req, res) => res.send(popis[0]))
app.get('/studenti/last', (req, res) => res.send(popis[4]))

// zadatak WA102
app.get('/dodaj', routes.d_lista)
app.get('/dohvati', routes.p_lista)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))
