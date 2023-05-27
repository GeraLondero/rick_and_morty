const express = require('express');
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const { conn } = require('./DB_connection');
//const getCharById = require("../src/controllers/getCharById")

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 //Crea un middleware que ejecute a **`express.json()`**
 server.use(express.json())

 server.use("/rickandmorty", router)
conn.sync({force:true})
.then(() =>{
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
     });
}).catch((err) =>{
    console.log(err)
})


// con http: web server 
/*const http = require("http")
const getCharById = require("./controllers/getCharById")
const PORT = 3001

http.createServer((req, res) =>{
res.setHeader('Access-Control-Allow-Origin', '*');
console.log(req.url)
try {
    const {url} = req
    if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").at(-1)
        
        getCharById(res, id)
        
    }
} catch (error) {
    console.log(error)
    throw new Error (error)
}

}).listen(PORT, () => {
    console.log (`server on port ${PORT}`)
})*/

