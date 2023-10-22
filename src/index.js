const dotenv = require("dotenv"); 
dotenv.config()
const API_KEY = process.env.API_KEY

const express = require("express"); 
const app = express(); //app será um objeto de servidor que será usado para fazer várias coisas como ligar o servidor.
const axios = require("axios").create({baseUrl: "https://jsonplaceholder.typicode.com/"});


app.get('/getAll/', function(req, res) {
    //var cidade = req.body.cidade;
    //console.log(cidade);
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=votuporanga&appid=12d006d950c398772ce30392456a62ad&units=metric')
    .then(function (response) {
       res.send(response.data);
    })
    .catch(function (error) {
       res.status(500).send(error);
    })
});

app.get('/getCity/:cidade', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET'); 

  const { cidade } = req.params; 
  console.log(cidade);
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}ad&units=metric`)
  .then(function (response) {
     res.send(response.data);
  })
  .catch(function (error) {
     res.status(400).send(error);
  })
});

  app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
  })

const port = process.env.PORT || 3000; //Para acessar a aplicação pelo navegador, é necessário ouvir (listen) uma porta.
app.listen(port, () => {
  console.log(`Ouve na porta ${port}`);
});

