const axios = require("axios");
//const URL = "https://rickandmortyapi.com/api/character/"; 
//``

const getCharById = async (req, res)=>{
const { id } = req.params; 
const URL = `https://rickandmortyapi.com/api/character/${id}`; 
try {
    const response =  await axios.get(URL)
    if (response.data.name) {
        const {id, name, gender, species, origin, image, status} = response.data
        const charObj = {
            id, 
            name, 
            gender, 
            species, 
            origin, 
            image,
            status
        }
        res.status(200).json(charObj)
    } 
    else res.status(404).json( "Not found."); 
} catch (error) {
    console.log("AXIOS ERROR", error)
    res.status((500).json(err.message))
}
    
}

module.exports = getCharById

// con http: web server 
/*const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"
const getCharById = (res, id)=>{
    axios
    .get(URL + id)
    .then((response) => {
        const {id, name, gender, species, origin, image, status} = response.data
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
    })
    .catch((reason) => {
        res.writeHead(500, {"Content-Type":"text/plain"})
        res.end(reason.message)
    })
}

module.exports = getCharById */